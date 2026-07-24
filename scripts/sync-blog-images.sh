#!/usr/bin/env bash
# Copy blog post images from the safestorage.in image store into this app's
# public/blog-images/ folder so they are served from the safestorage.ae domain
# (better image SEO + faster, self-hosted delivery).
#
# Safe to re-run: it only downloads images that aren't already present, so run
# it again whenever you publish new blogs to pull their images across.
#
# Designed to run ON THE SERVER (so the 500 MB+ of images don't travel over the
# deploy rsync):
#   ssh ubuntu@<box> 'cd /home/ubuntu/dubai && bash scripts/sync-blog-images.sh'
#
# The /blog-images/* rewrite in next.config.mjs proxies to safestorage.in as a
# fallback, so any image not yet copied still resolves — this just makes the
# copied ones serve from local disk.
set -euo pipefail
cd "$(dirname "$0")/.."

FEED="https://safestorage.in/get_blog_content"
SRC_BASE="https://safestorage.in/post_images"
# Images are served by nginx straight from this web dir (see the /blog-images/
# location in the nginx site config). Owned by ubuntu, readable by www-data.
DEST="${BLOG_IMAGES_DIR:-/var/www/blog-images}"

mkdir -p "$DEST"

echo "==> Fetching blog feed…"
JSON="$(curl -fsS "$FEED")"

# Extract unique post_images filenames from the JSON feed.
FILES="$(printf '%s' "$JSON" \
  | grep -oE '"post_images":"[^"]+"' \
  | sed -E 's/^"post_images":"//; s/"$//' \
  | sort -u)"

TOTAL=$(printf '%s\n' "$FILES" | grep -c . || true)
echo "==> $TOTAL unique images referenced by the feed."

downloaded=0; skipped=0; failed=0
while IFS= read -r f; do
  [ -n "$f" ] || continue
  out="$DEST/$f"
  if [ -s "$out" ]; then
    skipped=$((skipped+1)); continue
  fi
  if curl -fsS --retry 2 -o "$out" "$SRC_BASE/$f"; then
    downloaded=$((downloaded+1))
  else
    echo "    ! failed: $f"; rm -f "$out"; failed=$((failed+1))
  fi
done <<< "$FILES"

echo "==> Done. downloaded=$downloaded  already-present=$skipped  failed=$failed"
echo "==> Local blog-images: $(ls -1 "$DEST" | wc -l) files, $(du -sh "$DEST" | cut -f1)"
