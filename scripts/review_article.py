#!/usr/bin/env python3
"""Fact-check gate for the weekly generated article.

Runs in the Friday workflow between "Generate + validate" and "Build gate".
The Groq drafts invent things every week (author credentials, case studies
with made-up numbers, competitor limits, features this site does not have,
menus that do not exist, unsafe advice). Claude Code reviews the draft
against scripts/site_facts.md plus the real pages of the site and fixes it in
place; it is only allowed to edit the article file. The pass repeats until a
pass finds nothing wrong. If problems remain after MAX_PASSES, or anything
else in the repo changed, this exits 1 and the workflow stops before the
commit: nothing gets published.

Uses the Claude subscription through Claude Code (CLAUDE_CODE_OAUTH_TOKEN from
`claude setup-token`), never the pay-per-token Anthropic API: the business
rule since 2026-07-01 is that no script calls the Anthropic API.

Uso: SLUG=... CLAUDE_CODE_OAUTH_TOKEN=... python3 scripts/review_article.py
"""
import hashlib
import json
import os
import re
import subprocess
import sys
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CFG = json.loads((ROOT / "scripts" / "article_config.json").read_text())
APP = ROOT / CFG["app_dir"]
SLUG = os.environ["SLUG"]
ARTICLE = APP / "blog" / SLUG / "page.tsx"
REL = str(ARTICLE.relative_to(ROOT))
FACTS = ROOT / "scripts" / "site_facts.md"
MAX_PASSES = 3

SCHEMA = {
    "type": "object",
    "properties": {
        "problems_found": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "category": {"type": "string"},
                    "problem": {"type": "string"},
                    "fixed": {"type": "boolean"},
                },
                "required": ["category", "problem", "fixed"],
            },
        },
        "unfixable": {"type": "boolean"},
        "unfixable_reason": {"type": "string"},
    },
    "required": ["problems_found", "unfixable", "unfixable_reason"],
}

PROMPT = """You are the fact-checker for a blog article that is about to be published on a small ad-supported website. The draft was written by a weaker model that routinely invents things. Anything false or unsupported that reaches the site hurts real readers and the site's standing with Google, so be strict.

Read these files first:
- {facts}: what is true about this site and its author. It is the source of truth.
- {article}: the article to check (Next.js TSX).

Pages that really exist on the site:
{pages}

Find every span in {article} (metadata, JSON-LD, FAQ and body alike) that contains any of these:
- invented_author_detail: any experience, credential, job, years in a field, or personal anecdote for the author beyond the name and title in the facts file.
- invented_example_or_statistic: named people or businesses presented as real, case studies, percentages, survey results or other numbers without a named, checkable source. A clearly hypothetical example with no invented results is fine.
- competitor_claim: any specific statement about another company's limits, prices, features or technology that the facts file does not state.
- wrong_claim_about_this_site: anything about this site's tools, pages or policies that contradicts the facts file or the page list, or that they don't support.
- factual_error: wrong technical steps (menus, settings, apps or features that don't exist or don't work that way), wrong facts, wrong terminology.
- unsafe_advice: advice that could expose private data (medical, financial, identity), or financial, legal or medical guidance stated with more certainty than a general article can support.

Fix each problem directly in {article} with the Edit tool, keeping the article's voice: rewrite the span so it is true, or remove the claim. A fix must itself be true and supported; when unsure, make it general rather than inventing a new specific. Keep the file valid TSX: no bare < or > inside JSX text, keep JavaScript string quoting intact, do not add imports or links to pages that don't exist. Do not edit any other file. Do not change style, tone or length for its own sake.

Report every problem you found in problems_found, with fixed=true when you corrected it. If the article is already correct, return an empty problems_found list. Set unfixable to true only if the article cannot be corrected by editing spans (for example, its whole premise is false); explain why in unfixable_reason, otherwise leave it empty."""


def site_pages():
    """Paginas reales del sitio: las del repo con su title/description, mas
    todas las URLs del sitemap publicado (incluye las rutas dinamicas)."""
    out = []
    for page in sorted(APP.rglob("page.tsx")):
        parts = [p for p in page.relative_to(APP).parts[:-1] if not p.startswith("(")]
        route = "/" + "/".join(parts)
        if route.startswith("/blog/") or "[" in route:
            continue
        src = page.read_text(errors="ignore")
        title = re.search(r"title:\s*[\"'`]([^\"'`]{3,160})", src)
        desc = re.search(r"description:\s*[\"'`]([^\"'`]{3,300})", src)
        out.append(f"- {route}: {title.group(1) if title else ''} | {desc.group(1) if desc else ''}")
    blog = sorted(p.parent.name for p in (APP / "blog").glob("*/page.tsx") if p.parent.name != SLUG)
    text = "\n".join(out) + "\n\nExisting blog posts (/blog/<slug>):\n" + ", ".join(blog)
    try:
        req = urllib.request.Request(CFG["site_url"] + "/sitemap.xml",
                                     headers={"User-Agent": "Mozilla/5.0 (compatible; KlickifyArticleBot/1.0)"})
        xml = urllib.request.urlopen(req, timeout=30).read().decode()
        urls = sorted(set(re.findall(r"<loc>https?://[^/<]+(/[^<]*)?</loc>", xml)) - {""})
        text += "\n\nAll URLs in the live sitemap:\n" + ", ".join(urls)
    except OSError:
        pass
    return text


def review_pass(pages):
    env = {k: v for k, v in os.environ.items() if k != "ANTHROPIC_API_KEY"}  # nunca la API paga
    cmd = ["claude", "-p", PROMPT.format(facts=FACTS.relative_to(ROOT), article=REL, pages=pages),
           "--output-format", "json", "--json-schema", json.dumps(SCHEMA),
           "--tools", "Read,Edit,Grep,Glob",
           "--allowedTools", "Read", "Grep", "Glob", f"Edit({REL})", "--permission-mode", "acceptEdits",
           "--max-turns", "40"]
    run = subprocess.run(cmd, cwd=ROOT, env=env, stdin=subprocess.DEVNULL,
                         capture_output=True, text=True, timeout=1500)
    try:
        out = json.loads(run.stdout)
    except ValueError:
        sys.exit(f"[FALLO] claude termino con codigo {run.returncode}: {(run.stderr or run.stdout)[-800:]}")
    if run.returncode != 0 or out.get("is_error"):
        sys.exit(f"[FALLO] claude codigo {run.returncode} subtype={out.get('subtype')} "
                 f"turns={out.get('num_turns')} denials={len(out.get('permission_denials') or [])}: "
                 f"{str(out.get('result'))[:800]} {run.stderr[-400:]}")
    result = out.get("structured_output")
    if result is None:
        result = json.loads(re.search(r"\{.*\}", out.get("result", ""), re.S).group(0))
    return result


def snapshot():
    """Hash de cada archivo que git ve cambiado (el generador ya toco sitemap
    e indice): permite detectar cualquier edicion de la revision fuera del articulo."""
    st = subprocess.run(["git", "status", "--porcelain", "-uall"], cwd=ROOT, capture_output=True, text=True).stdout
    paths = [line[3:].strip().strip('"') for line in st.splitlines()]
    return {p: hashlib.sha1((ROOT / p).read_bytes()).hexdigest() if (ROOT / p).is_file() else None for p in paths}


def other_changes(before):
    after = snapshot()
    return sorted(p for p, h in after.items() if p != REL and before.get(p, "nuevo") != h)


def report(lines):
    print("\n".join(lines))
    if os.environ.get("GITHUB_STEP_SUMMARY"):
        with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as f:
            f.write("\n".join(lines) + "\n")


def main():
    if not ARTICLE.exists():
        sys.exit(f"[FALLO] no existe {REL}")
    pages = site_pages()
    before = snapshot()
    log = [f"## Fact-check: {SLUG}"]
    for n in range(1, MAX_PASSES + 1):
        result = review_pass(pages)
        extra = other_changes(before)
        if extra:
            report(log + [f"RECHAZADO: la revision toco archivos fuera del articulo: {extra}"])
            sys.exit(1)
        if result["unfixable"]:
            report(log + [f"RECHAZADO (pasada {n}): {result['unfixable_reason']}"])
            sys.exit(1)
        problems = result["problems_found"]
        if not problems:
            report(log + [f"OK: la pasada {n} no encontro problemas. Se publica."])
            return
        log.append(f"### Pasada {n}: {len(problems)} problemas")
        log += [f"- [{p['category']}] {'corregido' if p['fixed'] else 'SIN CORREGIR'}: {p['problem']}" for p in problems]
    report(log + [f"RECHAZADO: siguen apareciendo problemas despues de {MAX_PASSES} pasadas. No se publica."])
    sys.exit(1)


if __name__ == "__main__":
    main()
