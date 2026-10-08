import type { Metadata } from 'next'
import { notFound, permanentRedirect } from 'next/navigation'
import { BlogListing } from '@/components/blog/BlogListing'

type Props = {
  params: Promise<{ page: string }>
}

function parsePage(raw: string): number | null {
  return /^\d+$/.test(raw) ? Number(raw) : null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = parsePage((await params).page)
  if (!page || page < 2) return {}
  const label = page.toLocaleString('fa-IR')

  return {
    title: `بلاگ هوش تجاری و تحلیل داده — صفحه ${label}`,
    description: `صفحه ${label} مقالات تخصصی ویترای درباره هوش تجاری، مهندسی داده، Power BI و تحلیل داده؛ راهنماها، مطالعات موردی و نکات اجرایی.`,
    alternates: {
      canonical: `/blog/page/${page}`,
    },
  }
}

export default async function BlogPaginatedPage({ params }: Props) {
  const page = parsePage((await params).page)
  if (!page) notFound()
  if (page === 1) permanentRedirect('/blog')

  return <BlogListing page={page} />
}
