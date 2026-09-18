#!/usr/bin/env bash
# Runs every 3 minutes (ubuntu crontab). If the live homepage or ANY css/js it
# references stops loading twice in a row, restart the app and log it.
set -uo pipefail
LIVE=http://127.0.0.1:3000
STATE=/home/ubuntu/.asset-guard-fails
LOG=/home/ubuntu/asset-guard.log
# never interfere while a deploy is running
pgrep -f "hooks/post-receive" >/dev/null && exit 0

ok() {
  local html list a
  html=$(curl -sf --max-time 30 "$LIVE/") || { echo "homepage"; return 1; }
  list=$(printf '%s' "$html" | grep -oE '/_next/static/[^"'"'"' <>]+\.(css|js)' | sort -u)
  [ -n "$list" ] || { echo "no assets"; return 1; }
  for a in $list; do curl -sf -o /dev/null --max-time 15 "$LIVE$a" || { echo "$a"; return 1; }; done
}
if what=$(ok); then
  rm -f "$STATE"; exit 0
fi
n=$(( $(cat "$STATE" 2>/dev/null || echo 0) + 1 )); echo $n > "$STATE"
echo "$(date -Is) check failed ($n): $what" >> "$LOG"
if [ "$n" -ge 2 ]; then
  echo "$(date -Is) restarting safestorage.service" >> "$LOG"
  sudo systemctl restart safestorage.service
  rm -f "$STATE"
fi
