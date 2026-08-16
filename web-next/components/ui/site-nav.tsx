'use client'

import { NavBar } from '@/components/ui/tubelight-navbar'
import { getNavItems } from '@/lib/navItems'
import { useTranslation } from '@/hooks/useTranslation'

export function SiteNav({ variant }: { variant?: 'home' }) {
  const { t, lang } = useTranslation()
  let items = getNavItems(t, lang)

  if (variant === 'home') {
    items = items.map((item) => {
      if (item.url === '/') return { ...item, url: '#home' }
      if (item.url === '/#products') return { ...item, url: '#products' }
      return item
    })
  }

  return <NavBar items={items} />
}
