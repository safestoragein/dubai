#!/usr/bin/env bash
# Google Indexing API — tell Google about blog posts added or edited since the
# last run.
#
# It calls the app's own endpoint on localhost rather than running its own Node
# process: the live Next server already has .env.local loaded, the MariaDB pool
# open and the TypeScript compiled, so there is nothing here to keep in sync and
# no tsx/ts-node needed.
#
# Kept separate from sync-blogs.sh on purpose. Content sync is load-bearing —
# blog pages depend on it — and a Google outage or an expired key must not be
# able to fail that script.
#
# Cron (as ubuntu), after sync-blogs so it sees the content that just landed:
#   */5 * * * * /home/ubuntu/dubai/scripts/seo-index.sh >> /home/ubuntu/seo-index.log 2>&1
#
# Preview without sending anything:
#   /home/ubuntu/dubai/scripts/seo-index.sh --dry
set -euo pipefail
cd "$(dirname "$0")/.."

# Load just the secret from the server's .env.local.
set -a
# shellcheck disable=SC1091
[ -f .env.local ] && source <(grep -E '^(SEO_INDEX_SECRET|REVALIDATE_SECRET)=' .env.local)
set +a

SECRET="${SEO_INDEX_SECRET:-${REVALIDATE_SECRET:-}}"
if [ -z "$SECRET" ]; then
  echo "[$(date '+%F %T')] seo-index: no SEO_INDEX_SECRET or REVALIDATE_SECRET in .env.local"
  exit 1
fi

QS=""
[ "${1:-}" = "--dry" ] && QS="&dry=1"

echo "[$(date '+%F %T')] seo-index starting${QS:+ (dry run)}"

# 300s ceiling: a live pass is one HTTPS round trip to Google per changed post,
# roughly a second each. Normal runs finish in well under a second because
# nothing changed.
RESP=$(curl -sS --max-time 300 -w $'\n%{http_code}' -X POST \
  "http://127.0.0.1:3000/api/seo-index?secret=${SECRET}${QS}" || printf '\n000')

CODE=$(printf '%s' "$RESP" | tail -n1)
printf '%s' "$RESP" | sed '$d' | head -c 2000
echo

echo "[$(date '+%F %T')] seo-index done — HTTP $CODE"

# 200 = clean. 502 = at least one submission was rejected; the body says which.
# Exiting non-zero makes cron mail it rather than letting it pass silently.
[ "$CODE" = "200" ] || exit 1
