#!/usr/bin/env bash
# Copy Vite build output into the nested GitHub Pages checkout.
# Does NOT commit or push — you review and publish from chengsokdara.github.io.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/dist"
TARGET="${PAGES_DIR:-$ROOT/chengsokdara.github.io}"

if [[ ! -d "$DIST" ]]; then
  echo "Missing dist/. Run: npm run build" >&2
  exit 1
fi

if [[ ! -d "$TARGET" ]]; then
  echo "Pages folder not found at: $TARGET" >&2
  echo "Expected a separate git checkout of chengsokdara.github.io nested (or set PAGES_DIR)." >&2
  echo "Create/clone it first, then re-run. Refusing to invent or wipe history." >&2
  exit 1
fi

if [[ ! -d "$TARGET/.git" ]]; then
  echo "WARNING: $TARGET has no .git — continuing copy only." >&2
fi

# Preserve git metadata and common non-site folders inside the Pages repo.
shopt -s extglob nullglob
# Remove previous site assets but keep .git and resume/ if present as separate content.
find "$TARGET" -mindepth 1 -maxdepth 1 \
  ! -name '.git' \
  ! -name 'resume' \
  ! -name '.gitignore' \
  -exec rm -rf {} +

cp -R "$DIST"/. "$TARGET"/
echo "Copied dist/ → $TARGET"
echo "Next (from $TARGET): git status && git add -A && git commit && git push"
