#!/usr/bin/env bash
# Uploads a file to the vitrayco.com WordPress media library via the REST API,
# bypassing the `wordpress` MCP server's wp_upload_media tool (see SKILL.md for why).
set -euo pipefail

if [ -z "${1:-}" ]; then
  echo "Usage: $0 <file_path> [title] [alt_text] [caption] [description]" >&2
  exit 1
fi

FILE_PATH="$1"
TITLE="${2:-}"
ALT_TEXT="${3:-}"
CAPTION="${4:-}"
DESCRIPTION="${5:-}"

if [ ! -f "$FILE_PATH" ]; then
  echo "Error: file not found: $FILE_PATH" >&2
  exit 1
fi

CONFIG="$HOME/.claude.json"
WP_USER=$(jq -r '.mcpServers.wordpress.env.WORDPRESS_USERNAME // empty' "$CONFIG")
WP_PASS=$(jq -r '.mcpServers.wordpress.env.WORDPRESS_APP_PASSWORD // empty' "$CONFIG")
WP_SITE=$(jq -r '.mcpServers.wordpress.env.WORDPRESS_SITE_URL // empty' "$CONFIG")

if [ -z "$WP_USER" ] || [ -z "$WP_PASS" ] || [ -z "$WP_SITE" ]; then
  echo "Error: could not read WordPress credentials from $CONFIG (mcpServers.wordpress.env)." >&2
  echo "Make sure the 'wordpress' MCP server is registered (claude mcp list)." >&2
  exit 1
fi

FILENAME=$(basename "$FILE_PATH")
MIME_TYPE=$(file -b --mime-type "$FILE_PATH")

ARGS=(-sk -X POST "${WP_SITE}/wp-json/wp/v2/media" \
  -u "${WP_USER}:${WP_PASS}" \
  -F "file=@${FILE_PATH};type=${MIME_TYPE};filename=${FILENAME}")

[ -n "$TITLE" ] && ARGS+=(-F "title=${TITLE}")
[ -n "$ALT_TEXT" ] && ARGS+=(-F "alt_text=${ALT_TEXT}")
[ -n "$CAPTION" ] && ARGS+=(-F "caption=${CAPTION}")
[ -n "$DESCRIPTION" ] && ARGS+=(-F "description=${DESCRIPTION}")

RESPONSE=$(curl "${ARGS[@]}")

if echo "$RESPONSE" | jq -e '.id' >/dev/null 2>&1; then
  echo "$RESPONSE" | jq '{id, source_url, title: .title.raw, alt_text, mime_type}'
else
  echo "Upload failed:" >&2
  echo "$RESPONSE" >&2
  exit 1
fi
