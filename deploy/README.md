# Deploying vitrayco to an Iranian VPS (ArvanCloud / Abrarvan)

## One-time setup on the VPS

```bash
# 1. SSH in, then prep system + install Node/nginx/pm2
ssh user@<vps-ip>
sudo apt update && sudo apt upgrade -y

# 2. Clone the repo to /var/www/website
sudo mkdir -p /var/www/website && sudo chown -R $USER:$USER /var/www/website
git clone <your-repo-url> /var/www/website

# 3. Run installer
cd /var/www/website
bash deploy/deploy.sh --setup

# 4. First build + start
bash deploy/deploy.sh

# 5. Nginx vhost
sudo cp deploy/nginx.conf /etc/nginx/sites-available/vitrayco
sudo ln -s /etc/nginx/sites-available/vitrayco /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

## Every subsequent deploy

```bash
ssh user@<vps-ip>
cd /var/www/website && bash deploy/deploy.sh
```

Or from your laptop in one line:
```bash
ssh user@<vps-ip> 'cd /var/www/website && bash deploy/deploy.sh'
```

## HTTPS

Easiest path: put **ArvanCloud CDN** in front of the VPS. Free TLS, caching, and DDoS protection, and avoids the Let's Encrypt-blocked-from-Iran problem.

Fallback (no CDN):
```bash
curl https://get.acme.sh | sh -s email=h.cyberism@gmail.com
~/.acme.sh/acme.sh --issue -d vitrayco.com -d www.vitrayco.com --nginx --server zerossl
~/.acme.sh/acme.sh --install-cert -d vitrayco.com \
  --key-file /etc/nginx/ssl/vitrayco.key \
  --fullchain-file /etc/nginx/ssl/vitrayco.crt \
  --reloadcmd "systemctl reload nginx"
```
Then add a `listen 443 ssl;` block to `deploy/nginx.conf` pointing at those cert paths.

## Useful commands

| What | Command |
| --- | --- |
| Logs | `pm2 logs vitrayco` |
| Restart | `pm2 reload vitrayco` |
| Status | `pm2 status` |
| Nginx logs | `sudo tail -f /var/log/nginx/{access,error}.log` |

## Gotchas

- **WordPress fetches**: [lib/wordpress.ts](../web-next/lib/wordpress.ts) calls `polarisinsights.tech` during build/ISR. If that host is slow from your VPS, blog pages will time out — consider moving WP to the same IR datacenter.
- **n8n webhook**: [app/contact/page.tsx](../web-next/app/contact/page.tsx) posts to `n8n.vitray.ir` — make sure that host is reachable from the VPS *and* from end users.
- **Memory**: `next build` peaks around ~1 GB. A 1 GB VPS will OOM; pick 2 GB+.
- **npm mirror**: the setup script switches npm to ArvanCloud's registry so `npm ci` works from inside Iran.
