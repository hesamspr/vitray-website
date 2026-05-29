import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد منابع انسانی'
const description =
  'از حضور و غیاب و اضافه‌کاری تا توسعه مهارت و عملکرد — داشبورد منابع انسانی ویترای به شما کمک می‌کند الگوهای پنهان در داده‌های HR را ببینید و چابک‌تر تصمیم بگیرید.'

const titleEn = 'HR Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/hr' })
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
