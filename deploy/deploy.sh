#!/usr/bin/env bash
# Deploy vitrayco (Next.js) to an Iranian VPS.
# Run on the VPS:  bash deploy/deploy.sh
# First-time setup: bash deploy/deploy.sh --setup

set -euo pipefail

APP_DIR="/var/www/website"
APP_NAME="vitrayco"
BRANCH="${BRANCH:-main}"
NODE_VERSION="20"

log() { printf "\n\033[1;34m==>\033[0m %s\n" "$*"; }

setup() {
  log "Installing Node ${NODE_VERSION}, git, nginx, pm2"
  curl -fsSL "https://deb.nodesource.com/setup_${NODE_VERSION}.x" | sudo bash -
  sudo apt-get install -y nodejs git nginx
  sudo npm i -g pm2

  log "Pointing npm at ArvanCloud mirror (works from inside Iran)"
  npm config set registry https://npm-registry.arvancloud.ir

  log "Creating ${APP_DIR}"
  sudo mkdir -p "${APP_DIR}" /var/log/pm2
  sudo chown -R "$USER:$USER" "${APP_DIR}" /var/log/pm2
}

deploy() {
  if [ ! -d "${APP_DIR}/.git" ]; then
    log "First deploy — clone your repo into ${APP_DIR}, then re-run this script."
    log "  git clone <your-repo-url> ${APP_DIR}"
    exit 1
  fi

  log "Pulling ${BRANCH}"
  cd "${APP_DIR}"
  git fetch --all
  git reset --hard "origin/${BRANCH}"

  cd "${APP_DIR}/web-next"

  log "Installing dependencies (npm ci)"
  npm ci --no-audit --no-fund

  log "Building Next.js"
  NODE_ENV=production npm run build

  log "Reloading pm2"
  if pm2 describe "${APP_NAME}" >/dev/null 2>&1; then
    pm2 reload ecosystem.config.js --update-env
  else
    pm2 start ecosystem.config.js
    pm2 save
    sudo env PATH="$PATH:/usr/bin" pm2 startup systemd -u "$USER" --hp "$HOME"
  fi

  log "Done. Check:  pm2 logs ${APP_NAME}"
}

case "${1:-deploy}" in
  --setup|setup) setup ;;
  deploy)        deploy ;;
  *) echo "usage: $0 [--setup|deploy]"; exit 1 ;;
esac
