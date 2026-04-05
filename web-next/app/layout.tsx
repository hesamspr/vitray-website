import type { Metadata } from 'next'
import { LanguageProvider } from '@/context/LanguageContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'ویترای',
  description: 'راهکارهای هوش تجاری ویترای',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
