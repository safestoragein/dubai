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

# One image. Downloads it when missing, and REPLACES it when the source has a
# different Content-Length.
#
# This used to be `[ -s "$out" ] && skip` -- presence taken as proof of
# correctness, so an image replaced on safestorage.in never propagated. Measured
# 2026-09-07: 197 of 317 local files differed from the source, 550 MB here against
# 74 MB there, because safestorage.in had optimised its images and this box kept
# serving the originals. nginx prefers the local file (`try_files $uri
# @blog_images_in`), so visitors were being handed up to 7 MB in place of 370 KB.
#
# Writes to a temp file and renames: nginx serves this directory directly and an
# in-place write would hand somebody half an image.
sync_one() {
  f="$1"; out="$DEST/$f"
  if [ -s "$out" ]; then
    remote=$(curl -sI --max-time 30 "$SRC_BASE/$f" | awk 'BEGIN{IGNORECASE=1} /^content-length:/ {gsub(/\r/,"",$2); print $2}' | tail -1)
    # No length from the source is not evidence of a change -- leave it alone
    # rather than re-downloading every file on every pass.
    [ -z "$remote" ] && { echo "skip $f"; return; }
    local_size=$(stat -c%s "$out" 2>/dev/null || echo 0)
    [ "$local_size" = "$remote" ] && { echo "skip $f"; return; }
    action=replaced
  else
    action=downloaded
  fi
  if curl -fsS --retry 2 --max-time 120 -o "$out.tmp.$$" "$SRC_BASE/$f"; then
    mv -f "$out.tmp.$$" "$out"; echo "$action $f"
  else
    rm -f "$out.tmp.$$"; echo "failed $f"
  fi
}
export -f sync_one
export DEST SRC_BASE

# 8 at a time: this is now a HEAD per existing file as well, and the India box is
# ~0.15 s away, so serial would take minutes on every tick.
RESULT=$(printf '%s\n' "$FILES" | grep . | xargs -P 8 -I{} bash -c 'sync_one "$@"' _ {} 2>/dev/null)

downloaded=$(printf '%s\n' "$RESULT" | grep -c '^downloaded ' || true)
replaced=$(printf '%s\n'  "$RESULT" | grep -c '^replaced '   || true)
skipped=$(printf '%s\n'   "$RESULT" | grep -c '^skip '       || true)
failed=$(printf '%s\n'    "$RESULT" | grep -c '^failed '     || true)
printf '%s\n' "$RESULT" | grep '^replaced ' | sed 's/^/    /'
printf '%s\n' "$RESULT" | grep '^failed '   | sed 's/^/    ! /'

echo "==> Done. downloaded=$downloaded  replaced=$replaced  unchanged=$skipped  failed=$failed"
echo "==> Local blog-images: $(ls -1 "$DEST" | wc -l) files, $(du -sh "$DEST" | cut -f1)"
