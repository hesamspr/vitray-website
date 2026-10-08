import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import { BlogNavBar } from '@/components/ui/blog-navbar'
import { BlogPostShell } from '@/components/blog/BlogPostShell'
import { BlogPageHeader } from '@/components/blog/BlogPageHeader'
import { PostsGrid } from '@/components/blog/PostsGrid'
import { PostsSkeleton } from '@/components/blog/PostsSkeleton'
import { BLOG_PAGE_SIZE } from '@/components/blog/Pagination'
import { Footer } from '@/components/ui/footer-section'
import { getLang } from '@/lib/i18n.server'
import { getPosts } from '@/lib/wordpress'

const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'بلاگ ویترای',
  url: 'https://vitrayco.com/blog',
  description: 'مقالات تخصصی درباره هوش تجاری، Power BI، SSAS و مهندسی داده — از تیم ویترای.',
  publisher: {
    '@type': 'Organization',
    name: 'ویترای',
    url: 'https://vitrayco.com',
    logo: 'https://vitrayco.com/Vitray.png',
  },
  inLanguage: 'fa',
}

export async function BlogListing({ page }: { page: number }) {
  // Blog content is Persian-only — there is nothing to show English readers.
  const lang = await getLang()
  if (lang === 'en') notFound()

  // Validated before streaming starts so an out-of-range page is a real 404.
  // The request is cached, so PostsGrid below reuses the same response.
  const { totalPages } = await getPosts(page, BLOG_PAGE_SIZE)
  if (page > Math.max(totalPages, 1)) notFound()

  return (
    <BlogPostShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <BlogNavBar />
      <main className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        <BlogPageHeader />
        <Suspense fallback={<PostsSkeleton />}>
          <PostsGrid page={page} />
        </Suspense>
      </main>
      <Footer />
    </BlogPostShell>
  )
}
