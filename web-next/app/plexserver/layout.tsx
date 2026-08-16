import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'پیش‌نیازهای سخت‌افزاری و نرم‌افزاری نصب Plex'
const description =
  'راهنمای کامل نصب Plex: مشخصات CPU، RAM و فضای ذخیره‌سازی برای محیط‌های تست، کوچک و سازمانی — مقایسه Docker روی Windows و Ubuntu، و لیست نرم‌افزارهای موردنیاز شامل Node.js، PostgreSQL و Docker Compose.'

const titleEn = 'Plex Server & Infrastructure Requirements'

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await routeMetadata({ fa: title, en: titleEn, description, canonical: '/plexserver' })
  return { ...metadata, robots: { index: false, follow: false } }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TechArticle',
      headline: title,
      url: 'https://vitrayco.com/plexserver',
      description,
      author: { '@type': 'Organization', name: 'ویترای', url: 'https://vitrayco.com' },
      publisher: { '@type': 'Organization', name: 'ویترای', url: 'https://vitrayco.com' },
      about: {
        '@type': 'SoftwareApplication',
        name: 'Plex',
        applicationCategory: 'BusinessApplication',
        url: 'https://vitrayco.com/plex',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'خانه', item: 'https://vitrayco.com' },
        { '@type': 'ListItem', position: 2, name: 'پلکس', item: 'https://vitrayco.com/plex' },
        { '@type': 'ListItem', position: 3, name: 'پیش‌نیازهای سرور', item: 'https://vitrayco.com/plexserver' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Plex برای نصب به چه سخت‌افزاری نیاز دارد؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'برای محیط سازمانی: ۸+ هسته CPU، ۱۶+ گیگابایت RAM، و بیش از ۱۰۰ گیگابایت SSD. برای پروژه‌های کوچک‌تر، ۴ هسته و ۸ گیگابایت RAM کافی است.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا Plex روی Windows نصب می‌شود؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بله، Plex از طریق Docker روی هر دو Windows و Ubuntu نصب می‌شود. برای محیط‌های سازمانی و پروداکشن، Ubuntu انتخاب بهتری است چون عملکرد بومی Docker بالاتری دارد.',
          },
        },
        {
          '@type': 'Question',
          name: 'چه نرم‌افزارهایی برای نصب Plex لازم است؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Node.js نسخه ۱۸ یا بالاتر، Docker و Docker Compose، PostgreSQL نسخه ۱۴ یا بالاتر، و Git. تیم ویترای تمام این نصب‌ها را انجام می‌دهد.',
          },
        },
      ],
    },
  ],
}

export default function PlexServerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
