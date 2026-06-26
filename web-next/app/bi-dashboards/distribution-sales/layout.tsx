import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد فروش پخش و توزیع با Power BI — ویترای'
const description =
  'داشبورد BI فروش پخش ویترای: پوشش مشتری روزانه، عملکرد نمایندگان به تفکیک منطقه، نرخ برگشتی کالا، مانده مطالبات، و سهم بازار. بیش از ۱۵۰ شاخص اختصاصی صنعت پخش و توزیع.'

const titleEn = 'Distribution Sales BI Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/distribution-sales' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
        { '@type': 'ListItem', position: 2, name: 'راهکار هوش تجاری', item: 'https://vitrayco.com/bi-solution' },
        { '@type': 'ListItem', position: 3, name: title, item: 'https://vitrayco.com/bi-dashboards/distribution-sales' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'داشبورد فروش پخش چه کاربردی دارد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد فروش پخش ویترای شاخص‌های اختصاصی صنعت پخش و توزیع را پایش می‌کند؛ از جمله پوشش مشتری، عملکرد نمایندگان فروش، برگشتی‌های کالا، مانده مطالبات، و سهم بازار در هر منطقه.',
          },
        },
        {
          '@type': 'Question',
          name: 'داشبورد پخش با کدام سیستم‌ها یکپارچه می‌شود؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد فروش پخش ویترای با سیستم‌های ERP، نرم‌افزارهای پخش و توزیع، و پایگاه داده‌های فروش میدانی یکپارچه می‌شود.',
          },
        },
        {
          '@type': 'Question',
          name: 'هوش تجاری چه کمکی به شرکت‌های پخش می‌کند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'هوش تجاری در صنعت پخش کمک می‌کند مسیرهای فروش بهینه شوند، ریزش مشتریان زودتر شناسایی شود، عملکرد نمایندگان به‌صورت عادلانه ارزیابی شود، و تصمیم‌های قیمت‌گذاری و تخفیف داده‌محور باشند.',
          },
        },
      ],
    },
  ],
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
