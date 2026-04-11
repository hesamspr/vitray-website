'use client'

import { useTranslation } from '@/hooks/useTranslation'

export function BlogPageHeader() {
  const { t } = useTranslation()
  return (
    <div className="flex flex-col items-center text-center space-y-4 mb-16">
      <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
        {t('blog.badge')}
      </div>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tighter">
        {t('blog.title')}
      </h1>
      <p className="text-muted-foreground text-sm md:text-base max-w-xl leading-relaxed">
        {t('blog.subtitle')}
      </p>
    </div>
  )
}
