import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'پالس (Pulse)'
const description =
  'پالس پورتالی متمرکز برای مدیریت و اشتراک‌گذاری گزارش‌های Power BI است — با رابط کاملاً فارسی، تقویم شمسی و کنترل دسترسی دقیق.'

const titleEn = 'Pulse'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/pulse' })
}

export default function PulseLayout({ children }: { children: React.ReactNode }) {
  return children
}
