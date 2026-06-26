import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'دانا — فضای کاری هوش مصنوعی سازمانی'
const description =
  'دانا پلتفرم AI سازمانی فارسی‌محور ویترای است — ایجنت‌های هوشمند متصل به دانش سازمان، گفتگو با داده‌ها به زبان طبیعی، جلسات هوشمند با رونوشت و خلاصه خودکار، و گراف دانش زنده. Multi-tenant، RTL بومی، تقویم شمسی.'

const titleEn = 'Daana — Enterprise AI Workspace'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/daana' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'دانا',
      alternateName: 'Daana',
      applicationCategory: 'BusinessApplication',
      url: 'https://vitrayco.com/daana',
      description,
      offers: {
        '@type': 'Offer',
        seller: { '@type': 'Organization', name: 'ویترای', url: 'https://vitrayco.com' },
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'دانا چیست؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'دانا یک فضای کاری جامع هوش مصنوعی سازمانی است که ایجنت‌های هوشمند متصل به دانش سازمان، قابلیت گفتگو با داده‌ها، جلسات هوشمند و گراف دانش را در یک محیط کاملاً فارسی و راست‌به‌چپ ارائه می‌دهد.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا دانا از زبان فارسی پشتیبانی می‌کند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بله. دانا کاملاً فارسی و راست‌به‌چپ طراحی شده و با تقویم شمسی کار می‌کند. این محصول برای سازمان‌های ایرانی بومی‌سازی شده است.',
          },
        },
        {
          '@type': 'Question',
          name: 'دانا چه نوع ایجنت‌های هوش مصنوعی دارد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'دانا از ایجنت‌های هوشمند متصل به دانش سازمان پشتیبانی می‌کند که می‌توانند با اسناد، پایگاه داده، و منابع اطلاعاتی سازمان تعامل داشته باشند و پاسخ‌های دقیق و متناسب با زمینه کسب‌وکار ارائه دهند.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا دانا می‌تواند با داده‌های سازمانی موجود یکپارچه شود؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بله. دانا با منابع دانش و داده‌های سازمانی موجود یکپارچه می‌شود و ایجنت‌های آن می‌توانند مستقیماً از اطلاعات سازمان برای پاسخ‌دهی استفاده کنند.',
          },
        },
      ],
    },
  ],
}

export default function DaanaLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
