import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'راهکار هوش تجاری'
const description =
  'از شناسایی نیاز تا داشبوردهای عملیاتی، تیم ویترای در تمام مراحل پیاده‌سازی BI کنارتان می‌ماند تا داده‌هایتان به بینش‌های واقعی تبدیل شوند.'

const titleEn = 'BI Solution'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-solution' })
}

export default function BiSolutionLayout({ children }: { children: React.ReactNode }) {
  return children
}
