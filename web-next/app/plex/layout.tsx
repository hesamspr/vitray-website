import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'پلکس (Plex)'
const description =
  'با پلکس در کوتاه‌ترین زمان اپلیکیشن‌های سازمانی، گردش‌کارهای هوشمند و راهکارهای سفارشی بسازید — بدون نیاز به تیم توسعه یا پیچیدگی‌های فنی.'

const titleEn = 'Plex'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/plex' })
}

export default function PlexLayout({ children }: { children: React.ReactNode }) {
  return children
}
