import type { Metadata } from 'next'

const title = 'داشبورد نگهداری و تعمیرات'
const description =
  'از تاریخچه خرابی‌ها و چرخه نگهداری پیشگیرانه تا هزینه تعمیرات و سلامت تجهیزات — داشبورد نت ویترای شما را از واکنش به خرابی به مدیریت پیش‌بینانه می‌رساند.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/bi-dashboards/maintenance' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/bi-dashboards/maintenance' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
