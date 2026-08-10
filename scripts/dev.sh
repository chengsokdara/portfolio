#!/usr/bin/env bash
# Start the CRA dev server on the Node version required by this project (.nvmrc).
# Resolves the exact Node binary via nvm so yarn's host Node does not win on PATH.
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

REQUIRED_NODE="$(tr -d '[:space:]' < .nvmrc)"

load_nvm() {
  export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
  if [ -s "$NVM_DIR/nvm.sh" ]; then
    # shellcheck disable=SC1091
    . "$NVM_DIR/nvm.sh"
    return 0
  fi
  return 1
}

if ! load_nvm; then
  echo "error: nvm not found at \$NVM_DIR ($NVM_DIR)." >&2
  echo "Install nvm (https://github.com/nvm-sh/nvm) or run: nvm use && yarn start" >&2
  exit 1
fi

# Install the version from .nvmrc if it is not already available.
if ! nvm use "$REQUIRED_NODE" >/dev/null 2>&1; then
  echo "Node $REQUIRED_NODE not installed. Installing via nvm..."
  nvm install "$REQUIRED_NODE"
fi

# Prefer the resolved binary over PATH — yarn may leave the host Node first.
NODE_BIN="$(nvm which "$REQUIRED_NODE")"
NODE_BIN_DIR="$(dirname "$NODE_BIN")"
export PATH="$NODE_BIN_DIR:$PATH"
hash -r 2>/dev/null || true

ACTIVE_VERSION="$("$NODE_BIN" -v)"
echo "Using Node $ACTIVE_VERSION (required: $REQUIRED_NODE) → $NODE_BIN"

if [ ! -d node_modules ]; then
  echo "node_modules missing — running yarn install..."
  yarn install
fi

REACT_SCRIPTS="$ROOT_DIR/node_modules/react-scripts/bin/react-scripts.js"
if [ ! -f "$REACT_SCRIPTS" ]; then
  echo "error: react-scripts not found. Run yarn install first." >&2
  exit 1
fi

# Invoke with the correct Node binary (do not re-enter yarn; it reuses the host Node).
exec "$NODE_BIN" "$REACT_SCRIPTS" start
