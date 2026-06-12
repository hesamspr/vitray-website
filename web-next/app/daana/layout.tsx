import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'دانا (Daana)'
const description =
  'دانا فضای کاری جامع هوش مصنوعی سازمانی است — ایجنت‌های هوشمند متصل به دانش سازمان، گفتگو با داده‌ها، جلسات هوشمند و گراف دانش؛ کاملاً فارسی، راست‌به‌چپ و با تقویم شمسی.'

const titleEn = 'Daana'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/daana' })
}

export default function DaanaLayout({ children }: { children: React.ReactNode }) {
  return children
}
