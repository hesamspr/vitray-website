'use client'

import { NavBar } from '@/components/ui/tubelight-navbar'
import { useTranslation } from '@/hooks/useTranslation'
import { getNavItems } from '@/lib/navItems'

export function BlogNavBar() {
  const { t } = useTranslation()
  const navItems = getNavItems(t)
  return <NavBar items={navItems} />
}
