import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داستان‌های موفقیت مشتریان ویترای'
const description =
  'نمونه‌های واقعی پیاده‌سازی هوش تجاری توسط ویترای در صنایع لبنیات، پوشاک، نوشیدنی، پخش و تولید — شامل چالش‌ها، راهکار و نتایج قابل اندازه‌گیری هر پروژه.'

const titleEn = 'Customer Success Stories'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/success-stories' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'داستان‌های موفقیت مشتریان ویترای',
  url: 'https://vitrayco.com/success-stories',
  description,
  publisher: {
    '@type': 'Organization',
    name: 'ویترای',
    url: 'https://vitrayco.com',
  },
  about: {
    '@type': 'Thing',
    name: 'Business Intelligence Implementation Case Studies',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
      { '@type': 'ListItem', position: 2, name: 'داستان‌های موفقیت', item: 'https://vitrayco.com/success-stories' },
    ],
  },
}

export default function SuccessStoriesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
