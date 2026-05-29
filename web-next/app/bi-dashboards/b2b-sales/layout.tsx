import type { Metadata } from 'next'

const title = 'داشبورد فروش B2B'
const description =
  'داشبورد فروش B2B ویترای اطلاعات لحظه‌ای از خط فروش، عملکرد کارشناسان و رفتار مشتریان سازمانی را در اختیار شما می‌گذارد تا تصمیم‌های فروش را با اطمینان بگیرید.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/bi-dashboards/b2b-sales' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/bi-dashboards/b2b-sales' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
