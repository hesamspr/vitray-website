import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/wordpress'
import { successStories } from '@/lib/successStories'

const BASE_URL = 'https://vitrayco.com'

const staticRoutes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/success-stories', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/business-intelligence', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/bi-solution', priority: 0.9, changeFrequency: 'monthly' },
  // { path: '/daana', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pbi-download', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/plex', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/plexserver', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/pixel', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pulse', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/blog', priority: 0.7, changeFrequency: 'daily' },
  { path: '/bi-dashboards', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/bi-dashboards/b2b-sales', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/bi-dashboards/distribution-sales', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/bi-dashboards/finance', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/bi-dashboards/hr', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/bi-dashboards/maintenance', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/bi-dashboards/production', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/bi-dashboards/warehouse', priority: 0.7, changeFrequency: 'monthly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  // Individual success-story pages.
  for (const story of successStories) {
    routes.push({
      url: `${BASE_URL}/success-stories/${story.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  }

  // Blog posts are best-effort — a WordPress outage must not break the sitemap.
  try {
    const { posts } = await getPosts(1, 100)
    for (const post of posts) {
      routes.push({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : now,
        changeFrequency: 'weekly',
        priority: 0.6,
      })
    }
  } catch {
    // Ignore — static routes are still returned.
  }

  return routes
}
