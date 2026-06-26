import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'دانلود Power BI و نرم‌افزارهای هوش تجاری مایکروسافت'
const description =
  'دانلود مستقیم Power BI Desktop و Power BI Report Server نسخه May 2026، Visual Studio، SQL Server 2022، SSMS، SSAS Tabular و SSIS — همه ابزارهای موردنیاز برای پیاده‌سازی هوش تجاری سازمانی.'

const titleEn = 'Power BI & Microsoft BI Tools Download'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/pbi-download' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  url: 'https://vitrayco.com/pbi-download',
  description,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
      { '@type': 'ListItem', position: 2, name: 'دانلود Power BI', item: 'https://vitrayco.com/pbi-download' },
    ],
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'ابزارهای هوش تجاری مایکروسافت',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Power BI Desktop',
        item: {
          '@type': 'SoftwareApplication',
          name: 'Power BI Desktop',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Windows',
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Power BI Report Server',
        item: {
          '@type': 'SoftwareApplication',
          name: 'Power BI Report Server',
          applicationCategory: 'BusinessApplication',
          operatingSystem: 'Windows Server',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'SQL Server 2022',
        item: {
          '@type': 'SoftwareApplication',
          name: 'SQL Server 2022',
          applicationCategory: 'DeveloperApplication',
          operatingSystem: 'Windows',
        },
      },
    ],
  },
  publisher: {
    '@type': 'Organization',
    name: 'ویترای',
    url: 'https://vitrayco.com',
  },
}

export default function PbiDownloadLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
