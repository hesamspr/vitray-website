import type { Metadata } from 'next'

const title = 'پیکسل (Pixel)'
const description =
  'پیکسل یک سرویس هوش تجاری کاملاً ابری برای کسب‌وکارهای کوچک و متوسط است — بدون سرور، بدون تیم IT، آماده در چند ساعت.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/pixel' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/pixel' },
}

export default function PixelLayout({ children }: { children: React.ReactNode }) {
  return children
}
