<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# SEO is a first-class requirement

SEO and performance are not optional polish — they must be considered in **every** change, on every page. Before finishing any work that touches a route, a page, or a component, verify the points below.

## Metadata on every route
- Every route must resolve real `<title>` and `<meta description>` — never let a page fall back to the generic root defaults.
- Client pages (`'use client'`) **cannot** export `metadata`. Attach metadata by adding a sibling server `layout.tsx` in the route folder that exports a `metadata` object (or `generateMetadata`). Keep the page as the client component.
- The root `app/layout.tsx` defines `metadataBase`, a `title.template` (`%s | ویترای`) + `title.default`, and the default `openGraph`/`twitter`/`robots`. Per-route layouts override `title` (string → template applied), `description`, `alternates.canonical`, and `openGraph`.
- Canonical domain is `https://vitrayco.com`. Set `alternates.canonical` per route. With `metadataBase` set, use root-relative paths (e.g. `'/about'`).
- Metadata text is written in **Persian (fa)** because the default server render is `fa` — that is what crawlers see.
- New top-level routes must be added to `app/sitemap.ts`. Keep `app/robots.ts` accurate.
- Data-driven pages (e.g. blog) use `generateMetadata` + JSON-LD structured data. Add appropriate schema.org JSON-LD (`Organization`, `Article`, `Product`, `BreadcrumbList`) where it fits.

## Performance / Core Web Vitals
- Use `next/image` for all raster images — never raw `<img>`. Always pass `width`/`height` (or `fill` + sized parent) to prevent CLS, and `sizes` for responsive images.
- Keep `'use client'` as low in the tree as possible. Don't mark a whole page client when only a subtree needs interactivity — split out the interactive part so the page stays a server component and can stream + export metadata.
- Lazy-load heavy, below-the-fold, or interaction-only components (`next/dynamic`, `Suspense`). Heavy libs (shaders, charts) must not block first paint.
- Prefer server components and streaming (`Suspense`) for data fetching so content reaches the crawler/user fast.

## i18n caveat
Language is toggled client-side on a single URL (no `/en` routes), so true per-language `hreflang` alternates are not yet possible. If/when localized routes are introduced, add `alternates.languages` to metadata and the sitemap.

# Committing & pushing

When a change is finished and feels like a natural commit point, **ask the user** whether to commit and push to GitHub — do not commit or push automatically. Once they confirm, create the commit and push to the remote.
