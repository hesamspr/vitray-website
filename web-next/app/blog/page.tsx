import { Suspense } from 'react'
import type { Metadata } from 'next'
import { BlogNavBar } from '@/components/ui/blog-navbar'
import { BlogPostShell } from '@/components/blog/BlogPostShell'
import { BlogPageHeader } from '@/components/blog/BlogPageHeader'
import { PostsGrid } from '@/components/blog/PostsGrid'
import { PostsSkeleton } from '@/components/blog/PostsSkeleton'
import { Footer } from '@/components/ui/footer-section'

export const metadata: Metadata = {
  title: 'Blog | Polaris Insights',
  description: 'Insights and articles on Business Intelligence, Data Engineering, and Data Analysis from the Polaris Insights team.',
  openGraph: {
    title: 'Blog | Polaris Insights',
    description: 'Insights and articles on Business Intelligence, Data Engineering, and Data Analysis.',
    url: 'https://vitrayco.com/blog',
  },
  alternates: {
    canonical: 'https://vitrayco.com/blog',
  },
}

export default function BlogPage() {
  return (
    <BlogPostShell>
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
