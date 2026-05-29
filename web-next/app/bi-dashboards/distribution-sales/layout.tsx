import type { Metadata } from 'next'

const title = 'داشبورد فروش پخش'
const description =
  'صنعت پخش چالش‌های خاص خود را دارد — از پوشش مشتری و عملکرد نماینده تا برگشتی‌های کالا. داشبورد فروش پخش ویترای این چالش‌ها را با داده‌های لحظه‌ای حل می‌کند.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/bi-dashboards/distribution-sales' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/bi-dashboards/distribution-sales' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
