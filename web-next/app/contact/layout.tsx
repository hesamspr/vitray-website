import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'تماس با ویترای'
const description =
  'برای مشاوره رایگان درباره هوش تجاری، داشبوردهای مدیریتی یا محصولات ویترای تماس بگیرید. تلفن: ۰۲۱-۲۲۸۶۵۶۱۹ — ایمیل: hello@vitrayco.com — تهران، پاسداران.'

const titleEn = 'Contact Vitray'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/contact' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      name: 'تماس با ویترای',
      url: 'https://vitrayco.com/contact',
      description,
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://vitrayco.com/#localbusiness',
      name: 'ویترای',
      alternateName: 'Vitray',
      url: 'https://vitrayco.com',
      logo: 'https://vitrayco.com/Vitray.png',
      image: 'https://vitrayco.com/Vitray.png',
      description: 'ارائه‌دهنده راهکارهای هوش تجاری و داشبوردهای مدیریتی برای سازمان‌های ایرانی.',
      telephone: '+98-21-2286-5619',
      email: 'hello@vitrayco.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'واحد ۵، پلاک ۲۸، نگارستان ۴، پاسداران',
        addressLocality: 'تهران',
        addressCountry: 'IR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 35.7739,
        longitude: 51.4736,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'],
        opens: '09:00',
        closes: '18:00',
      },
      sameAs: [
        'https://www.linkedin.com/company/vitrayco',
        'https://www.instagram.com/vitrayco',
      ],
      areaServed: {
        '@type': 'Country',
        name: 'Iran',
      },
      priceRange: '$$',
      knowsAbout: ['Business Intelligence', 'Power BI', 'هوش تجاری', 'داشبورد مدیریتی'],
    },
  ],
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
