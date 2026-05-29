import type { Metadata } from 'next'

const title = 'پلکس (Plex)'
const description =
  'با پلکس در کوتاه‌ترین زمان اپلیکیشن‌های سازمانی، گردش‌کارهای هوشمند و راهکارهای سفارشی بسازید — بدون نیاز به تیم توسعه یا پیچیدگی‌های فنی.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/plex' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/plex' },
}

export default function PlexLayout({ children }: { children: React.ReactNode }) {
  return children
}
