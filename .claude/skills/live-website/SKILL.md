---
name: live-website
description: Manage the vitrayco.com production VPS — deploy code, check status, view logs, configure Nginx, issue SSL certs. Use when user says "deploy", "update the server", "push to production", "check server status", "restart the app", "view logs", "renew SSL", or references the live site or VPS.
---

# live-website

Manages the vitrayco.com Ubuntu VPS.

## Credentials

| Item | Value |
|------|-------|
| IP | `5.159.49.68` |
| User | `root` |
| SSH key | `deploy/keys/private-key-file.pem` (relative to project root `/Users/hesamsaeidpour/Documents/Website`) |
| OS | Ubuntu 26.04 LTS |

SSH alias (use for every command):
```
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68
```

## Server layout

| Path | Purpose |
|------|---------|
| `/var/www/vitrayco/web-next` | Next.js app |
| `/etc/nginx/sites-available/vitrayco` | Nginx config |
| PM2 process name | `vitrayco` |
| App port | `3000` |

## Workflows

### Deploy (push local changes to production)

GitHub clone is slow from Iran — always rsync from local:

```bash
# 1. Sync code (excludes node_modules, build artifacts, and the local lead store —
# data/ holds contact-submissions.jsonl, which must never overwrite the server's real leads)
# IMPORTANT: macOS system rsync (openrsync) does NOT support --iconv — use Homebrew rsync.
# --iconv=utf-8-mac,utf-8 converts macOS NFD filenames to Linux NFC — required for Persian filenames
/opt/homebrew/bin/rsync -az \
  --iconv=utf-8-mac,utf-8 \
  --exclude 'node_modules' --exclude '.next' --exclude '.git' --exclude 'data' \
  -e "ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem" \
  /Users/hesamsaeidpour/Documents/Website/web-next/ \
  root@5.159.49.68:/var/www/vitrayco/web-next/

# If Homebrew rsync is missing: brew install rsync

# 2. Install, build, restart on the server
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68 \
  "cd /var/www/vitrayco/web-next && npm install && npm run build && pm2 restart vitrayco"
```

**After any route rename/delete:** rsync only adds and updates — it does not delete files on the server. If you rename or remove a Next.js route folder locally (e.g. `app/daana` → `app/_daana`), the old folder will still exist on the server and the old route will still build. Always check and manually remove stale folders:

```bash
# Check for stale route folders
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68 \
  "ls /var/www/vitrayco/web-next/app/"

# Remove a stale folder (example)
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68 \
  "rm -rf /var/www/vitrayco/web-next/app/daana"
```

### Check server status

```bash
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68 \
  "pm2 list && echo '---' && systemctl is-active nginx && echo '---' && df -h / && free -h"
```

### View app logs

```bash
# Last 100 lines
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68 \
  "pm2 logs vitrayco --lines 100 --nostream"
```

### Restart / stop / start app

```bash
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68 \
  "pm2 restart vitrayco"   # or: stop / start / reload
```

### Update & reload Nginx

```bash
# After editing /etc/nginx/sites-available/vitrayco on the server:
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68 \
  "nginx -t && systemctl reload nginx"
```

### Issue / renew SSL (run after DNS points to VPS)

```bash
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68 \
  "certbot --nginx -d vitrayco.com -d www.vitrayco.com"
```

### Open a shell

```bash
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68
```

## Post-deploy health check (MANDATORY)

**Every deploy is incomplete until this passes.** Run all checks below and report results to the user before declaring the deploy done.

```bash
# 1. PM2 status — must show "online", not "errored" or "stopped"
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68 \
  "pm2 list"

# 2. Nginx status — must print "active"
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68 \
  "systemctl is-active nginx"

# 3. HTTP smoke test — must return HTTP 200
curl -o /dev/null -s -w "%{http_code}" https://vitrayco.com

# 4. Check recent app logs for runtime errors
ssh -i /Users/hesamsaeidpour/Documents/Website/deploy/keys/private-key-file.pem root@5.159.49.68 \
  "pm2 logs vitrayco --lines 30 --nostream"
```

If any check fails: inspect logs, fix the issue, redeploy, and re-run the health check. Do not tell the user the deploy is done until all four pass.

## Known server quirks

- **CPU has no AVX2** — sharp must stay on `0.32.6`. Do NOT run `npm install sharp@latest` or upgrade it. On this server sharp uses system libvips (installed via apt). If sharp errors appear after a deploy, run: `npm install sharp@0.32.6` then rebuild.

## Security notes

- UFW active: only ports 22, 80, 443 open
- SSH password login disabled (key-only)
- Fail2ban running (blocks brute-force)
- Auto security updates enabled
- `deploy/keys/` is in `.gitignore` — never commit the private key
