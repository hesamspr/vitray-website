const WP_API = 'https://polarisinsights.tech/wp-json/wp/v2'

export interface WPCategory {
  id: number
  name: string
  slug: string
}

export interface WPPost {
  id: number
  slug: string
  date: string
  modified: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  featured_media: number
  categories: number[]
  yoast_head_json: {
    title: string
    og_title?: string
    og_description?: string
    og_url?: string
    og_image?: Array<{ url: string; width: number; height: number }>
    canonical?: string
    article_published_time?: string
    article_modified_time?: string
    schema?: unknown
  }
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string
      alt_text: string
      media_details?: { width: number; height: number }
    }>
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>
  }
}

export interface WPPostsResponse {
  posts: WPPost[]
  totalPages: number
  total: number
}

export async function getPosts(page = 1, perPage = 12): Promise<WPPostsResponse> {
  const res = await fetch(
    `${WP_API}/posts?_embed&per_page=${perPage}&page=${page}&_fields=id,slug,date,title,excerpt,featured_media,categories,yoast_head_json,_links`,
    { cache: 'no-store' }
  )
  if (!res.ok) return { posts: [], totalPages: 0, total: 0 }
  const posts: WPPost[] = await res.json()
  const totalPages = Number(res.headers.get('X-WP-TotalPages') ?? 1)
  const total = Number(res.headers.get('X-WP-Total') ?? posts.length)
  return { posts, totalPages, total }
}

export async function getPost(slug: string): Promise<WPPost | null> {
  const res = await fetch(
    `${WP_API}/posts?slug=${encodeURIComponent(slug)}&_embed&_fields=id,slug,date,modified,title,excerpt,content,featured_media,categories,yoast_head_json,_links`,
    { cache: 'no-store' }
  )
  if (!res.ok) return null
  const posts: WPPost[] = await res.json()
  return posts[0] ?? null
}

export async function getCategories(): Promise<WPCategory[]> {
  const res = await fetch(
    `${WP_API}/categories?per_page=20&_fields=id,name,slug`,
    { cache: 'no-store' }
  )
  if (!res.ok) return []
  return res.json()
}

export function getFeaturedImage(post: WPPost): { src: string; alt: string } | null {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  if (!media?.source_url) return null
  return { src: media.source_url, alt: media.alt_text || post.title.rendered }
}

export function getPostCategories(post: WPPost): Array<{ id: number; name: string; slug: string }> {
  return post._embedded?.['wp:term']?.[0] ?? []
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, '').replace(/&[a-z]+;/gi, ' ').trim()
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
