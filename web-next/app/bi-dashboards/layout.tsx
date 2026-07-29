import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'نمونه داشبوردهای مدیریتی با Power BI — ویترای'
const description =
  'هفت نمونه داشبورد مدیریتی آماده ویترای: فروش B2B، فروش پخش و توزیع، مالی، منابع انسانی، تولید، انبار و نگهداری. هرکدام با KPIهای اختصاصی صنعت، یکپارچه با ERP و CRM سازمان شما.'

const titleEn = 'Vitray Management Dashboard Examples'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
        { '@type': 'ListItem', position: 2, name: 'راهکار هوش تجاری', item: 'https://vitrayco.com/bi-solution' },
        { '@type': 'ListItem', position: 3, name: 'نمونه داشبوردها', item: 'https://vitrayco.com/bi-dashboards' },
      ],
    },
    {
      '@type': 'CollectionPage',
      name: title,
      description,
      url: 'https://vitrayco.com/bi-dashboards',
      hasPart: [
        { '@type': 'WebPage', name: 'داشبورد فروش B2B', url: 'https://vitrayco.com/bi-dashboards/b2b-sales' },
        { '@type': 'WebPage', name: 'داشبورد فروش پخش و توزیع', url: 'https://vitrayco.com/bi-dashboards/distribution-sales' },
        { '@type': 'WebPage', name: 'داشبورد مالی', url: 'https://vitrayco.com/bi-dashboards/finance' },
        { '@type': 'WebPage', name: 'داشبورد منابع انسانی', url: 'https://vitrayco.com/bi-dashboards/hr' },
        { '@type': 'WebPage', name: 'داشبورد تولید', url: 'https://vitrayco.com/bi-dashboards/production' },
        { '@type': 'WebPage', name: 'داشبورد انبار و موجودی', url: 'https://vitrayco.com/bi-dashboards/warehouse' },
        { '@type': 'WebPage', name: 'داشبورد نگهداری و تعمیرات', url: 'https://vitrayco.com/bi-dashboards/maintenance' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'داشبورد مدیریتی چیست؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد مدیریتی یک صفحه نمایش تعاملی است که شاخص‌های کلیدی عملکرد (KPI) یک واحد سازمانی را به‌صورت تصویری و لحظه‌ای نشان می‌دهد و به مدیران کمک می‌کند سریع‌تر تصمیم بگیرند.',
          },
        },
        {
          '@type': 'Question',
          name: 'کدام داشبوردهای مدیریتی توسط ویترای پیاده‌سازی می‌شوند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'ویترای داشبوردهای اختصاصی برای فروش B2B، فروش پخش و توزیع، مالی، منابع انسانی، تولید، انبار و موجودی، و نگهداری و تعمیرات (نت) پیاده‌سازی می‌کند — هرکدام با KPIهای متناسب با آن حوزه.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا این داشبوردها با سیستم‌های ERP و CRM موجود یکپارچه می‌شوند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بله. تمام داشبوردهای ویترای با ERP، CRM و سایر منابع داده سازمانی — از جمله سیستم‌های ایرانی — یکپارچه می‌شوند و نیازی به جایگزینی سیستم‌های فعلی نیست.',
          },
        },
      ],
    },
  ],
}

export default function BiDashboardsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
