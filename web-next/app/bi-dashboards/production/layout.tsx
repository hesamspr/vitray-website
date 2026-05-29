import type { Metadata } from 'next'

const title = 'داشبورد تولید'
const description =
  'از عملکرد ماشین‌آلات و نرخ ضایعات تا توقفات برنامه‌ریزی‌نشده — داشبورد تولید ویترای داده‌های لحظه‌ای از خط تولید را در اختیار مدیران می‌گذارد.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/bi-dashboards/production' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/bi-dashboards/production' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
