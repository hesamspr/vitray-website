import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'داشبورد تولید با Power BI — ویترای'
const description =
  'داشبورد BI تولید ویترای: OEE (اثربخشی کلی تجهیزات)، نرخ ضایعات، تولید در برابر هدف، تحلیل توقفات برنامه‌ریزی‌نشده، و بهره‌وری اپراتور. یکپارچه با MES، ERP و SCADA.'

const titleEn = 'Production BI Dashboard (OEE + Power BI)'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/bi-dashboards/production' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
        { '@type': 'ListItem', position: 2, name: 'راهکار هوش تجاری', item: 'https://vitrayco.com/bi-solution' },
        { '@type': 'ListItem', position: 3, name: title, item: 'https://vitrayco.com/bi-dashboards/production' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'داشبورد تولید چه اطلاعاتی نشان می‌دهد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد تولید ویترای عملکرد ماشین‌آلات، نرخ ضایعات، OEE (اثربخشی کلی تجهیزات)، توقفات برنامه‌ریزی‌نشده، تولید در برابر هدف، و کیفیت خط تولید را به‌صورت لحظه‌ای نمایش می‌دهد.',
          },
        },
        {
          '@type': 'Question',
          name: 'OEE چیست و چرا در داشبورد تولید مهم است؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'OEE (Overall Equipment Effectiveness) معیار اثربخشی کلی تجهیزات است که در قالب حاصل‌ضرب دسترس‌پذیری، عملکرد و کیفیت محاسبه می‌شود. این شاخص استاندارد طلایی سنجش کارایی خط تولید است.',
          },
        },
        {
          '@type': 'Question',
          name: 'داشبورد هوش تجاری تولید با چه سیستم‌هایی یکپارچه می‌شود؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'داشبورد تولید ویترای با سیستم‌های MES، ERP، SCADA، و داده‌های خط تولید یکپارچه می‌شود تا تصویر کاملی از عملیات تولید ارائه دهد.',
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
