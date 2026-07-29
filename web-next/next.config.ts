import type { NextConfig } from "next";

// These WP slugs map to success stories, not blog posts
const SUCCESS_STORY_SLUGS = new Set([
  'haraz-dairy',
  'gerad-succuss-story',
  'behnoush-iran-succuss-story',
  'telavang-cs',
])

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

    // Blog posts merged into a stronger page during the 2026-07 keyword-cannibalization
    // cleanup — content was folded into the destination before these were unpublished.
    const CONSOLIDATED_POSTS: Array<{ source: string; destination: string }> = [
      { source: '/blog/what-is-bi', destination: '/business-intelligence' },
      { source: '/blog/what-is-business-intelligence', destination: '/business-intelligence' },
      { source: '/blog/business-intelligence-in-organizations', destination: '/business-intelligence' },
      { source: '/blog/business-intelligence-knowledge', destination: '/business-intelligence' },
      { source: '/blog/how-to-use-bi', destination: '/business-intelligence' },
      { source: '/blog/history-of-business-intelligence', destination: '/blog/starter-guide-to-business-intelligence' },
      { source: '/blog/key-components-of-business-intelligence', destination: '/blog/bi-comprehensive-guide' },
      { source: '/blog/top-business-intelligence-tools', destination: '/blog/bi-comprehensive-guide' },
      { source: '/blog/ways-business-intelligence-can-improve-your-business', destination: '/blog/bi-benefits' },
      { source: '/blog/bi-vs-ds-2', destination: '/blog/bi-vs-ds' },
      // Next.js redirect regexes match the raw (still percent-encoded) request path,
      // so non-ASCII slugs must be given percent-encoded here, not as decoded text.
      { source: '/blog/%d8%a8%d8%a7%d8%b2%da%af%d8%b4%d8%aa-%d9%85%d8%b4%d8%aa%d8%b1%db%8c-%da%86%db%8c%d8%b3%d8%aa%d8%9f', destination: '/blog/customer-retention' },
    ]

    // WordPress *page*-type content (as opposed to posts) that never got a
    // redirect when the site moved to Next.js — these all 404 on production.
    // Unlike posts, WP pages are few and stable, so the mapping is hardcoded
    // rather than fetched at build time.
    const LEGACY_PAGE_REDIRECTS: Array<{ source: string; destination: string }> = [
      { source: '/about-us', destination: '/about' },
      { source: '/inventory-solution', destination: '/bi-dashboards/warehouse' },
      { source: '/production-solution', destination: '/bi-dashboards/production' },
      { source: '/human-resource-solution', destination: '/bi-dashboards/hr' },
      { source: '/financial-solution', destination: '/bi-dashboards/finance' },
      { source: '/distribution-solution', destination: '/bi-dashboards/distribution-sales' },
      { source: '/sales-solution', destination: '/bi-dashboards/b2b-sales' },
      { source: '/marketing-solution', destination: '/bi-solution' },
      { source: '/jumpstart-package', destination: '/bi-solution' },
      { source: '/managed-services', destination: '/bi-solution' },
      { source: '/bi-project-delivery', destination: '/bi-solution' },
      { source: '/rfm-segmentation-solution', destination: '/blog/rfm-segmentation' },
      { source: '/market-basket-analysis', destination: '/blog/basket-marketing' },
      { source: '/cohort-analysis', destination: '/blog/what-is-cohort' },
      { source: '/power-bi-visuals', destination: '/pbi-download' },
      { source: '/webinar', destination: '/' },
      { source: '/pbichallenge', destination: '/' },
      { source: '/dashboard-examples', destination: '/bi-dashboards' },
      { source: '/glossary', destination: '/' },
      { source: '/budget', destination: '/' },
      { source: '/sales-agent', destination: '/' },
    ]

    return [
      // Legacy flat URLs from the old WordPress theme → success stories
      { source: '/haraz-dairy', destination: '/success-stories/haraz-dairy', permanent: true },
      { source: '/gerad-succuss-story', destination: '/success-stories/gerad', permanent: true },
      { source: '/behnoush-iran-succuss-story', destination: '/success-stories/behnoush-iran', permanent: true },
      { source: '/telavang-cs', destination: '/success-stories/telavang', permanent: true },

      // Consolidated blog posts — covers both with and without trailing slash
      ...CONSOLIDATED_POSTS.flatMap(({ source, destination }) => [
        { source, destination, permanent: true },
        { source: `${source}/`, destination, permanent: true },
      ]),

      // Dead WordPress pages — covers both with and without trailing slash
      ...LEGACY_PAGE_REDIRECTS.flatMap(({ source, destination }) => [
        { source, destination, permanent: true },
        { source: `${source}/`, destination, permanent: true },
      ]),

      // WordPress root-slug URLs → /blog/[slug]
      // Generated at build time from the WP API — covers both with and without trailing slash
      ...wpSlugs.flatMap(slug => [
        { source: `/${slug}`,  destination: `/blog/${slug}`, permanent: true },
        { source: `/${slug}/`, destination: `/blog/${slug}`, permanent: true },
      ]),
    ]
  },
};

export default nextConfig;
