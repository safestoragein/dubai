#!/usr/bin/env bash
# Auto-sync blog content from the safestorage.in dashboard into the Dubai AWS
# server. Run on a short cron interval so every add/edit the team makes in the
# PHP dashboard (safestorage.in/manage_posts/new_dashboard) lands here.
#
# Steps:
#   1. Upsert all posts from the India feed into the local EC2 MariaDB
#      (INSERT ... ON DUPLICATE KEY UPDATE -> captures both new posts and edits).
#   2. Download any new post images into the nginx-served blog-images dir.
#   3. Trigger on-demand revalidation so the changes show on the site right away.
#
# Cron (as ubuntu):
#   */5 * * * * /home/ubuntu/dubai/scripts/sync-blogs.sh >> /home/ubuntu/blog-sync.log 2>&1
set -euo pipefail
cd "$(dirname "$0")/.."

# Load DB + secret env from the server's .env.local
set -a
# shellcheck disable=SC1091
[ -f .env.local ] && source <(grep -E '^(DB_|BLOG_IMAGES_DIR|REVALIDATE_SECRET)' .env.local)
set +a

echo "[$(date '+%F %T')] blog sync starting"

# 1. content -> local DB
node scripts/import-blogs-to-db.mjs

# 2. images -> /var/www/blog-images
bash scripts/sync-blog-images.sh

# 3. purge blog page cache so edits appear immediately
if [ -n "${REVALIDATE_SECRET:-}" ]; then
  curl -fsS -X POST "http://127.0.0.1:3000/api/revalidate?secret=${REVALIDATE_SECRET}" \
    -o /dev/null -w "   revalidate: HTTP %{http_code}\n" || echo "   revalidate call failed (non-fatal)"
fi

echo "[$(date '+%F %T')] blog sync done"
