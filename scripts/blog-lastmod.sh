#!/usr/bin/env bash
# Blog sitemap <lastmod> — reconcile the blog_lastmod table against the feed.
#
# WHY THIS FILE EXISTS. app/api/blog-lastmod/route.ts was written with the
# comment "Cron calls this every 10 minutes". Nothing ever did. The table seeded
# itself once (getBlogSitemapEntries seeds an empty table) and then froze, so
# every post published after that seed was absent from /sitemap-blogs.xml — 17
# of them by 2026-09-07, a month of articles Google had no sitemap entry for.
#
# The sitemap no longer DEPENDS on this script: getBlogSitemapEntries now
# reconciles on read, so a new post reaches the sitemap whether or not cron is
# alive. This runs anyway, for two things the read path deliberately does not do
#   - it bumps checked_at on unchanged rows, which is the only evidence that the
#     refresher is alive at all (GET the endpoint for last_checked)
#   - it detects edits on a fixed 10-minute schedule rather than whenever a
#     crawler happens to ask for the sitemap
#
# It calls the app's own endpoint on localhost rather than running its own Node
# process: the live Next server already has .env.local loaded, the MariaDB pool
# open and the TypeScript compiled. Same pattern as seo-index.sh.
#
# Cron (as ubuntu):
#   */10 * * * * /home/ubuntu/dubai/scripts/blog-lastmod.sh >> /home/ubuntu/blog-lastmod.log 2>&1
#
# Nothing here talks to Google and it spends no Indexing API quota.
set -euo pipefail
cd "$(dirname "$0")/.."

set -a
# shellcheck disable=SC1091
[ -f .env.local ] && source <(grep -E '^(SEO_INDEX_SECRET|REVALIDATE_SECRET)=' .env.local)
set +a

SECRET="${SEO_INDEX_SECRET:-${REVALIDATE_SECRET:-}}"
if [ -z "$SECRET" ]; then
  echo "[$(date '+%F %T')] blog-lastmod: no SEO_INDEX_SECRET or REVALIDATE_SECRET in .env.local"
  exit 1
fi

echo "[$(date '+%F %T')] blog-lastmod starting"

# 120s ceiling: the feed is ~11.7 MB and is usually served from the app's memo,
# so a normal pass is a single SELECT and no writes.
RESP=$(curl -sS --max-time 120 -w $'\n%{http_code}' -X POST \
  "http://127.0.0.1:3000/api/blog-lastmod?secret=${SECRET}" || printf '\n000')

CODE=$(printf '%s' "$RESP" | tail -n1)
printf '%s' "$RESP" | sed '$d' | head -c 2000
echo

echo "[$(date '+%F %T')] blog-lastmod done — HTTP $CODE"

# Non-zero makes cron mail it rather than letting a broken refresher pass
# silently for a month, which is exactly how this went unnoticed the first time.
[ "$CODE" = "200" ] || exit 1
