# Sokdara Cheng — Portfolio (2026)

Interactive **terminal-style** personal portfolio for **Sokdara Cheng**, Senior React Native + React engineer in Phnom Penh (ICT+7).

Dark UI, boot animation, command chips + real CLI (`whoami`, `work`, `projects`, `hire`, …) — built to feel like a developer’s machine, not a SaaS landing page, while still making it obvious how to hire him.

Live (after deploy): https://chengsokdara.github.io/

## Stack

| Was (v1) | Now (v2) |
| --- | --- |
| CRA `react-scripts@4`, React 17, yarn, Node 14–16 | **Vite + React 19 + TypeScript + Tailwind CSS v4**, **npm**, Node **≥20** (LTS) |

This is a **clean rewrite** (not a developerFolio skin). New code is **MIT** — see `LICENSE`. Earlier commits remain GPL-3.0 / developerFolio-derived in history.

## Quick start

```bash
nvm use   # reads .nvmrc → 20
npm install
npm run dev
```

Preview production build:

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The historical flow builds a static site, then copies into a **nested** `chengsokdara.github.io/` checkout (separate git history). That folder is gitignored here so we never destroy Pages history from this repo.

```bash
# 1. Ensure nested Pages repo exists (once)
#    git clone git@github.com:chengsokdara/chengsokdara.github.io.git

npm run deploy
# same as: npm run build && npm run deploy:copy
```

Then in the Pages repo:

```bash
cd chengsokdara.github.io
git status
git add -A
git commit -m "Deploy portfolio $(date -u +%Y-%m-%d)"
git push
```

Override the target path if needed:

```bash
PAGES_DIR=/path/to/chengsokdara.github.io npm run deploy:copy
```

`deploy:copy` preserves `.git` and a top-level `resume/` folder if present.

## Content sources

- Resume: https://chengsokdara.github.io/resume/v2
- Contact: `chengsokdara@gmail.com` · `+855 86 558 716`
- No invented prices, testimonials, or store ratings.

## License

MIT for this rewrite — see `LICENSE`.
