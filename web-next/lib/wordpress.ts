const WP_API = 'https://vitrayco.com/wp-json/wp/v2'

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
  yoast_head_json?: {
    title?: string
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

// WordPress image filenames carry a size suffix (`-1024x684`) or `-scaled`
// before the extension — strip both so different renditions of the same
// upload compare equal.
function getImageBaseName(url: string): string {
  const filename = url.split('/').pop() ?? ''
  return filename.replace(/\.[a-z0-9]+$/i, '').replace(/-\d+x\d+$/, '').replace(/-scaled$/, '')
}

// Several posts have their featured image manually inserted as the first
// element of the body too, so it renders twice — once as the page's featured
// image, once again at the top of the article. Drop the body's copy when the
// very first <img> in the content is that same upload.
export function stripLeadingDuplicateImage(html: string, featuredImageSrc: string): string {
  const featuredBase = getImageBaseName(featuredImageSrc)
  return html.replace(/<img\b[^>]*>/i, (match) => {
    const srcMatch = match.match(/src="([^"]+)"/)
    return srcMatch && getImageBaseName(srcMatch[1]) === featuredBase ? '' : match
  })
}

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  hellip: '…',
  mdash: '—',
  ndash: '–',
  ldquo: '“',
  rdquo: '”',
  lsquo: '‘',
  rsquo: '’',
  laquo: '«',
  raquo: '»',
}

// WordPress `.rendered` fields are pre-encoded HTML text, not plain text —
// decode entities before using them anywhere that isn't dangerouslySetInnerHTML
// (e.g. metadata title/description, JSON-LD), or they double-escape (`&#8230;` -> `&amp;#8230;`).
export function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(parseInt(dec, 10)))
    .replace(/&([a-z]+);/gi, (match, name) => NAMED_ENTITIES[name.toLowerCase()] ?? match)
}

export function stripHtml(html: string): string {
  return decodeHtmlEntities(html.replace(/<[^>]+>/g, '')).trim()
}

// Blog is Persian-only (English visitors 404 before reaching a post), so the
// Jalali calendar is always correct here — no need to branch on lang. WordPress
// stores post dates as Iran-local time with no timezone marker, so it's pinned
// explicitly rather than trusting the server's OS timezone (which runs UTC).
export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Tehran',
  })
}
