import type { Metadata } from 'next'
import { BlogListing } from '@/components/blog/BlogListing'

export const metadata: Metadata = {
  title: 'بلاگ هوش تجاری و تحلیل داده',
  description: 'مقالات تخصصی ویترای درباره هوش تجاری، مهندسی داده، Power BI و تحلیل داده؛ راهنماها، مطالعات موردی و نکات اجرایی برای مدیران و تحلیلگران.',
  openGraph: {
    title: 'بلاگ هوش تجاری و تحلیل داده | ویترای',
    description: 'مقالات تخصصی درباره هوش تجاری، مهندسی داده و تحلیل — از تیم ویترای.',
    url: 'https://vitrayco.com/blog',
    type: 'website',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  return <BlogListing page={1} />
}
