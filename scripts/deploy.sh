#!/usr/bin/env bash
# Deploy the Dubai site to its AWS EC2 host (ap-south-1 / Mumbai).
#
# HOSTING FACTS (discovered 2026-07-04):
#   - Live site safestorage.ae runs on EC2 13.207.196.124 (NOT Vercel, NOT Amplify).
#   - App dir on server: /home/ubuntu/dubai  (Next.js 16, `next start -p 3000`)
#   - Managed by systemd unit: safestorage.service  (nginx reverse-proxies :3000, Let's Encrypt TLS)
#   - Deploy = rsync this Mac -> server, npm build, restart service.
#   - GitHub (safestoragein/dubai) is NOT in the deploy path (this Mac lacks push rights);
#     code ships straight from here via rsync.
#   - Secrets live in /home/ubuntu/dubai/.env.local ON THE SERVER (gitignored, never rsynced).
#
# Usage:  ./scripts/deploy.sh
set -euo pipefail
cd "$(dirname "$0")/.."

KEY="${DUBAI_SSH_KEY:-$HOME/Downloads/Safestoragedubaikeypair.pem}"
HOST="ubuntu@13.207.196.124"
APP="/home/ubuntu/dubai"
SSH="ssh -i $KEY -o StrictHostKeyChecking=accept-new"

[ -f "$KEY" ] || { echo "SSH key not found: $KEY (set DUBAI_SSH_KEY)"; exit 1; }

echo "==> 1/3  Syncing code to server (excludes .git, node_modules, .next, .env.local)…"
rsync -az --delete-excluded \
  -e "$SSH" \
  --exclude '.git/' --exclude 'node_modules/' --exclude '.next/' \
  --exclude '.env.local' --exclude '.env*.local' --exclude '.vercel/' \
  ./ "$HOST:$APP/"

echo "==> 2/3  Building on server (npm install + next build)…"
# Run detached so a dropped SSH connection can't kill a long build; then wait for the marker.
$SSH "$HOST" "cd $APP && rm -f /tmp/deploy.done && nohup bash -c '
  npm install --legacy-peer-deps &&
  npm run build;
  echo EXIT:\$? > /tmp/deploy.done
' >/tmp/deploy.log 2>&1 &"

echo -n "    building"
for _ in $(seq 1 40); do
  RES=$($SSH "$HOST" 'cat /tmp/deploy.done 2>/dev/null' || true)
  [ -n "$RES" ] && break
  echo -n "."; sleep 15
done
echo
[ "${RES:-}" = "EXIT:0" ] || { echo "BUILD FAILED ($RES). Last log:"; $SSH "$HOST" 'tail -30 /tmp/deploy.log'; exit 1; }
echo "    build OK"

echo "==> 3/3  Restarting service…"
$SSH "$HOST" "sudo systemctl restart safestorage.service && sleep 4 && systemctl is-active safestorage.service"

CODE=$(curl -s -o /dev/null -w '%{http_code}' https://safestorage.ae/ || echo "ERR")
echo
echo "✅ Deployed. https://safestorage.ae -> HTTP $CODE"
