#!/usr/bin/env bash
# Deploy the Dubai site to AWS Amplify.
#
# Amplify Hosting is connected to the GitHub repo (safestoragein/dubai, branch main).
# A push to `main` automatically triggers an Amplify build + deploy to safestorage.ae.
# So "deploying" is just: commit -> push. This script does both.
#
# Usage:
#   ./scripts/deploy.sh "your commit message"
#   ./scripts/deploy.sh                # commits with a timestamped default message
#
set -euo pipefail

cd "$(dirname "$0")/.."

BRANCH="$(git branch --show-current)"
if [ "$BRANCH" != "main" ]; then
  echo "⚠️  You are on '$BRANCH', not 'main'. Amplify only auto-deploys 'main'."
  read -r -p "Continue anyway? [y/N] " ans
  [ "$ans" = "y" ] || exit 1
fi

MSG="${1:-chore: deploy $(date '+%Y-%m-%d %H:%M')}"

# Stage + commit only if there are changes
if ! git diff --quiet || ! git diff --cached --quiet || [ -n "$(git status --porcelain)" ]; then
  git add -A
  git commit -m "$MSG"
else
  echo "No local changes to commit — will just push any unpushed commits."
fi

echo "Pushing to origin/$BRANCH — this triggers the AWS Amplify build & deploy…"
git push origin "$BRANCH"

echo
echo "✅ Pushed. Amplify is now building."
echo "   Watch progress: AWS Console → Amplify → dubai app → branch 'main'."
echo "   Live site: https://safestorage.ae"
