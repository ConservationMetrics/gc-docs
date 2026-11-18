---
name: whats-new
description: Write the monthly Guardian Connector what's-new post in gc-docs from the product-update call agenda and transcript. Use when asked for the monthly product updates, what's new post, monthly release notes, or updates for a given month.
---

# Guardian Connector "What's New" monthly post

Turn the monthly product-update call materials into the next "what's new" post, matching the existing posts in `whats-new/` in structure, tone, and link conventions.

Read `references/conventions.md` before Step 1. It carries the post anatomy, canonical section order, link and image rules, glossary, and anti-patterns, so this file stays short.

## Inputs

- Agenda: path supplied with the request.
- Transcript: path supplied with the request.

If either path is missing, ask for it and stop. Do not infer the month's changes from the repository alone.

## Step 0 — Confirm inputs and workspace

1. Verify both files exist and are readable. If the transcript is VTT/SRT, normalize it before extracting.
2. Confirm the transcript has segment headers (`### **HH:MM:SS**` in the usual exports). If not, report the format you found instead of guessing timecodes.
3. Check `git status` and the current branch. Do not disturb unrelated work.

## Step 1 — Reconnaissance

1. List `whats-new/` by date. Read the two most recent posts in full and skim the rest.
2. Note the current conventions: filename pattern, front matter, heading level, bullet style, intro length, placement of `<!-- truncate -->`, image blocks, and link style.
3. The newest post wins on every conflict. Older posts show drift, not the target format.
4. Identify the newest post and the month it covers. The new post covers the month of the call; the filename date is the publication date.

## Step 2 — Extract (agenda × transcript)

For every agenda bullet, find the matching transcript segment. Keep a working table:

| Agenda item | Status | Timecode | Concrete details | Screenshot candidate | Docs page |
| ----------- | ------ | -------- | ---------------- | -------------------- | --------- |

Rules:

- Agenda is the coverage checklist and section order. Transcript supplies the specifics.
- On conflict, prefer the transcript's most specific statement.
- Drop anything the speaker explicitly says they are unsure about ("I should verify this").
- Normalize auto-transcription errors using the glossary in `references/conventions.md`. Extend the glossary when a new recurring mistake appears.
- Do not invent labels, counts, or option names the speaker never states, for example importer strategy names.
- In the screenshot column, record what the speaker actually shows and when. Mark visually described features as "described only — no visual" so nobody hunts for a frame that does not exist.

## Step 3 — Editorial decisions

Include changes owned by Guardian Connector that a user would notice or benefit from.

Exclude or cut down:

- Third-party tools with no GC-owned change (Windmill UI churn, a month of "no updates" in Superset).
- Speculative or future ideas ("we could consider…"). Never publish these.
- Items still under review at call time: present them as shipped only if verifiable; otherwise omit.
- Internal detail a reader cannot act on.
- Duplication: mention a cross-app change once, in its most natural section.

Before drafting, state your proposal and ask only for confirmation:

1. Publication filename and date (for example `2026-11-10.md` for October updates), derived from the newest post plus the call date.
2. Title (for example `October updates`).
3. Whether to include thin third-party sections.
4. Whether `GC Docs` has enough material for a section.

Do not ask which screenshots to use yet. Produce the candidate list in Step 5 instead.

## Step 4 — Draft (text first)

```md
---
title: <Month> updates
date: YYYY-MM-DD
---

<One or two sentences naming the month's theme.>

<!-- truncate -->

## <Product name>

- **<Short feature name>**: <What changed and why it matters, in user terms.> See [<Doc title>](/relative/path/).
```

Style rules:

- `##` per product, in agenda order, falling back to the canonical order in `references/conventions.md`.
- Bold lead-in, then a colon, sentence case, no period on the lead-in.
- Plain, calm prose. Second person. No marketing adjectives.
- One to two sentences per bullet.
- If a bullet needs the screen to make sense, summarize the benefit ("improved usability and user experience") instead of enumerating controls.
- Group small fixes under `**Bug fixes**` with nested bullets.
- Link the docs page that actually explains the change. Do not link an older version's page (for example Dataset Importer v1) as if it documented the new one.
- Internal links must be root-relative (`/reference/...`, `/guides/...`). Never write an absolute self-link to the docs site, even if an older post does. External links to GitHub, eBird, or a blog post stay absolute.
- Verify each internal link target exists under `docs/` using the mapping in `references/conventions.md`.
- Do not insert image references yet. The draft must be complete and readable without any images.

## Step 5 — Screenshot plan and assets

This runs after the text draft, using the candidates from Step 2.

1. Keep only screenshots that add information the text cannot convey. Drop features that were never shown on screen, and any the user declines.
2. Produce one table: feature | transcript timecode range | priority | suggested filename | what should be on screen | status.
   - Derive ranges from transcript headers and cover where the demo actually happens.
   - Give separate timecodes when one feature has two distinct screens (for example strategies vs identity step).
   - Priority is `must-have` or `nice-to-have`.
   - Filenames: `gc-<area>-<feature>.png`, kebab-case, for example `gc-explorer-row-limit-toast.png`.
3. Check `static/img/whatsnew/` for files that already exist:
   - Name matches: add the image after its bullet, indented two spaces, with descriptive alt text that describes the content, not the filename.
   - No match: leave the post text-only, or add a commented TODO with the exact planned path.
   - Never leave a live link to a missing file. Docusaurus fails the build on it.
4. If files arrive later: confirm each file exists, then insert at most one image per feature and rerun Step 6.

## Step 6 — Validate

```bash
pnpm exec prettier --write whats-new/<file>.md

# Must print nothing: no absolute self-links.
grep -n "docs\.guardianconnector\.net" whats-new/<file>.md

# Must print no MISSING lines.
grep -o "/img/whatsnew/[^)]*" whats-new/<file>.md | sort -u | while read -r p; do
  test -f "static$p" || echo "MISSING: $p"
done

pnpm build
```

The build must succeed for `en` and `pt`, and both locale outputs must be generated. Fix broken links and missing images. Report unrelated pre-existing warnings separately instead of "fixing" them.

## Step 7 — Final report

- What was written and where.
- Which agenda items were dropped and why.
- The screenshot table from Step 5, flagging "no screenshot possible" items, so the user can decide what to extract from the video.
- Validation results: prettier, absolute-link grep, image check, build; plus any open questions.

## Guardrails

- Never invent features, numbers, or UI labels.
- Never publish roadmap or speculation.
- Never use absolute self-links to the docs site for internal pages.
- Only touch the new post and verified image assets. Do not reformat other files, edit `i18n/`, or commit.
- If agenda and transcript disagree on a count or name, state the specific one and note the uncertainty to the user rather than guessing.

## Definition of done

- New post follows the newest post's front matter, intro, and section conventions.
- Every agenda item is either covered or deliberately dropped, with a reason.
- All internal links are root-relative and resolve to files under `docs/`.
- Every referenced image exists in `static/img/whatsnew/`.
- `pnpm exec prettier --check whats-new/<file>.md` passes, the absolute-link grep is clean, and `pnpm build` succeeds for both locales.
- A timecode-indexed screenshot table is delivered even when no image files were supplied.
