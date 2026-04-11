import { Home, Info, Mail, Package, BookOpen, LayoutDashboard } from 'lucide-react'

const BiNavIcon = ({ className }: { className?: string }) => (
  <img src="/fav.png" alt="BI" className={className} />
)
const PlexNavIcon = ({ className }: { className?: string }) => (
  <img src="/product%20logos/plex%20fav%20white.png" alt="Plex" className={className} />
)
const PixelNavIcon = ({ className }: { className?: string }) => (
  <img src="/product%20logos/Pixel%20Fav%20W.png" alt="Pixel" className={className} />
)
const PulseNavIcon = ({ className }: { className?: string }) => (
  <img src="/product%20logos/Pulse%20Fav%20W.png" alt="Pulse" className={className} />
)
const AcademyNavIcon = ({ className }: { className?: string }) => (
  <img src="/product%20logos/Academy%20FAV%20White.png" alt="Academy" className={className} />
)

export function getNavItems(t: (key: string) => string) {
  return [
    { name: t('nav.home'), url: '/', icon: Home },
    {
      name: t('nav.solutions'),
      url: '/#products',
      icon: Package,
      subItems: [
        { name: t('nav.bi'), url: '/bi-solution', icon: BiNavIcon },
        { name: t('nav.plex'), url: '/plex', icon: PlexNavIcon },
        { name: t('nav.pulse'), url: '/pulse', icon: PulseNavIcon },
        { name: t('nav.pixel'), url: '/pixel', icon: PixelNavIcon },
        { name: t('nav.academy'), url: 'https://academy.vitrayco.com', icon: AcademyNavIcon },
      ],
    },
    { name: t('nav.blog'), url: '/blog', icon: BookOpen },
    { name: t('nav.about'), url: '/about', icon: Info },
    { name: t('nav.contact'), url: '/contact', icon: Mail },
    { name: t('nav.portal'), url: 'https://support.vitrayco.com', icon: LayoutDashboard, highlight: true },
  ]
}
