# VPS Deployment Guide — vitrayco.com

Next.js app on Ubuntu VPS, WordPress stays on the old Iranian shared hosting — proxied by Nginx using the hosting server IP directly.

## Architecture

```
vitrayco.com  →  Ubuntu VPS (5.159.49.68) — Nginx
                     │
                     ├── /wp-json/*     ──proxy──▶  185.88.153.233 (old hosting, Host: vitrayco.com)
                     ├── /wp-content/*  ──proxy──▶  185.88.153.233
                     ├── /wp-admin/*    ──proxy──▶  185.88.153.233
                     └── everything else ────────▶  Next.js (localhost:3000)
```

WordPress never moved. Its Site URL remains `vitrayco.com`. No DNS subdomain needed.
The Next.js app fetches from `vitrayco.com/wp-json/` which routes through Nginx to the old host.

---

## What was done (completed)

- [x] Ubuntu VPS at `5.159.49.68`
- [x] Node.js 22, PM2, Nginx installed
- [x] Next.js app deployed to `/var/www/vitrayco/web-next`, running as PM2 process `vitrayco`
- [x] Nginx configured — WordPress paths proxied to `185.88.153.233`, everything else → Next.js
- [x] SSL cert issued via Certbot (auto-renews, expires 2026-09-26)
- [x] UFW firewall: ports 22, 80, 443 only
- [x] Fail2ban, SSH key-only auth, auto security updates
- [x] DNS A record `vitrayco.com` → `5.159.49.68` (TTL 300)
- [x] WordPress permalink structure changed to `/blog/%postname%/`
- [x] Old WordPress root-slug redirects added to `next.config.ts` (auto-fetched at build time)

---

## Deploy updates

```bash
# From project root on local Mac:
rsync -az \
  --iconv=utf-8-mac,utf-8 \
  --exclude 'node_modules' --exclude '.next' --exclude '.git' \
  -e "ssh -i deploy/keys/private-key-file.pem" \
  web-next/ \
  root@5.159.49.68:/var/www/vitrayco/web-next/

ssh -i deploy/keys/private-key-file.pem root@5.159.49.68 \
  "cd /var/www/vitrayco/web-next && npm install && npm run build && pm2 restart vitrayco"
```

> `--iconv=utf-8-mac,utf-8` is required — converts macOS NFD filenames (Persian) to Linux NFC.
> Without it, Persian-named files in `public/` serve as 404.

---

## Nginx config

File: `/etc/nginx/sites-available/vitrayco`

```nginx
server {
    server_name vitrayco.com www.vitrayco.com;

    location ~* ^/(wp-json|wp-content|wp-admin|wp-login\.php) {
        proxy_pass https://185.88.153.233;
        proxy_set_header Host vitrayco.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
        proxy_ssl_verify off;
        proxy_ssl_server_name on;
    }

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/vitrayco.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/vitrayco.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.vitrayco.com) { return 301 https://$host$request_uri; }
    if ($host = vitrayco.com) { return 301 https://$host$request_uri; }
    listen 80;
    server_name vitrayco.com www.vitrayco.com;
    return 404;
}
```

To update Nginx config:
```bash
scp -i deploy/keys/private-key-file.pem <local-config> root@5.159.49.68:/etc/nginx/sites-available/vitrayco
ssh -i deploy/keys/private-key-file.pem root@5.159.49.68 "nginx -t && systemctl reload nginx"
```

---

## Known server quirks

- **CPU has no AVX2** — `sharp` must stay pinned to `0.32.6` (set in `package.json` optionalDependencies). Do not upgrade it.
- **Abrha intercepts plain HTTP `.js` files** — always use HTTPS. HTTP works for HTML/images but JS chunks get redirected to an internal IP on port 80.
- **macOS → Linux rsync** — always use `--iconv=utf-8-mac,utf-8` for Persian filenames.

---

## SSL renewal

Certbot auto-renews. To renew manually:
```bash
ssh -i deploy/keys/private-key-file.pem root@5.159.49.68 "certbot renew"
```
