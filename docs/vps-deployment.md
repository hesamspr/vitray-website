# VPS Deployment Guide — vitrayco.com

Migrating the Next.js app to a Ubuntu VPS while keeping WordPress as a headless CMS.

## Architecture

```
vitrayco.com  →  Ubuntu VPS (Nginx)
                     │
                     ├── /wp-json/*     ──proxy──▶  WordPress (cms.vitrayco.com)
                     ├── /wp-content/*  ──proxy──▶  WordPress (cms.vitrayco.com)
                     ├── /wp-admin/*    ──proxy──▶  WordPress (cms.vitrayco.com)
                     └── everything else ────────▶  Next.js (localhost:3000)
```

---

## Part 1 — Move WordPress to a subdomain

Do this **before** changing DNS to the VPS.

### 1.1 Create the subdomain on your Iranian host

In cPanel (or your host's panel):
- Add subdomain: `cms.vitrayco.com`
- Point it to the same WordPress files directory

### 1.2 Update WordPress settings

In WordPress admin → **Settings → General**:
- **WordPress Address (URL):** `https://cms.vitrayco.com`
- **Site Address (URL):** `https://cms.vitrayco.com`
- Save

> ⚠️ After saving, you'll be logged out. Log back in at `cms.vitrayco.com/wp-admin`.

### 1.3 Search & replace old URLs in the database

Install the **Better Search Replace** plugin (or use WP-CLI):

- Search for: `https://vitrayco.com`
- Replace with: `https://cms.vitrayco.com`
- Run on all tables
- Do a dry run first, then the real run

This fixes image URLs inside post content so they point to `cms.vitrayco.com/wp-content/uploads/...`.

### 1.4 Update the Next.js app

Two files need updating after WordPress moves:

**`web-next/lib/wordpress.ts` line 1:**
```ts
const WP_API = 'https://cms.vitrayco.com/wp-json/wp/v2'
```

**`web-next/next.config.ts` — image remote patterns:**
```ts
remotePatterns: [
  {
    protocol: 'https',
    hostname: 'cms.vitrayco.com',
    pathname: '/wp-content/uploads/**',
  },
],
```

### 1.5 SSL for cms.vitrayco.com

In your Iranian hosting cPanel → **SSL/TLS** → issue a Let's Encrypt cert for `cms.vitrayco.com`.

---

## Part 2 — VPS Setup

### 2.1 Initial server (run as root, then switch to a sudo user)

```bash
apt update && apt upgrade -y

# Create a non-root user
adduser deploy
usermod -aG sudo deploy

# Harden SSH (optional but recommended)
# Edit /etc/ssh/sshd_config:
#   PermitRootLogin no
#   PasswordAuthentication no
systemctl restart ssh
```

### 2.2 Install Node.js 22 (LTS)

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
apt install -y nodejs
node -v  # confirm
```

### 2.3 Install PM2

```bash
npm install -g pm2
pm2 startup  # follow the printed command to enable auto-start on reboot
```

### 2.4 Install Nginx

```bash
apt install -y nginx
systemctl enable nginx
systemctl start nginx
```

### 2.5 Deploy the Next.js app

```bash
# As the deploy user:
git clone https://github.com/your-org/Website.git /var/www/vitrayco
cd /var/www/vitrayco/web-next

npm install
npm run build

pm2 start npm --name "vitrayco" -- start
pm2 save
```

For future deploys:
```bash
cd /var/www/vitrayco/web-next
git pull
npm install
npm run build
pm2 restart vitrayco
```

### 2.6 Configure Nginx

Create `/etc/nginx/sites-available/vitrayco`:

```nginx
server {
    listen 80;
    server_name vitrayco.com www.vitrayco.com;

    # Proxy WordPress-specific paths to the CMS subdomain
    location ~* ^/(wp-json|wp-content|wp-admin|wp-login\.php) {
        proxy_pass https://cms.vitrayco.com;
        proxy_set_header Host cms.vitrayco.com;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_ssl_server_name on;
    }

    # Everything else → Next.js
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
}
```

Enable it:
```bash
ln -s /etc/nginx/sites-available/vitrayco /etc/nginx/sites-enabled/
nginx -t          # verify config
systemctl reload nginx
```

### 2.7 SSL with Let's Encrypt

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d vitrayco.com -d www.vitrayco.com
```

Certbot edits the Nginx config automatically and sets up auto-renewal.

---

## Part 3 — DNS Cutover

Once VPS is ready and tested (test by adding a hosts entry locally first):

1. In your DNS provider, change the **A record** for `vitrayco.com` to the VPS IP
2. Change the **A record** for `www.vitrayco.com` to the same VPS IP
3. Set TTL to 300 (5 min) before cutover, so propagation is fast
4. Monitor with `dig vitrayco.com` until it resolves to the VPS IP

---

## Checklist before going live

- [ ] WordPress is live and accessible at `cms.vitrayco.com`
- [ ] All images load correctly from `cms.vitrayco.com/wp-content/uploads/...`
- [ ] `web-next/lib/wordpress.ts` WP_API points to `cms.vitrayco.com`
- [ ] `web-next/next.config.ts` image pattern updated to `cms.vitrayco.com`
- [ ] Next.js builds without errors on the VPS
- [ ] PM2 is running and survives a reboot (`pm2 list`)
- [ ] Nginx config passes `nginx -t`
- [ ] SSL cert issued and HTTPS works
- [ ] Test old URLs redirect correctly: `vitrayco.com/elecomp1402` → `vitrayco.com/blog/elecomp1402`
- [ ] DNS updated and propagated
- [ ] Submit updated sitemap to Google Search Console
