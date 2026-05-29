import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد تولید'
const description =
  'از عملکرد ماشین‌آلات و نرخ ضایعات تا توقفات برنامه‌ریزی‌نشده — داشبورد تولید ویترای داده‌های لحظه‌ای از خط تولید را در اختیار مدیران می‌گذارد.'

const titleEn = 'Production Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/production' })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
