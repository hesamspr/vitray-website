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

    return [
      // Legacy flat URLs from the old WordPress theme → success stories
      { source: '/haraz-dairy', destination: '/success-stories/haraz-dairy', permanent: true },
      { source: '/gerad-succuss-story', destination: '/success-stories/gerad', permanent: true },
      { source: '/behnoush-iran-succuss-story', destination: '/success-stories/behnoush-iran', permanent: true },
      { source: '/telavang-cs', destination: '/success-stories/telavang', permanent: true },

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
