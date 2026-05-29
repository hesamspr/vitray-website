import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'معرفی و منابع ویترای'
const description =
  'فایل‌های معرفی، نقشه‌راه پیاده‌سازی هوش تجاری و منابع رسمی شرکت ویترای.'

const titleEn = 'Introduction & Resources'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/pr' })
}

export default function PrLayout({ children }: { children: React.ReactNode }) {
  return children
}
