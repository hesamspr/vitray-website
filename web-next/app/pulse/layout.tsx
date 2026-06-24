import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'پالس (Pulse)'
const description =
  'پالس پرتال سازمانی فارسی‌محور برای Power BI Report Server است — احراز هویت سازمانی با MFA، مدیریت Active Directory، اعمال امنیت SSAS، و کاوش خودسرویس داده. نصب کاملاً محلی، بدون وابستگی به ابر.'

const titleEn = 'Pulse'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/pulse' })
}

export default function PulseLayout({ children }: { children: React.ReactNode }) {
  return children
}
