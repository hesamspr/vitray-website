import { useEffect } from 'react'
import { useTranslation } from '@/hooks/useTranslation'

export function usePageTitle(pageKey?: string) {
  const { t, lang } = useTranslation()

  useEffect(() => {
    const siteName = t('page_titles.site_name')
    document.title = pageKey ? `${siteName} - ${t(pageKey)}` : siteName
    return () => {
      document.title = t('page_titles.site_name')
    }
  // lang is used as dependency instead of t — t is recreated each render but lang only changes on toggle
  }, [pageKey, lang]) // eslint-disable-line react-hooks/exhaustive-deps
}
