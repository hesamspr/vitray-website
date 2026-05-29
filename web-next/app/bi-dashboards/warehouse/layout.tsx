import type { Metadata } from 'next'

const title = 'داشبورد انبار'
const description =
  'از روزهای ماندگاری موجودی و گردش کالا تا سرمایه گیرافتاده و کالاهای راکد — داشبورد انبار ویترای به شما کمک می‌کند سرمایه در گردش را آزاد کنید و فرصت‌های فروش را از دست ندهید.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/bi-dashboards/warehouse' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/bi-dashboards/warehouse' },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
