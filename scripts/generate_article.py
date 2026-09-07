#!/usr/bin/env python3
"""
Genera el articulo semanal y NO lo deja pasar si esta roto.

El flujo viejo era: Groq escribe TSX -> git add . -> push. Sin build, sin
validacion, sin registrar el articulo. Resultado documentado en 3 repos:
JSX que no compila, herramientas inventadas que dan 404, credenciales de autor
fabricadas en paginas YMYL, y articulos huerfanos del sitemap.

Este script: genera -> repara lo mecanico -> VALIDA -> registra en sitemap y
en el indice del blog. Si la validacion falla, sale != 0 y el workflow no
commitea nada.

Uso: TOPIC=... SLUG=... TODAY=YYYY-MM-DD GROQ_API_KEY=... python3 scripts/generate_article.py
"""
import json, os, re, sys, time, pathlib, urllib.request, urllib.error

ROOT = pathlib.Path(__file__).resolve().parent.parent
CFG = json.loads((ROOT / "scripts" / "article_config.json").read_text())

APP = ROOT / CFG["app_dir"]
SITE = CFG["site_url"].rstrip("/")
AUTHOR_NAME = CFG["author"]["name"]
AUTHOR_TITLE = CFG["author"]["title"]

TOPIC = os.environ["TOPIC"]
SLUG = os.environ["SLUG"]
TODAY = os.environ["TODAY"]

# U+202F (narrow no-break space) y amigos: el modelo los mete y rompen el
# matcheo por string literal. Se normalizan antes de cualquier scan.
INVISIBLE = {" ": " ", " ": " ", " ": " ", "​": "",
             "﻿": "", "‑": "-", "–": "-", "—": "-"}


def die(msg, details=None):
    print(f"\n[FALLO] {msg}", file=sys.stderr)
    for d in details or []:
        print(f"   - {d}", file=sys.stderr)
    sys.exit(1)


def normalize(s):
    for bad, good in INVISIBLE.items():
        s = s.replace(bad, good)
    return s


def real_routes():
    """Rutas que EXISTEN de verdad, leidas del filesystem. El modelo solo
    puede linkear a estas: asi no puede inventar /tools/pdf-batch-compress."""
    out = set()
    for p in APP.rglob("page.tsx"):
        rel = p.relative_to(APP).parent
        parts = [x for x in rel.parts if not (x.startswith("(") or x.startswith("["))]
        out.add("/" + "/".join(parts) if parts else "/")
    return out


# ---------------------------------------------------------------- generacion
def generate(routes):
    linkable = sorted(r for r in routes if r not in ("/",))
    extra = CFG.get("prompt_extra", "")
    imports = "\n".join("  " + i for i in CFG["imports"])

    prompt = f"""Write a complete Next.js blog article (TSX file) for {SITE} about: "{TOPIC}"

STRUCTURE
- Complete, ready-to-deploy TSX file. Output ONLY the TSX code, no explanation, no markdown fences.
- Exactly these imports, nothing else:
{imports}
- Export metadata with title, description, and alternates: {{ canonical: "{SITE}/blog/{SLUG}" }}.
  canonical MUST be nested under alternates, never a top-level Metadata key.
- Article and FAQ JSON-LD as const variables inside the component function.
- datePublished: "{TODAY}".
- export default function Page() returning the full JSX.
- 5-7 practical sections with step-by-step instructions, then a FAQ with 4 questions.
- 1,200-1,800 words of real content.

HARD RULES — breaking any of these makes the article unusable
1. INTERNAL LINKS: you may only link to these paths, copied exactly. Do not invent any other
   internal path, do not guess, do not link to a tool that is not on this list:
{chr(10).join("     " + r for r in linkable)}
   This list is the COMPLETE set of pages this site has. If the topic describes something
   this site does not do, that is fine and expected: explain how the reader can do it with
   other software or built-in OS features, and do not link to an internal page for it and do
   not claim this site offers it. Never write a link like /rotate-pdf or /batch-compress just
   because the topic mentions it. External links to real, well known sites are fine.
2. AUTHOR: the author is {AUTHOR_NAME}, {AUTHOR_TITLE}. Never invent a different job title,
   never invent years of experience, credentials, licences or certifications for the author.
   Do not write an author bio at all beyond that name and title.
3. NEVER claim this site is built on, powered by, or uses another company's engine or
   technology. Never compare by claiming shared infrastructure with a competitor.
4. Only describe features this site actually has. Do not describe uploading files, batch
   processing or any capability unless it exists in the linkable paths above.
5. JSX SAFETY: never write a bare < or > inside visible text. Write "less than" and
   "greater than" in words. Never use a backtick template literal inside JSX text.
6. Do not mention "Google AdSense" — say "ad-supported" if needed.
{extra}
Write as {AUTHOR_NAME}, practical and direct, first person."""

    body = json.dumps({
        "model": os.environ.get("GROQ_MODEL", "openai/gpt-oss-120b"),
        # El tier free de Groq tiene TPM=8000 contando prompt + completion.
        # Con 8000 aca, una sola request se pasa sola y devuelve 429.
        "max_tokens": 6000,
        "reasoning_effort": "low",
        "messages": [{"role": "user", "content": prompt}],
    }).encode()

    # gpt-oss a veces contesta con finish_reason=stop, gasta los tokens en el
    # canal de razonamiento y devuelve content vacio. Es intermitente: medido
    # en la misma prompt, un intento vacio y los 4 siguientes con contenido.
    last = ""
    attempt = 0
    rate_waits = 0
    while attempt < 6 and rate_waits < 8:
        req = urllib.request.Request(
            "https://api.groq.com/openai/v1/chat/completions", data=body,
            headers={"Authorization": "Bearer " + os.environ["GROQ_API_KEY"],
                     "Content-Type": "application/json",
                     # sin User-Agent propio, Cloudflare bloquea urllib con 403/1010
                     "User-Agent": "Mozilla/5.0 (compatible; KlickifyArticleBot/1.0)"})
        try:
            with urllib.request.urlopen(req, timeout=180) as r:
                res = json.loads(r.read())
        except urllib.error.HTTPError as e:
            detail = e.read().decode()
            if e.code == 429:
                # esperar por rate limit NO gasta un intento de contenido
                m = re.search(r"try again in ([\d.]+)s", detail)
                wait = float(m.group(1)) + 2 if m else 20.0
                rate_waits += 1
                print(f"  rate limit de Groq, esperando {wait:.1f}s")
                time.sleep(wait)
                continue
            die(f"Groq devolvio {e.code}", [detail[:400]])
        attempt += 1
        last = res["choices"][0]["message"].get("content") or ""
        if len(last.strip()) > 500:
            return last
        print(f"  intento {attempt}/6: Groq devolvio {len(last)} chars, reintentando")
        time.sleep(3)
    die("Groq no devolvio contenido usable tras 6 intentos")


# ------------------------------------------------------------------ reparado
def repair(src):
    """Arregla lo mecanico y determinista. Lo que no se pueda arreglar asi,
    lo agarra validate() y frena el push."""
    fixes = []
    src = normalize(src)

    # fences de markdown
    new = re.sub(r"^```(?:tsx|typescript|jsx|ts)?\s*$", "", src, flags=re.MULTILINE)
    if new != src:
        fixes.append("quitadas fences de markdown")
        src = new

    # AuthorBox no acepta props en ningun repo
    new = re.sub(r"<AuthorBox\s+[^/>]*/>", "<AuthorBox />", src)
    if new != src:
        fixes.append("AuthorBox: props removidas")
        src = new

    # relatedLinks usa {href,label}, el modelo escribe title
    new = re.sub(r"(\{\s*href:\s*[^}]*?)\btitle:", r"\1label:", src)
    if new != src:
        fixes.append("relatedLinks: title -> label")
        src = new

    # tag de cierre sin ">": "</strong or ..." rompe el build. Visto en vivo.
    new = re.sub(r"</([A-Za-z][A-Za-z0-9]*)(?![A-Za-z0-9>])", r"</\1>", src)
    if new != src:
        fixes.append("cerrado tag de cierre sin >")
        src = new

    # < suelto en texto JSX: "< 20", "<620". Solo cuando sigue espacio o digito.
    new = re.sub(r"<(?=[\s\d])", "{'<'}", src)
    if new != src:
        fixes.append("escapado < suelto en texto")
        src = new

    return src.strip() + "\n", fixes


# ---------------------------------------------------------------- validacion
FAKE_CREDENTIALS = [
    r"\b\d+\+?\s*years?\s+(?:of\s+)?(?:experience|helping|working|in\s+the)",
    r"\bSenior\s+\w+\s+(?:Analyst|Advisor|Specialist|Consultant|Officer)\b",
    r"\b(?:licensed|certified|accredited)\s+(?:mortgage|loan|financial|tax)\b",
    r"\bNMLS\b", r"\bCFP\b", r"\bCPA\b",
]
FALSE_CLAIMS = [
    r"same\s+engine\s+as", r"built\s+on\s+(?:the\s+)?same", r"powered\s+by\s+(?:Smallpdf|iLovePDF|Adobe|Zillow)",
    r"we\s+use\s+(?:Smallpdf|iLovePDF|Adobe)['’]?s?\s+(?:engine|technology|api)",
]


def validate(src, routes):
    errs = []
    src_n = normalize(src)

    # 1. links internos inventados
    for href in set(re.findall(r"href=[\"'](/[^\"'#?]*)", src_n)):
        clean = "/" + href.strip("/") if href != "/" else "/"
        if clean not in routes and clean != f"/blog/{SLUG}":
            errs.append(f"link interno inexistente: {href}")

    # 2. credenciales de autor fabricadas
    for pat in FAKE_CREDENTIALS:
        for m in re.finditer(pat, src_n, re.I):
            errs.append(f"credencial de autor fabricada: {m.group(0)!r}")

    # 3. claims falsos sobre la tecnologia del sitio
    for pat in FALSE_CLAIMS:
        for m in re.finditer(pat, src_n, re.I):
            errs.append(f"claim falso sobre el motor del sitio: {m.group(0)!r}")

    # 4. autor correcto y sin titulo inventado
    for m in re.finditer(r"author[\"']?\s*:\s*[\"']([^\"']+)", src_n, re.I):
        val = m.group(1)
        if AUTHOR_NAME.split()[0] not in val and "@type" not in val:
            errs.append(f"author distinto del configurado: {val!r}")

    # 5. < sin escapar que quedo vivo (scan con regex de Python, no grep ASCII)
    for m in re.finditer(r"<(?![A-Za-z/!>])", src_n):
        ctx = src_n[max(0, m.start() - 40):m.start() + 40].replace("\n", " ")
        errs.append(f"< sin escapar: ...{ctx}...")

    # 5b. tag de cierre al que le falta el ">"
    for m in re.finditer(r"</([A-Za-z][A-Za-z0-9]*)(?![A-Za-z0-9>])", src_n):
        errs.append(f"tag de cierre sin '>': {m.group(0)!r}")

    # 6. canonical en el lugar correcto
    if "canonical" in src_n and not re.search(r"alternates\s*:\s*\{[^}]*canonical", src_n, re.S):
        errs.append("canonical fuera de alternates")

    # 7. AuthorBox con props
    if re.search(r"<AuthorBox\s+[^/>]", src_n):
        errs.append("AuthorBox sigue recibiendo props")

    # 8. imports no declarados en el config
    allowed = {i.split("from")[-1].strip().strip("';\"") for i in CFG["imports"]}
    for m in re.finditer(r"^import\s+.*?from\s+['\"]([^'\"]+)['\"]", src_n, re.M):
        if m.group(1) not in allowed:
            errs.append(f"import no permitido: {m.group(1)}")

    # 9. largo minimo — un articulo trunco no sirve
    words = len(re.findall(r"\b\w+\b", re.sub(r"<[^>]+>", " ", src_n)))
    if words < 700:
        errs.append(f"articulo demasiado corto: ~{words} palabras")

    return errs


# ------------------------------------------------------------------ registro
def register(title, description, read_time):
    """Sin esto el articulo nace huerfano: URL 200 pero invisible para Google."""
    done = []

    sm = APP / "sitemap.ts"
    s = sm.read_text()
    if f'"{SLUG}"' not in s and f"'{SLUG}'" not in s:
        m = re.search(r"(const\s+blogPosts\s*=\s*\[)", s)
        if not m:
            die("no encuentro el array blogPosts en sitemap.ts")
        s = s[:m.end()] + f'\n    "{SLUG}",' + s[m.end():]
        sm.write_text(s)
        done.append("sitemap.ts")

    bi = APP / "blog" / "page.tsx"
    b = bi.read_text()
    if f'"{SLUG}"' not in b and f"'{SLUG}'" not in b:
        m = re.search(r"(const\s+posts\s*=\s*\[)", b)
        if not m:
            die("no encuentro el array posts en blog/page.tsx")
        d = CFG.get("default_card", {})
        entry = (f'\n  {{ slug: "{SLUG}", title: {json.dumps(title)}, '
                 f'description: {json.dumps(description)}, '
                 f'date: {json.dumps(pretty_date(TODAY))}, readTime: "{read_time}", '
                 f'lang: "EN", category: {json.dumps(d.get("category", "GUIDE"))}, '
                 f'categoryColor: "{d.get("categoryColor", "#16a34a")}", '
                 f'categoryBg: "{d.get("categoryBg", "#f0fdf4")}" }},')
        b = b[:m.end()] + entry + b[m.end():]
        bi.write_text(b)
        done.append("blog/page.tsx")

    return done


def pretty_date(iso):
    y, m, d = iso.split("-")
    months = ["January", "February", "March", "April", "May", "June", "July",
              "August", "September", "October", "November", "December"]
    return f"{months[int(m) - 1]} {int(d)}, {y}"


def extract(src, key, fallback):
    m = re.search(key + r"\s*:\s*['\"](.+?)['\"]", src, re.S)
    return m.group(1).strip() if m else fallback


# ---------------------------------------------------------------------- main
def main():
    routes = real_routes()
    print(f"rutas reales detectadas: {len(routes)}")

    dest = APP / "blog" / SLUG / "page.tsx"
    if dest.exists():
        die(f"ya existe {dest.relative_to(ROOT)} — no piso un articulo publicado")

    raw = generate(routes)
    src, fixes = repair(raw)
    for f in fixes:
        print(f"  reparado: {f}")

    errs = validate(src, routes)
    if errs:
        broken = ROOT / f"_rejected_{SLUG}.tsx"
        broken.write_text(src)
        die(f"{len(errs)} problemas en el articulo generado. NO se publica.",
            errs[:25] + ([f"guardado para inspeccion: {broken.name}"]))

    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(src)
    print(f"escrito: {dest.relative_to(ROOT)}")

    title = extract(src, "title", TOPIC)
    desc = extract(src, "description", TOPIC)
    read = CFG.get("default_card", {}).get("readTime", "9 min read")
    print("registrado en: " + ", ".join(register(title, desc, read) or ["(ya estaba)"]))

    if os.environ.get("GITHUB_OUTPUT"):
        with open(os.environ["GITHUB_OUTPUT"], "a") as f:
            f.write(f"slug={SLUG}\ntitle={title}\n")
    print("\nOK — falta que el build lo confirme antes de commitear.")


if __name__ == "__main__":
    main()
