import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد انبار'
const description =
  'از روزهای ماندگاری موجودی و گردش کالا تا سرمایه گیرافتاده و کالاهای راکد — داشبورد انبار ویترای به شما کمک می‌کند سرمایه در گردش را آزاد کنید و فرصت‌های فروش را از دست ندهید.'

const titleEn = 'Warehouse Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/warehouse' })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
