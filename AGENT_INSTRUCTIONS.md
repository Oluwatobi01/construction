Agent run instructions

This file explains how a cloud agent (or CI runner) can install dependencies, build the project, and optionally push the repo to GitHub.

Prerequisites
- Node.js and npm installed (Node 16+ recommended) or available in the runner image.
- (Optional) `gh` CLI installed if you want to create the GitHub repo via `gh`.
- (Optional) An environment variable `GITHUB_TOKEN` with a token that has repo creation/push privileges if the agent should push the repo.

Quick commands (bash) — for cloud agent or CI:

```bash
# from repo root
# install deps (reproducible):
if [ -f package-lock.json ]; then npm ci; else npm install; fi

# start dev server (interactive):
npm run dev

# build production bundle:
npm run build

# preview production build:
npm run preview

# run the helper script (recommended in CI):
./scripts/cloud_agent_run.sh
```

Quick commands (Windows cmd) — for local dev:

```cmd
cd /d C:\Users\USER\Desktop\construction
npm install
npm run dev
npm run build
npm run preview
```

Pushing to GitHub from a cloud agent (recommended)
- Set `GITHUB_TOKEN` in the runner's environment (GitHub Actions secrets or cloud runner env).
- Run `./scripts/cloud_agent_run.sh` — the script will attempt to `gh auth login --with-token` and create/push the repo.

Security notes
- Do not print `GITHUB_TOKEN` to logs.
- Limit token scopes to the minimum needed (repo scope for private repos; public repo creation needs `repo` or `public_repo` scope).

If you'd like, I can also:
- Create a GitHub Actions workflow that runs `npm ci` + `npm run build` on push, and optionally deploy artifacts, or
- Provide a Windows `cloud_agent_run.cmd` variant — tell me which you prefer.
