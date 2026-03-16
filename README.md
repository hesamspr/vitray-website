## Modern React + WordPress Blog

This project contains:

- A **modern React front-end** (`web/`) built with Vite.
- A **WordPress blog integration** that fetches posts from your existing WordPress site via its REST API.

### Project structure

- `web/` – React front-end (Vite + TypeScript)

### Prerequisites

- Node.js 18+ and npm installed.

### Getting started

1. **Install dependencies**

   ```bash
   cd web
   npm install
   ```

2. **Configure WordPress URL**

   In `web/src/services/wordpress.ts`, set `WORDPRESS_BASE_URL` to your existing WordPress site URL.

3. **Run the React front-end**

   ```bash
   cd web
   npm run dev
   ```

The front-end home page will:

- Render a simple hero section.
- Fetch and display recent posts from your old WordPress blog.
