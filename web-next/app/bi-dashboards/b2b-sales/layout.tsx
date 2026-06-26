import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد فروش B2B با Power BI — ویترای'
const description =
  'داشبورد هوش تجاری فروش B2B ویترای: پایش لحظه‌ای pipeline فروش، عملکرد کارشناسان، نرخ تبدیل، ارزش چرخه فروش و رفتار مشتریان کلیدی. یکپارچه با ERP و CRM، قابل سفارشی‌سازی برای هر مدل فروش سازمانی.'

const titleEn = 'B2B Sales BI Dashboard'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/b2b-sales' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
        { '@type': 'ListItem', position: 2, name: 'راهکار هوش تجاری', item: 'https://vitrayco.com/bi-solution' },
        { '@type': 'ListItem', position: 3, name: title, item: 'https://vitrayco.com/bi-dashboards/b2b-sales' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'داشبورد فروش B2B چیست؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد فروش B2B ویترای یک ابزار هوش تجاری است که عملکرد تیم فروش سازمانی، خط فروش (pipeline)، رفتار مشتریان کلیدی، و شاخص‌های فروش را به‌صورت لحظه‌ای نمایش می‌دهد.',
          },
        },
        {
          '@type': 'Question',
          name: 'داشبورد فروش سازمانی چه KPIهایی دارد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'KPIهای کلیدی شامل درصد تحقق هدف فروش، نرخ تبدیل سرنخ، میانگین ارزش معامله، طول چرخه فروش، عملکرد هر کارشناس، و رتبه‌بندی مشتریان بر اساس سودآوری است.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا داشبورد B2B با CRM یکپارچه می‌شود؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بله. داشبورد فروش B2B ویترای با سیستم‌های CRM و ERP یکپارچه می‌شود و داده‌های فروش را مستقیم از منبع دریافت می‌کند تا گزارش‌دهی دستی حذف شود.',
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
