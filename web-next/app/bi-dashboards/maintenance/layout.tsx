import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد نگهداری و تعمیرات'
const description =
  'از تاریخچه خرابی‌ها و چرخه نگهداری پیشگیرانه تا هزینه تعمیرات و سلامت تجهیزات — داشبورد نت ویترای شما را از واکنش به خرابی به مدیریت پیش‌بینانه می‌رساند.'

const titleEn = 'Maintenance Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/maintenance' })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
