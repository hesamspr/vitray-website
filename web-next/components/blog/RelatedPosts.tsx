import Link from 'next/link'
import { formatDate, stripHtml, type WPPost } from '@/lib/wordpress'

// Contextual links to other posts — gives every article incoming internal links
// beyond the paginated /blog index.
export function RelatedPosts({ posts }: { posts: WPPost[] }) {
  if (posts.length === 0) return null

  return (
    <section aria-labelledby="related-posts" className="mt-16 pt-8 border-t border-border/40">
      <h2 id="related-posts" className="text-xl font-bold tracking-tight mb-6">
        مقالات مرتبط
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block h-full rounded-xl border border-border/60 bg-card p-4 hover:border-border transition-colors"
            >
              <span className="block text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
                {stripHtml(post.title.rendered)}
              </span>
              <time dateTime={post.date} className="mt-2 block text-xs text-muted-foreground">
                {formatDate(post.date)}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
