import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد فروش پخش'
const description =
  'صنعت پخش چالش‌های خاص خود را دارد — از پوشش مشتری و عملکرد نماینده تا برگشتی‌های کالا. داشبورد فروش پخش ویترای این چالش‌ها را با داده‌های لحظه‌ای حل می‌کند.'

const titleEn = 'Distribution Sales Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/distribution-sales' })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
