import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'معرفی‌نامه و منابع ویترای'
const description =
  'فایل‌های رسمی معرفی شرکت ویترای، نقشه‌راه پیاده‌سازی هوش تجاری، و منابع آموزشی و فنی برای آشنایی با راهکارهای BI ویترای.'

const titleEn = 'Vitray Company Profile & Resources'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/pr' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  url: 'https://vitrayco.com/pr',
  description,
  publisher: {
    '@type': 'Organization',
    name: 'ویترای',
    url: 'https://vitrayco.com',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
      { '@type': 'ListItem', position: 2, name: 'معرفی‌نامه', item: 'https://vitrayco.com/pr' },
    ],
  },
}

export default function PrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
