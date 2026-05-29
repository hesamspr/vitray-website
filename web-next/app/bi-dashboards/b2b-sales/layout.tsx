import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد فروش B2B'
const description =
  'داشبورد فروش B2B ویترای اطلاعات لحظه‌ای از خط فروش، عملکرد کارشناسان و رفتار مشتریان سازمانی را در اختیار شما می‌گذارد تا تصمیم‌های فروش را با اطمینان بگیرید.'

const titleEn = 'B2B Sales Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/b2b-sales' })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
