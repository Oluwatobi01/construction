#!/usr/bin/env bash
set -euo pipefail

# Cloud agent helper script for the `construction` repo.
# Usage (on cloud runner):
# 1) Ensure `GITHUB_TOKEN` is available in environment (and gh CLI is installed), or configure git and remote manually.
# 2) Run: ./scripts/cloud_agent_run.sh

REPO_URL="https://github.com/Oluwatobi01/construction.git"

echo "Starting cloud agent run: install, build, and push (if needed)"

# Install dependencies (use npm ci for reproducible installs)
if [ -f package-lock.json ]; then
  echo "Using npm ci"
  npm ci
else
  echo "Using npm install"
  npm install
fi

# Build the site
if npm run | grep -q "build"; then
  echo "Running build"
  npm run build
else
  echo "No build script found in package.json; skipping build"
fi

# Optionally create or push to GitHub repo if GITHUB_TOKEN is set
if [ -n "${GITHUB_TOKEN-}" ]; then
  echo "GITHUB_TOKEN detected — authenticating gh and pushing repo"
  # Authenticate gh with token
  printf "%s" "$GITHUB_TOKEN" | gh auth login --with-token >/dev/null 2>&1 || true

  # If repository already has git history, just push; otherwise initialize and push
  if [ -d .git ]; then
    echo "Repository already has git history; pushing current branch to origin"
    git add .
    git commit -m "chore: cloud agent update" || true
    git push origin HEAD || true
  else
    echo "Initializing git and creating remote repo via gh"
    git init
    git add .
    git commit -m "chore: initial commit (cloud agent)"
    # Create repo via gh (owner must match token privileges)
    gh repo create Oluwatobi01/construction --public --source=. --remote=origin --push || 
      { echo "gh repo create failed; attempting git remote add and push"; git remote add origin "$REPO_URL"; git push -u origin main || true; }
  fi
else
  echo "No GITHUB_TOKEN provided — skipping push. Set GITHUB_TOKEN to enable pushing."
fi

echo "Cloud agent run complete."
