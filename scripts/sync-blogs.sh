#!/usr/bin/env bash
# Mirror blog IMAGES from the safestorage.in dashboard onto the Dubai AWS server and
# refresh the cached blog pages. Run on a short cron interval so every add/edit the
# team makes in the PHP dashboard (safestorage.in/manage_posts/new_dashboard) shows
# up here quickly.
#
# Blog TEXT is NOT copied. Every page that renders a post reads
# safestorage.in/get_blog_content live at request time, so the feed is the single
# source of truth. This script used to run `node scripts/import-blogs-to-db.mjs`
# first, upserting ~290 rows into a local MariaDB table every 5 minutes — but
# 5e41b03 had already moved every read back onto the feed, so nothing queried that
# table. The step was pure overhead and has been removed.
#
# Steps:
#   1. Download any new post images into the nginx-served blog-images dir.
#      (nginx: `location /blog-images/ { root /var/www; try_files $uri @blog_images_in; }`
#      — a local file is the fast path, the safestorage.in proxy is the fallback.)
#   2. Trigger on-demand revalidation so feed edits show on the site right away,
#      rather than waiting out the ISR window on /blog and /sitemap-blog.xml.
#
# Cron (as ubuntu) — unchanged:
#   */5 * * * * /home/ubuntu/dubai/scripts/sync-blogs.sh >> /home/ubuntu/blog-sync.log 2>&1
set -euo pipefail
cd "$(dirname "$0")/.."

# Load image dir + revalidate secret from the server's .env.local. DB_* is no longer
# read by this script; the quotation and payment tables still use it elsewhere.
set -a
# shellcheck disable=SC1091
[ -f .env.local ] && source <(grep -E '^(BLOG_IMAGES_DIR|REVALIDATE_SECRET)' .env.local)
set +a

echo "[$(date '+%F %T')] blog sync starting"

# 1. images -> /var/www/blog-images
bash scripts/sync-blog-images.sh

# 2. purge blog page cache so edits appear immediately
if [ -n "${REVALIDATE_SECRET:-}" ]; then
  curl -fsS -X POST "http://127.0.0.1:3000/api/revalidate?secret=${REVALIDATE_SECRET}" \
    -o /dev/null -w "   revalidate: HTTP %{http_code}\n" || echo "   revalidate call failed (non-fatal)"
fi

echo "[$(date '+%F %T')] blog sync done"
