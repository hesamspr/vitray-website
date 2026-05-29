import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'درباره ما'
const description =
  'شرکت ویترای از سال ۱۳۹۸ به سازمان‌ها کمک می‌کند داده‌های خام را به بینش‌های عملی و قابل اجرا تبدیل کنند؛ تیمی از متخصصان فناوری و کسب‌وکار با راه‌حل‌های نوآورانه هوش تجاری.'

const titleEn = 'About Us'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/about' })
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
