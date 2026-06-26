import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'پالس — پرتال فارسی Power BI Report Server'
const description =
  'پالس رابط کاربری فارسی برای Power BI Report Server است — نصب On-Premise، احراز هویت Active Directory با MFA، مدیریت SSAS Row-Level Security، کاوش خودسرویس داده با pivot table و صدور Excel، و لاگ کامل فعالیت کاربران.'

const titleEn = 'Pulse — Persian Portal for Power BI Report Server'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/pulse' })
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'پالس',
      alternateName: 'Pulse',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Windows Server',
      url: 'https://vitrayco.com/pulse',
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
          name: 'پالس چیست؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'پالس یک پرتال سازمانی فارسی‌محور برای Power BI Report Server است که مدیریت گزارش‌ها، احراز هویت Active Directory با MFA، کنترل دسترسی دقیق، و کاوش خودسرویس داده را در یک محیط کاملاً محلی (On-Premise) فراهم می‌کند.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا پالس به سرویس‌های ابری متصل است؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'خیر. پالس کاملاً محلی (On-Premise) نصب می‌شود و هیچ وابستگی به سرویس‌های ابری ندارد. تمام داده‌ها در زیرساخت خود سازمان باقی می‌مانند.',
          },
        },
        {
          '@type': 'Question',
          name: 'پالس از چه روش احراز هویتی پشتیبانی می‌کند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'پالس از احراز هویت Active Directory سازمانی با پشتیبانی از MFA (احراز هویت چندعاملی) پشتیبانی می‌کند و مدیریت کاربران از طریق گروه‌های AD انجام می‌شود.',
          },
        },
        {
          '@type': 'Question',
          name: 'آیا پالس از SSAS پشتیبانی می‌کند؟',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'بله. پالس از اعمال امنیت SSAS (SQL Server Analysis Services) پشتیبانی کامل دارد و کنترل دسترسی در سطح داده را برای هر کاربر یا گروه فراهم می‌کند.',
          },
        },
      ],
    },
  ],
}

export default function PulseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
