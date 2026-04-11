import Image from 'next/image'
import Link from 'next/link'
import { getPosts, getPostCategories, getFeaturedImage, stripHtml, formatDate } from '@/lib/wordpress'
import { CalendarDays, Tag } from 'lucide-react'

export async function PostsGrid() {
  const { posts } = await getPosts(1, 9)

  if (posts.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-12">No posts found.</p>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => {
        const image = getFeaturedImage(post)
        const categories = getPostCategories(post)
        const excerpt = stripHtml(post.excerpt.rendered).slice(0, 120) + '…'

        return (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-border/60 bg-card overflow-hidden hover:border-border transition-colors duration-200"
          >
            <div className="relative aspect-[16/9] bg-muted overflow-hidden">
              {image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-muted/50" />
              )}
            </div>

            <div className="flex flex-col flex-1 p-5 space-y-3">
              {categories.length > 0 && (
                <div className="flex items-center gap-1.5 flex-wrap">
                  <Tag className="w-3 h-3 text-muted-foreground shrink-0" />
                  {categories.map((cat) => (
                    <span
                      key={cat.id}
                      className="text-xs text-muted-foreground border border-border/40 px-2 py-0.5 rounded-full"
                    >
                      {cat.name}
                    </span>
                  ))}
                </div>
              )}

              <h2
                className="text-base font-semibold leading-snug tracking-tight group-hover:text-primary transition-colors"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />

              <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                {excerpt}
              </p>

              <div className="flex items-center gap-1.5 text-xs text-muted-foreground pt-1">
                <CalendarDays className="w-3 h-3" />
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
