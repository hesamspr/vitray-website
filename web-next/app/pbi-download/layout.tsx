import type { Metadata } from 'next'
import { routeMetadata } from '@/lib/i18n.server'

const title = 'دانلود Power BI و نرم‌افزارهای هوش تجاری'
const description =
  'دانلود مستقیم Power BI و Power BI Report Server نسخه May 2026، به همراه Visual Studio، SQL Server 2022، SSMS، SSAS و SSIS برای پیاده‌سازی هوش تجاری سازمانی با ابزارهای مایکروسافت.'

const titleEn = 'Power BI & BI Software Downloads'

export function generateMetadata(): Promise<Metadata> {
  return routeMetadata({ fa: title, en: titleEn, description, canonical: '/pbi-download' })
}

export default function PbiDownloadLayout({ children }: { children: React.ReactNode }) {
  return children
}
