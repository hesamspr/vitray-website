import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'منابع و زیرساخت موردنیاز نصب Plex'
const description =
  'منابع سخت‌افزاری و نرم‌افزاری موردنیاز برای نصب و راه‌اندازی پلتفرم Plex: مشخصات CPU، RAM و فضای ذخیره‌سازی، مقایسه Docker روی Windows و Ubuntu، و نرم‌افزارهای موردنیاز میزبانی Docker.'

const titleEn = 'Plex Server Requirements'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/plexserver' })
}

export default function PlexServerLayout({ children }: { children: React.ReactNode }) {
  return children
}
