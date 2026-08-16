import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getPost, getFeaturedImage, getPostCategories, formatDate, decodeHtmlEntities, stripHtml, stripLeadingDuplicateImage } from '@/lib/wordpress'
import { BlogNavBar } from '@/components/ui/blog-navbar'
import { BlogPostShell } from '@/components/blog/BlogPostShell'
import { CallToAction } from '@/components/ui/cta-3'
import { Footer } from '@/components/ui/footer-section'
import { getLang } from '@/lib/i18n.server'
import { CalendarDays, Clock, ArrowLeft, Tag } from 'lucide-react'

type Props = {
  params: Promise<{ slug: string }>
}

// FAQPage schema for specific high-value posts where GSC shows real query
// clusters (esp. casual/loanword phrasings like "kpi چیست") sitting just
// below page 1 despite the article already covering the topic in prose —
// this gives crawlers and AI answer engines a direct, structured match.
const BLOG_FAQ_OVERRIDES: Record<string, Array<{ q: string; a: string }>> = {
  'what-is-kpi': [
    {
      q: 'KPI چیست؟',
      a: 'KPI (شاخص کلیدی عملکرد) یک مقدار قابل اندازه‌گیری است که نشان می‌دهد یک سازمان چقدر مؤثر به اهداف کسب‌وکاری خود دست پیدا کرده است. سازمان‌ها از KPI برای ارزیابی موفقیت در دستیابی به اهداف کوتاه‌مدت و بلندمدت استفاده می‌کنند.',
    },
    {
      q: 'KPI مخفف چه عبارتی است؟',
      a: 'KPI مخفف عبارت انگلیسی Key Performance Indicator است که در فارسی به «شاخص کلیدی عملکرد» ترجمه می‌شود.',
    },
    {
      q: 'KPI با مثال چیست؟',
      a: 'برای مثال، «نرخ تبدیل سرنخ به مشتری» یک KPI رایج در تیم فروش است: اگر از هر ۱۰۰ سرنخ، ۱۵ مورد به مشتری تبدیل شوند، نرخ تبدیل ۱۵٪ است. این عدد به‌صورت مستمر پایش می‌شود تا عملکرد تیم فروش نسبت به هدف تعیین‌شده سنجیده شود.',
    },
  ],
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}

  const yoast = post.yoast_head_json
  const image = getFeaturedImage(post) ?? yoast?.og_image?.[0]
  const title = decodeHtmlEntities(post.title.rendered)
  const description = yoast?.og_description || stripHtml(post.excerpt.rendered)

  return {
    title: yoast?.title || title,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: yoast?.og_title || title,
      description,
      url: `https://vitrayco.com/blog/${slug}`,
      type: 'article',
      publishedTime: yoast?.article_published_time ?? post.date,
      modifiedTime: yoast?.article_modified_time ?? post.modified,
      ...(image && {
        images: [{ url: typeof image === 'object' && 'src' in image ? image.src : image.url }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: yoast?.og_title || title,
      description,
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
  // Blog content is Persian-only — there is nothing to show English readers.
  const lang = await getLang()
  if (lang === 'en') notFound()

  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  const image = getFeaturedImage(post)
  const categories = getPostCategories(post)
  const readTime = estimateReadTime(post.content.rendered)
  const title = decodeHtmlEntities(post.title.rendered)
  const content = image ? stripLeadingDuplicateImage(post.content.rendered, image.src) : post.content.rendered

  // JSON-LD structured data (Article schema)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    datePublished: post.date,
    dateModified: post.modified,
    url: `https://vitrayco.com/blog/${post.slug}`,
    inLanguage: 'fa',
    ...(image && { image: { '@type': 'ImageObject', url: image.src } }),
    author: {
      '@type': 'Organization',
      name: 'ویترای',
      url: 'https://vitrayco.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ویترای',
      alternateName: 'Vitray',
      url: 'https://vitrayco.com',
      logo: { '@type': 'ImageObject', url: 'https://vitrayco.com/Vitray.png' },
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
        { '@type': 'ListItem', position: 2, name: 'بلاگ', item: 'https://vitrayco.com/blog' },
        { '@type': 'ListItem', position: 3, name: title, item: `https://vitrayco.com/blog/${post.slug}` },
      ],
    },
  }

  const faqEntries = BLOG_FAQ_OVERRIDES[slug]
  const faqJsonLd = faqEntries && {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <BlogPostShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

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
          dangerouslySetInnerHTML={{ __html: content }}
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
