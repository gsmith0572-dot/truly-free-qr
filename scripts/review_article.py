#!/usr/bin/env python3
"""Fact-check gate for the weekly generated article.

Runs in the Friday workflow between "Generate + validate" and "Build gate".
The Groq drafts invent things every week (author credentials, case studies
with made-up numbers, competitor limits, features this site does not have,
menus that do not exist, unsafe advice). Claude reviews the draft against
scripts/site_facts.md plus the real pages of the site, the fixes are applied
as exact text replacements, and the result is reviewed again. If anything is
still flagged after MAX_ROUNDS reviews, this exits 1 and the workflow stops
before the commit: nothing gets published.

Uso: SLUG=... ANTHROPIC_API_KEY=... python3 scripts/review_article.py
"""
import json
import os
import re
import sys
import urllib.request
from pathlib import Path

import anthropic

ROOT = Path(__file__).resolve().parent.parent
CFG = json.loads((ROOT / "scripts" / "article_config.json").read_text())
APP = ROOT / CFG["app_dir"]
SLUG = os.environ["SLUG"]
ARTICLE = APP / "blog" / SLUG / "page.tsx"
FACTS = (ROOT / "scripts" / "site_facts.md").read_text()
MODEL = "claude-opus-5"
MAX_ROUNDS = 3

CATEGORIES = ["invented_author_detail", "invented_example_or_statistic", "competitor_claim",
              "wrong_claim_about_this_site", "factual_error", "unsafe_advice", "other"]

SCHEMA = {
    "type": "object",
    "properties": {
        "issues": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "quote": {"type": "string"},
                    "category": {"type": "string", "enum": CATEGORIES},
                    "problem": {"type": "string"},
                    "replacement": {"type": "string"},
                },
                "required": ["quote", "category", "problem", "replacement"],
                "additionalProperties": False,
            },
        },
        "unfixable": {"type": "boolean"},
        "unfixable_reason": {"type": "string"},
    },
    "required": ["issues", "unfixable", "unfixable_reason"],
    "additionalProperties": False,
}

SYSTEM = """You fact-check blog articles before they are published on a small ad-supported website. The draft was written by a weaker model that routinely invents things. Anything false or unsupported that reaches the site hurts real readers and the site's standing with Google, so be strict.

Flag every span that contains any of these:
- invented_author_detail: any experience, credential, job, years in a field, or personal anecdote for the author beyond the name and title given in SITE FACTS.
- invented_example_or_statistic: named people or businesses presented as real, case studies, percentages, survey results or other numbers without a named, checkable source. A clearly hypothetical example ("picture a small bakery...") with no invented results is fine.
- competitor_claim: any specific statement about another company's limits, prices, features, or technology, unless SITE FACTS states it.
- wrong_claim_about_this_site: anything about this site's tools, pages, or policies that contradicts SITE FACTS or the page list, or that SITE FACTS and the page list don't support.
- factual_error: wrong technical steps (menus, settings, apps or features that do not exist or do not work that way), wrong facts, wrong terminology.
- unsafe_advice: advice that could expose private data (medical, financial, identity), or financial, legal or medical guidance stated with more certainty than a general article can support.

For each problem return:
- quote: an exact substring copied from the TSX source, character for character (including HTML entities such as &apos; and curly quotes). It must appear exactly once in the source. Keep it as short as possible while covering the whole problematic claim.
- replacement: the corrected text for exactly that span, keeping the article's voice. Use an empty string to delete the span. Inside JSX text, never write a bare < or >, curly braces, or backticks. If the quote sits inside a JavaScript string literal (metadata, JSON-LD), the replacement must not contain the quote character that delimits that string.
- A replacement must itself be true and supported. When unsure, remove the claim or make it general rather than inventing a new specific.

Check the metadata, the JSON-LD and the FAQ as carefully as the body. Do not flag style, tone or length. If the article is correct, return an empty issues list.

Set unfixable to true only if the article cannot be corrected span by span (for example, its whole premise is false or it duplicates a competitor comparison the site facts rule out). Explain why in unfixable_reason; otherwise leave it empty."""


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


def review(client, source):
    content = (f"SITE FACTS\n{FACTS}\n\nPAGES THAT EXIST ON THIS SITE\n{site_pages()}\n\n"
               f"ARTICLE SOURCE ({ARTICLE.relative_to(ROOT)})\n{source}")
    response = client.beta.messages.create(
        model=MODEL,
        max_tokens=16000,
        betas=["server-side-fallback-2026-07-01"],
        system=SYSTEM,
        messages=[{"role": "user", "content": content}],
        output_config={"format": {"type": "json_schema", "schema": SCHEMA}},
        extra_body={"fallbacks": "default"},
    )
    if response.stop_reason in ("refusal", "max_tokens"):
        sys.exit(f"[FALLO] la revision termino con stop_reason={response.stop_reason}")
    text = "".join(b.text for b in response.content if b.type == "text")
    return json.loads(text)


def apply(source, issues):
    applied, missed = [], []
    for it in issues:
        n = source.count(it["quote"])
        if n == 1:
            source = source.replace(it["quote"], it["replacement"])
            applied.append(it)
        else:
            missed.append((it, n))
    return source, applied, missed


def report(lines):
    print("\n".join(lines))
    if os.environ.get("GITHUB_STEP_SUMMARY"):
        with open(os.environ["GITHUB_STEP_SUMMARY"], "a") as f:
            f.write("\n".join(lines) + "\n")


def main():
    client = anthropic.Anthropic()
    source = ARTICLE.read_text()
    log = [f"## Fact-check: {SLUG}"]
    for rnd in range(1, MAX_ROUNDS + 1):
        result = review(client, source)
        issues = result["issues"]
        if result["unfixable"]:
            report(log + [f"RECHAZADO (ronda {rnd}): {result['unfixable_reason']}"])
            sys.exit(1)
        if not issues:
            ARTICLE.write_text(source)
            report(log + [f"OK: ronda {rnd} sin problemas. Se publica."])
            return
        source, applied, missed = apply(source, issues)
        log.append(f"### Ronda {rnd}: {len(issues)} problemas, {len(applied)} corregidos")
        for it in applied:
            log.append(f"- [{it['category']}] {it['problem']}\n  - antes: {it['quote'][:200]}\n  - despues: {it['replacement'][:200] or '(borrado)'}")
        for it, n in missed:
            log.append(f"- NO APLICADO ({n} coincidencias) [{it['category']}] {it['problem']}: {it['quote'][:150]}")
    report(log + [f"RECHAZADO: siguen apareciendo problemas despues de {MAX_ROUNDS} revisiones. No se publica."])
    sys.exit(1)


if __name__ == "__main__":
    main()
