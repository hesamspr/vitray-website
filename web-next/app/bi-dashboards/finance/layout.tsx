import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد مالی'
const description =
  'از روند درآمد و کنترل هزینه تا نقدینگی و چک‌های آتی — داشبورد مالی ویترای تصویری بدون نقطه‌کور از سلامت مالی سازمان به شما می‌دهد.'

const titleEn = 'Finance Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/finance' })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
