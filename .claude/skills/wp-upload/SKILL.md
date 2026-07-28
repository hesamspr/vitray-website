---
name: wp-upload
description: Upload media files (images, etc.) to the vitrayco.com WordPress media library via a direct REST API call. Use when uploading/attaching media to WordPress, or when the `wordpress` MCP server's wp_upload_media tool fails with "Authentication failed" — that tool has a known bug (see Background) and this is the working replacement.
---

# wp-upload

## Background

The `wordpress` MCP server (npm `mcp-wordpress`) is registered for this project and most of its tools work fine — `wp_create_post`, `wp_update_post`, `wp_list_posts`, etc. But `wp_upload_media` consistently fails with a misleading "Authentication failed" error when called through the long-running MCP server process. This was root-caused: it's not a credentials or code bug (verified by calling the exact same client code in an isolated script — it succeeds every time), and is most likely a WAF/security plugin on the WordPress host (cPanel commonly runs Imunify360/ModSecurity) flagging repeated automated POST uploads from the persistent MCP process specifically, while fresh short-lived connections go through fine every time.

Until that's resolved upstream, use this skill's script instead of the MCP tool for any media upload.

## Usage

```bash
.claude/skills/wp-upload/scripts/upload.sh <file_path> [title] [alt_text] [caption] [description]
```

Only `file_path` is required; the rest are optional (pass `""` to skip one while setting a later one).

Example:
```bash
.claude/skills/wp-upload/scripts/upload.sh \
  /path/to/image.jpg \
  "Q3 revenue chart" \
  "Bar chart of Q3 revenue by product" \
  "" \
  ""
```

On success it prints the created media item's `id`, `source_url`, `title`, `alt_text`, and `mime_type` as JSON. On failure it prints the WordPress error response and exits non-zero.

The script reads `WORDPRESS_USERNAME`, `WORDPRESS_APP_PASSWORD`, and `WORDPRESS_SITE_URL` from `~/.claude.json` (`mcpServers.wordpress.env` — the same credentials the MCP server itself uses) and never prints the password. If those aren't set, register the `wordpress` MCP server first (`claude mcp list` to check).

## After uploading

Use the returned `id` as `featured_media` (or embed it) when creating/updating a post — do that through the normal `wordpress` MCP tools (`wp_create_post`, `wp_update_post`), which are not affected by this bug. Only the upload step needs this workaround.
