// Redirect maps shared by next.config.ts (server-side 308s) and the blog
// content link rewriter (lib/wordpress.ts), so links inside WordPress post
// bodies point straight at their final URL instead of bouncing through a
// redirect. Plain data only — next.config.ts imports this file, so it must not
// use the `@/` alias or any server-only module.

// These WP slugs map to success stories, not blog posts.
export const SUCCESS_STORY_SLUGS = new Set([
  'haraz-dairy',
  'gerad-succuss-story',
  'behnoush-iran-succuss-story',
  'telavang-cs',
])

// Legacy flat URLs from the old WordPress theme → success stories.
export const SUCCESS_STORY_REDIRECTS: Array<{ source: string; destination: string }> = [
  { source: '/haraz-dairy', destination: '/success-stories/haraz-dairy' },
  { source: '/gerad-succuss-story', destination: '/success-stories/gerad' },
  { source: '/behnoush-iran-succuss-story', destination: '/success-stories/behnoush-iran' },
  { source: '/telavang-cs', destination: '/success-stories/telavang' },
]

// Blog posts merged into a stronger page during the 2026-07 keyword-cannibalization
// cleanup — content was folded into the destination before these were unpublished.
// Slugs only; both `/blog/<slug>` and the legacy root `/<slug>` are redirected.
export const CONSOLIDATED_POSTS: Array<{ slug: string; destination: string }> = [
  { slug: 'what-is-bi', destination: '/business-intelligence' },
  { slug: 'what-is-business-intelligence', destination: '/business-intelligence' },
  { slug: 'business-intelligence-in-organizations', destination: '/business-intelligence' },
  { slug: 'business-intelligence-knowledge', destination: '/business-intelligence' },
  { slug: 'how-to-use-bi', destination: '/business-intelligence' },
  { slug: 'history-of-business-intelligence', destination: '/blog/starter-guide-to-business-intelligence' },
  { slug: 'key-components-of-business-intelligence', destination: '/blog/bi-comprehensive-guide' },
  { slug: 'top-business-intelligence-tools', destination: '/blog/bi-comprehensive-guide' },
  { slug: 'ways-business-intelligence-can-improve-your-business', destination: '/blog/bi-benefits' },
  { slug: 'bi-vs-ds-2', destination: '/blog/bi-vs-ds' },
  // Decoded slug — percent-encoded when matched against raw request paths.
  { slug: 'بازگشت-مشتری-چیست؟', destination: '/blog/customer-retention' },
]

// WordPress *page*-type content (as opposed to posts) that never got a
// redirect when the site moved to Next.js — these all 404 on production.
// Unlike posts, WP pages are few and stable, so the mapping is hardcoded
// rather than fetched at build time. Sources are decoded paths.
export const LEGACY_PAGE_REDIRECTS: Array<{ source: string; destination: string }> = [
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
  // Persian-slug WP pages, still linked from old blog posts — all 404ed.
  { source: '/هوش-تجاری-چیست', destination: '/business-intelligence' },
  { source: '/راهکار-فروش', destination: '/bi-dashboards/b2b-sales' },
  { source: '/هوش-تجاری-مالی', destination: '/bi-dashboards/finance' },
  { source: '/هوش-تجاری-منابع-انسانی', destination: '/bi-dashboards/hr' },
]

// WP date-archive URLs (`/blog/2023/08/21/`) — there is no archive route.
export const DATE_ARCHIVE_PATTERN = /^\/blog\/\d{4}\/\d{1,2}(?:\/\d{1,2})?$/
