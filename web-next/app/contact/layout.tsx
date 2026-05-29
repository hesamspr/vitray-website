import type { Metadata } from 'next'

const title = 'تماس با ما'
const description =
  'برای دریافت مشاوره رایگان یا هر سوالی درباره محصولات و راهکارهای هوش تجاری ویترای، با ما در ارتباط باشید.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/contact' },
  openGraph: { title: `${title} | ویترای`, description, url: 'https://vitrayco.com/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
