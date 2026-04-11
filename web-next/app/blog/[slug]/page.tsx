import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPost, getFeaturedImage, getPostCategories, formatDate } from '@/lib/wordpress'
import { BlogNavBar } from '@/components/ui/blog-navbar'
import { BlogPostShell } from '@/components/blog/BlogPostShell'
import { CallToAction } from '@/components/ui/cta-3'
import { Footer } from '@/components/ui/footer-section'
import { CalendarDays, Clock, ArrowLeft, Tag } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  const yoast = post.yoast_head_json
  const image = getFeaturedImage(post) ?? yoast.og_image?.[0]

  return {
    title: yoast.title || post.title.rendered,
    description: yoast.og_description,
    alternates: {
      canonical: yoast.canonical ?? `https://vitrayco.com/blog/${slug}`,
    },
    openGraph: {
      title: yoast.og_title || post.title.rendered,
      description: yoast.og_description,
      url: yoast.og_url ?? `https://vitrayco.com/blog/${slug}`,
      type: 'article',
      publishedTime: yoast.article_published_time ?? post.date,
      modifiedTime: yoast.article_modified_time ?? post.modified,
      ...(image && {
        images: [{ url: typeof image === 'object' && 'src' in image ? image.src : image.url }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: yoast.og_title || post.title.rendered,
      description: yoast.og_description,
      ...(image && {
        images: [typeof image === 'object' && 'src' in image ? image.src : image.url],
      }),
    },
  }
}

function estimateReadTime(html: string): number {
  const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(words / 200))
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const image = getFeaturedImage(post)
  const categories = getPostCategories(post)
  const readTime = estimateReadTime(post.content.rendered)

  // JSON-LD structured data (Article schema)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title.rendered,
    datePublished: post.date,
    dateModified: post.modified,
    url: `https://vitrayco.com/blog/${post.slug}`,
    ...(image && { image: image.src }),
    publisher: {
      '@type': 'Organization',
      name: 'Polaris Insights',
      url: 'https://polarisinsights.tech',
    },
  }

  return (
    <BlogPostShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <BlogNavBar />

      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All posts
        </Link>

        {/* Categories */}
        {categories.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap mb-4">
            <Tag className="w-3.5 h-3.5 text-muted-foreground" />
            {categories.map((cat) => (
              <span
                key={cat.id}
                className="text-xs text-muted-foreground border border-border/40 px-2.5 py-0.5 rounded-full"
              >
                {cat.name}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-6"
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 flex-wrap">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="w-4 h-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {readTime} min read
          </span>
        </div>

        {/* Featured image */}
        {image && (
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-12 border border-border/40">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
              priority
            />
          </div>
        )}

        {/* Post content */}
        <article
          className="prose prose-invert prose-sm md:prose-base max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-img:rounded-xl prose-img:border prose-img:border-border/40
            prose-pre:bg-muted prose-pre:border prose-pre:border-border/40
            prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-border/40">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all posts
          </Link>
        </div>
      </main>

      <div className="mx-auto max-w-5xl px-6 py-20 overflow-visible">
        <CallToAction />
      </div>

      <Footer />
    </BlogPostShell>
  )
}
