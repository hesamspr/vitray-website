'use client'

import { useTranslation } from '@/hooks/useTranslation'

export function BlogPostShell({ children }: { children: React.ReactNode }) {
  const { lang } = useTranslation()
  return (
    <div className="min-h-screen bg-background text-foreground" dir={lang === 'fa' ? 'rtl' : 'ltr'}>
      {children}
    </div>
  )
}
