# safestorage.ae server config (live snapshot)

Pulled from EC2 `i-050eb29b4fa16210d` / `13.203.136.29` on 2026-09-18.
These files live **only on the box** (they are not used from this repo) — they are kept
here as a versioned reference of the 2026-09-17 release-directory deploy work.

| file | live path |
|---|---|
| `post-receive` | `/home/ubuntu/dubai.git/hooks/post-receive` (release dirs + smoke test + flip `current`) |
| `asset-guard.sh` | `/home/ubuntu/bin/asset-guard.sh` (`*/3` cron watchdog → `/home/ubuntu/asset-guard.log`) |
| `nginx-safestorage.ae.conf` | `/etc/nginx/sites-enabled/safestorage.ae` |
| `crontab-ubuntu.txt` | `crontab -l` for user `ubuntu` |

Editing a copy here does **not** change the server. To change the box, edit in place over
`ssh -i ~/Downloads/Safestoragedubaikeypair.pem ubuntu@13.203.136.29` and re-pull the snapshot.
