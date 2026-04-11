import type { Metadata } from 'next'
import { getPosts } from '@/lib/wordpress'
import { BlogListClient } from '@/components/blog/BlogListClient'

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

export default async function BlogPage() {
  const { posts } = await getPosts(1, 12)
  return <BlogListClient posts={posts} />
}
