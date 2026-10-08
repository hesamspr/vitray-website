import type { NextConfig } from "next";
import {
  SUCCESS_STORY_SLUGS,
  SUCCESS_STORY_REDIRECTS,
  CONSOLIDATED_POSTS,
  LEGACY_PAGE_REDIRECTS,
} from "./lib/legacy-redirects";

async function fetchWPPostSlugs(): Promise<string[]> {
  const slugs: string[] = []
  let page = 1

  try {
    while (true) {
      const res = await fetch(
        `https://vitrayco.com/wp-json/wp/v2/posts?per_page=100&page=${page}&_fields=slug`,
        { signal: AbortSignal.timeout(10_000) }
      )
      if (!res.ok) break
      const posts: Array<{ slug: string }> = await res.json()
      if (posts.length === 0) break
      for (const post of posts) {
        const slug = decodeURIComponent(post.slug)
        if (!SUCCESS_STORY_SLUGS.has(slug)) slugs.push(slug)
      }
      if (posts.length < 100) break
      page++
    }
  } catch {
    // WordPress unreachable at build time — skip, old-slug redirects just won't be generated
  }

  return slugs
}

// Next.js redirect regexes match the raw (still percent-encoded) request path,
// so non-ASCII paths must be given percent-encoded here, not as decoded text.
const encodePath = (path: string) => path.split('/').map(encodeURIComponent).join('/')

// Trailing-slash variants need no entries of their own: Next normalises
// `/slug/` to `/slug` before redirects run. That extra hop is why links inside
// post bodies are rewritten to their final URL (see rewriteContentLinks).
const permanent = (source: string, destination: string) => [
  { source: encodePath(source), destination, permanent: true },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vitrayco.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
    const wpSlugs = await fetchWPPostSlugs()

    return [
      // www is served by the same app and only differs by canonical tag —
      // send it to the apex domain so crawlers see one copy of every page.
      {
        source: '/:path*',
        has: [{ type: 'host' as const, value: 'www.vitrayco.com' }],
        destination: 'https://vitrayco.com/:path*',
        permanent: true,
      },

      // WP date archives (e.g. linked from old posts) have no equivalent route
      {
        source: '/blog/:year(\\d{4})/:month(\\d{1,2})/:day(\\d{1,2})',
        destination: '/blog',
        permanent: true,
      },

      // Legacy flat URLs from the old WordPress theme → success stories
      ...SUCCESS_STORY_REDIRECTS.map(({ source, destination }) => ({
        source,
        destination,
        permanent: true,
      })),

      // Consolidated blog posts — both /blog/<slug> and the legacy root /<slug>
      ...CONSOLIDATED_POSTS.flatMap(({ slug, destination }) => [
        ...permanent(`/blog/${slug}`, destination),
        ...permanent(`/${slug}`, destination),
      ]),

      // Dead WordPress pages
      ...LEGACY_PAGE_REDIRECTS.flatMap(({ source, destination }) => permanent(source, destination)),

      // WordPress root-slug URLs → /blog/[slug]
      // Generated at build time from the WP API
      ...wpSlugs.flatMap(slug => permanent(`/${slug}`, `/blog/${slug}`)),
    ]
  },
};

export default nextConfig;
