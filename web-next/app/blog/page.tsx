import { Suspense } from 'react'
import type { Metadata } from 'next'
import { BlogNavBar } from '@/components/ui/blog-navbar'
import { BlogPostShell } from '@/components/blog/BlogPostShell'
import { BlogPageHeader } from '@/components/blog/BlogPageHeader'
import { PostsGrid } from '@/components/blog/PostsGrid'
import { PostsSkeleton } from '@/components/blog/PostsSkeleton'
import { Footer } from '@/components/ui/footer-section'

export const metadata: Metadata = {
  title: 'بلاگ',
  description: 'مقالات تخصصی درباره هوش تجاری، مهندسی داده، Power BI و تحلیل داده — از تیم ویترای.',
  openGraph: {
    title: 'بلاگ ویترای',
    description: 'مقالات تخصصی درباره هوش تجاری، مهندسی داده و تحلیل — از تیم ویترای.',
    url: 'https://vitrayco.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
}

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

export default function BlogPage() {
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
          <PostsGrid />
        </Suspense>
      </main>
      <Footer />
    </BlogPostShell>
  )
}
