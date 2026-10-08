import {
  CONSOLIDATED_POSTS,
  DATE_ARCHIVE_PATTERN,
  LEGACY_PAGE_REDIRECTS,
  SUCCESS_STORY_REDIRECTS,
  SUCCESS_STORY_SLUGS,
} from '@/lib/legacy-redirects'

const WP_API = 'https://vitrayco.com/wp-json/wp/v2'

// WordPress responses are cached in Next's data cache (shared across requests)
// instead of hitting the WP origin on every page view — an uncached WP round
// trip took 1.5–6s and made every blog URL slow for crawlers.
const WP_FETCH_OPTIONS: RequestInit = { next: { revalidate: 300, tags: ['wordpress'] } }

const POST_LIST_FIELDS = 'id,slug,date,title,excerpt,featured_media,categories,yoast_head_json,_links'

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
    `${WP_API}/posts?_embed&per_page=${perPage}&page=${page}&_fields=${POST_LIST_FIELDS}`,
    WP_FETCH_OPTIONS
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
    WP_FETCH_OPTIONS
  )
  if (!res.ok) return null
  const posts: WPPost[] = await res.json()
  return posts[0] ?? null
}

export async function getCategories(): Promise<WPCategory[]> {
  const res = await fetch(
    `${WP_API}/categories?per_page=20&_fields=id,name,slug`,
    WP_FETCH_OPTIONS
  )
  if (!res.ok) return []
  return res.json()
}

// Slugs of every published post, decoded. Used to turn legacy root-level links
// (`/some-post`) inside post bodies into their canonical `/blog/some-post` URL.
export async function getPostSlugs(): Promise<Set<string>> {
  const slugs = new Set<string>()
  try {
    for (let page = 1; ; page++) {
      const res = await fetch(
        `${WP_API}/posts?per_page=100&page=${page}&_fields=slug`,
        { next: { revalidate: 3600, tags: ['wordpress'] } }
      )
      if (!res.ok) break
      const posts: Array<{ slug: string }> = await res.json()
      for (const post of posts) slugs.add(safeDecode(post.slug))
      if (posts.length < 100) break
    }
  } catch {
    // WordPress unreachable — links just won't be rewritten this time round
  }
  return slugs
}

// Same-category posts first, topped up with the latest posts. Gives every post
// a handful of contextual incoming links so none is reachable only via the sitemap.
export async function getRelatedPosts(post: WPPost, limit = 4): Promise<WPPost[]> {
  const fetchList = async (query: string): Promise<WPPost[]> => {
    const res = await fetch(
      `${WP_API}/posts?_embed&per_page=${limit + 1}&exclude=${post.id}&_fields=${POST_LIST_FIELDS}${query}`,
      WP_FETCH_OPTIONS
    )
    return res.ok ? res.json() : []
  }

  const related = post.categories.length > 0
    ? await fetchList(`&categories=${post.categories.join(',')}`)
    : []
  const picked = related.slice(0, limit)
  if (picked.length < limit) {
    const latest = await fetchList('')
    for (const candidate of latest) {
      if (picked.length >= limit) break
      if (!picked.some((p) => p.id === candidate.id)) picked.push(candidate)
    }
  }
  return picked
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

function safeDecode(value: string): string {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

const SITE_HOSTS = new Set(['vitrayco.com', 'www.vitrayco.com'])

const consolidatedByPath = new Map<string, string>(
  CONSOLIDATED_POSTS.flatMap(({ slug, destination }) => [
    [`/${slug}`, destination] as [string, string],
    [`/blog/${slug}`, destination] as [string, string],
  ])
)
const legacyByPath = new Map<string, string>(
  [...SUCCESS_STORY_REDIRECTS, ...LEGACY_PAGE_REDIRECTS].map(({ source, destination }) => [source, destination])
)

// Resolve an internal path found in post HTML to the URL that actually serves
// it, so the link doesn't go through next.config.ts redirects (trailing slash,
// legacy root slug, consolidated post, removed WP page).
function resolveInternalPath(rawPath: string, postSlugs: Set<string>): string {
  const decoded = safeDecode(rawPath)
  const path = decoded.length > 1 ? decoded.replace(/\/+$/, '') : decoded

  if (DATE_ARCHIVE_PATTERN.test(path)) return '/blog'
  if (path.startsWith('/blog/') && postSlugs.has(path.slice('/blog/'.length))) return path

  const target = consolidatedByPath.get(path) ?? legacyByPath.get(path)
  if (target) return target

  const rootSlug = path.slice(1)
  if (rootSlug && !rootSlug.includes('/') && postSlugs.has(rootSlug) && !SUCCESS_STORY_SLUGS.has(rootSlug)) {
    return `/blog/${rootSlug}`
  }
  return path
}

// Post bodies are authored in WordPress and carry its URL conventions: absolute
// vitrayco.com links with trailing slashes, root-level post slugs, links to WP
// pages that were since removed, and `http://` external links. Point all of
// them at their final URL — redirects waste crawl budget and `http://` links
// are flagged as mixed content on an HTTPS page.
export function rewriteContentLinks(html: string, postSlugs: Set<string>): string {
  return html.replace(/\bhref="([^"]*)"/gi, (match, href: string) => {
    let url: URL
    try {
      url = new URL(href, 'https://vitrayco.com')
    } catch {
      return match
    }
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return match

    if (!SITE_HOSTS.has(url.hostname)) {
      return url.protocol === 'http:' ? `href="${href.replace(/^http:/i, 'https:')}"` : match
    }
    if (/^\/(wp-content|wp-json|wp-admin)\//.test(url.pathname)) return match

    const path = resolveInternalPath(url.pathname, postSlugs)
    const encodedPath = path.split('/').map(encodeURIComponent).join('/')
    return `href="${encodedPath}${url.search}${url.hash}"`
  })
}

// Images from the old WordPress library that were never migrated and now
// return 404. Dropping the <img> beats shipping a broken-image box, and stops
// crawlers hitting dead URLs.
const MISSING_WP_UPLOADS = new Set([
  '2021/08/clarizen.jpg',
  '2021/08/proofhub.png',
  '2021/08/wrike-1.png',
  '2021/08/kiss-flow.jpg',
  '2021/08/photo1630300816.jpeg',
  '2021/08/trello-o.jpg',
  '2021/08/monday.com_.jpg',
  '2021/08/kanban-tools.jpg',
  '2021/08/asana.png',
  '2021/08/zoho-project.png',
  '2021/08/target.jpg',
  '2021/08/data.jpg',
  '2021/08/dfgh.jpg',
  '2021/08/show.jpg',
  '2021/08/dataa.jpg',
  '2021/08/holding-to-charts.jpg',
  '2021/09/luke-chesser-JKUTrJ4vK00-unsplash.jpg',
  '2021/09/top-shot-three-unrecognizable-business-people-sitting-meeting-looking-charts.jpg',
  '2021/09/isaac-smith-6EnTPvPPL6I-unsplash.jpg',
])

export function stripMissingImages(html: string): string {
  return html.replace(/<img\b[^>]*>/gi, (match) => {
    const src = match.match(/\ssrc="([^"]+)"/)?.[1]
    const upload = src?.match(/\/wp-content\/uploads\/(.+)$/)?.[1]
    return upload && MISSING_WP_UPLOADS.has(upload) ? '' : match
  })
}

// The post title already renders the page's single <h1>; WordPress bodies that
// carry their own <h1> would give crawlers several, so demote them.
export function demoteContentH1(html: string): string {
  return html.replace(/<(\/?)h1\b/gi, '<$1h2')
}

// Search-result snippets are cut off around this length.
const META_DESCRIPTION_MAX = 155
// The root title template appends " | ویترای" (9 chars), so keep the page part short
// enough for ≤60 total.
const META_TITLE_MAX = 51

export function truncateAtWord(text: string, max: number): string {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  const cut = clean.slice(0, max - 1)
  const lastSpace = cut.lastIndexOf(' ')
  return `${(lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut).replace(/[\s,;:،؛.\-–—]+$/, '')}…`
}

export const toMetaDescription = (text: string) => truncateAtWord(stripHtml(text), META_DESCRIPTION_MAX)
export const toMetaTitle = (text: string) => truncateAtWord(stripHtml(text), META_TITLE_MAX)
