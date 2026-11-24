import { Home, Info, Mail, Package, BookOpen, LayoutDashboard, Building2, Trophy, Download } from 'lucide-react'
import type { Lang } from '@/lib/i18n'
import { DaanaMark } from '@/components/ui/daana-mark'

const BiNavIcon = ({ className }: { className?: string }) => (
  <img src="/fav.png" alt="BI" className={className} />
)
const PlexNavIcon = ({ className }: { className?: string }) => (
  <img src="/product%20logos/plex%20fav%20white.png" alt="Plex" className={className} />
)
// Pixel is hidden for now; kept for when it returns.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const PixelNavIcon = ({ className }: { className?: string }) => (
  <img src="/product%20logos/Pixel%20Fav%20W.png" alt="Pixel" className={className} />
)
const PulseNavIcon = ({ className }: { className?: string }) => (
  <img src="/product%20logos/Pulse%20Fav%20W.png" alt="Pulse" className={className} />
)
const DaanaNavIcon = ({ className }: { className?: string }) => <DaanaMark className={className} />

export function getNavItems(t: (key: string) => string, lang?: Lang) {
  // Blog is Persian-only content — omit it for the English UI.
  const includeBlog = lang !== 'en'

  return [
    { name: t('nav.home'), url: '/', icon: Home },
    {
      name: t('nav.solutions'),
      url: '/#products',
      icon: Package,
      matchPrefixes: ['/bi-dashboards', '/bi-solution', '/plex', '/pulse', '/daana' /*, '/pixel'*/],
      subItems: [
        { name: t('nav.bi'), url: '/bi-solution', icon: BiNavIcon },
        { name: t('nav.plex'), url: '/plex', icon: PlexNavIcon },
        { name: t('nav.pulse'), url: '/pulse', icon: PulseNavIcon },
        { name: t('nav.daana'), url: '/daana', icon: DaanaNavIcon },
        // Pixel is hidden for now; restore to list it again.
        // { name: t('nav.pixel'), url: '/pixel', icon: PixelNavIcon },
      ],
    },
    {
      name: t('nav.company'),
      url: '/about',
      icon: Building2,
      matchPrefixes: includeBlog
        ? ['/about', '/success-stories', '/blog', '/pbi-download']
        : ['/about', '/success-stories', '/pbi-download'],
      subItems: [
        { name: t('nav.about'), url: '/about', icon: Info },
        { name: t('nav.stories'), url: '/success-stories', icon: Trophy },
        ...(includeBlog ? [{ name: t('nav.blog'), url: '/blog', icon: BookOpen }] : []),
        { name: t('nav.downloads'), url: '/pbi-download', icon: Download },
      ],
    },
    { name: t('nav.contact'), url: '/contact', icon: Mail },
    { name: t('nav.portal'), url: 'https://support.vitrayco.com', icon: LayoutDashboard, highlight: true },
  ]
}
