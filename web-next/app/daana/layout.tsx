import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'دانا — فضای کاری هوش مصنوعی سازمانی'
const description =
  'دانا، محصولی از ویترای، فضای کاری هوش مصنوعی برای سازمان‌هاست: پاسخ مستند به منبع از جلسه‌ها، یادداشت‌ها، فایل‌ها و مدل‌های دادهٔ SSAS، مدیریت جلسه‌ها و دستیارهای زمان‌بندی‌شده با تأیید کاربر.'

const titleEn = 'Daana — Enterprise AI Workspace'

// Pre-launch: reachable at /daana but kept out of search results, nav and sitemap
// until the public launch is confirmed. Remove `robots` and add the sitemap entry at launch.
export async function generateMetadata(): Promise<Metadata> {
  const meta = await routeMetadata({ fa: title, en: titleEn, description, canonical: '/daana' })
  return { ...meta, robots: { index: false, follow: false } }
}

const faq = [
  {
    q: 'دانا چیست؟',
    a: 'دانا فضای کاری هوش مصنوعی برای سازمان‌هاست. دستیار دانا جلسه‌ها، یادداشت‌ها، فایل‌ها و داده‌های سازمان را جست‌وجو می‌کند و منبع هر بخش از پاسخ را مشخص می‌کند.',
  },
  {
    q: 'دانا از چه مدل‌های هوش مصنوعی استفاده می‌کند؟',
    a: 'دانا از چند مدل هوش مصنوعی پشتیبانی می‌کند. مدیر سامانه تعیین می‌کند کدام مدل‌ها در دسترس باشند و کدام‌یک مجاز به پردازش داده‌های حساس باشد.',
  },
  {
    q: 'آیا دانا به پایگاه‌های داده دسترسی مستقیم دارد؟',
    a: 'خیر. هر پرسش از طریق دروازهٔ درون‌سازمانی و با هویت همان کاربر اجرا می‌شود، دسترسی صرفاً خواندنی است و فقط نتیجه بازگردانده می‌شود.',
  },
  {
    q: 'آیا می‌توان از دانش دانا در Claude یا ChatGPT استفاده کرد؟',
    a: 'بله. از طریق سرور MCP دانا، جلسه‌ها، یادداشت‌ها، فایل‌ها و گراف دانش سازمان در Claude، ChatGPT، Hermes و OpenClaw در دسترس است؛ با همان سطح دسترسی هر کاربر.',
  },
]

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
      mainEntity: faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
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
