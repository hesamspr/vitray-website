import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'پیکسل (Pixel)'
const description =
  'پیکسل یک سرویس هوش تجاری کاملاً ابری برای کسب‌وکارهای کوچک و متوسط است — بدون سرور، بدون تیم IT، آماده در چند ساعت.'

const titleEn = 'Pixel'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/pixel' })
}

export default function PixelLayout({ children }: { children: React.ReactNode }) {
  return children
}
