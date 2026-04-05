'use client'

import type { ComponentProps, ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import Link from 'next/link'
import { Phone, MapPin, Mail } from 'lucide-react'

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)
const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
)
import { useTranslation } from '@/hooks/useTranslation'

const BiFooterIcon = ({ className }: { className?: string }) => <img src="/fav.png" alt="BI" className={className} />
const PlexFooterIcon = ({ className }: { className?: string }) => <img src="/product%20logos/plex%20fav%20white.png" alt="Plex" className={className} />
const PixelFooterIcon = ({ className }: { className?: string }) => <img src="/product%20logos/Pixel%20Fav%20W.png" alt="Pixel" className={className} />
const PulseFooterIcon = ({ className }: { className?: string }) => <img src="/product%20logos/Pulse%20Fav%20W.png" alt="Pulse" className={className} />
const AcademyFooterIcon = ({ className }: { className?: string }) => <img src="/product%20logos/Academy%20FAV%20White.png" alt="Academy" className={className} />

function AparatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.75 10.875l-5.5 3.25A1 1 0 018.75 15.25v-6.5a1 1 0 011.5-.875l5.5 3.25a1 1 0 010 1.75z"/>
    </svg>
  )
}

interface FooterLink { title: string; href: string; icon?: React.ComponentType<{ className?: string }> }
interface FooterSection { label: string; links: FooterLink[] }

function getFooterLinks(t: (k: string) => string): FooterSection[] {
  return [
    {
      label: t('footer.solutions'),
      links: [
        { title: t('footer.bi'), href: '/bi-solution', icon: BiFooterIcon },
        { title: t('footer.plex'), href: '/plex', icon: PlexFooterIcon },
        { title: t('footer.pulse'), href: '/pulse', icon: PulseFooterIcon },
        { title: t('footer.pixel'), href: '/pixel', icon: PixelFooterIcon },
        { title: t('footer.academy'), href: 'https://academy.vitrayco.com', icon: AcademyFooterIcon },
      ],
    },
    {
      label: t('footer.company'),
      links: [
        { title: t('footer.about'), href: '/about' },
        { title: t('footer.contact'), href: '/contact' },
      ],
    },
    {
      label: t('footer.resources'),
      links: [{ title: t('footer.blog'), href: '#blog' }],
    },
    {
      label: t('footer.social'),
      links: [
        { title: t('footer.linkedin'), href: 'https://www.linkedin.com/company/vitrayco/', icon: LinkedinIcon },
        { title: t('footer.instagram'), href: 'https://www.instagram.com/vitrayco/', icon: InstagramIcon },
        { title: t('footer.youtube'), href: 'https://www.youtube.com/@vitraycobi7311', icon: YoutubeIcon },
        { title: t('footer.aparat'), href: 'https://www.aparat.com/VitrayCo.ir', icon: AparatIcon },
      ],
    },
  ]
}

function BrandLogo() {
  return <img src="/Vitray.png" alt="Vitray" className="h-8 w-auto" />
}

export function Footer() {
  const { t } = useTranslation()
  const footerLinks = getFooterLinks(t)

  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-3xl border-t border-border bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.08),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <BrandLogo />
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2">
              <Phone size={13} className="text-muted-foreground mt-0.5 shrink-0" />
              <a href="tel:+982122865619" className="text-muted-foreground text-sm hover:text-foreground transition-colors" dir="ltr">2286 5619</a>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={13} className="text-muted-foreground mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm leading-relaxed">{t('footer.address')}</span>
            </div>
            <div className="flex items-start gap-2">
              <Mail size={13} className="text-muted-foreground mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm" dir="ltr">hello@vitrayco.com</span>
            </div>
          </div>
        </AnimatedContainer>

        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
          {footerLinks.map((section, index) => (
            <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
              <div className="mb-10 md:mb-0">
                <h3 className="text-xs font-semibold text-foreground/70">{section.label}</h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                        <Link href={link.href} className="hover:text-foreground inline-flex items-center gap-1.5 transition-all duration-300">
                          {link.icon && <link.icon className="size-3.5 shrink-0" />}
                          {link.title}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="hover:text-foreground inline-flex items-center gap-1.5 transition-all duration-300"
                        >
                          {link.icon && <link.icon className="size-3.5 shrink-0" />}
                          {link.title}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <div className="mt-12 w-full border-t border-border/40 pt-6 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  )
}

type ViewAnimationProps = {
  delay?: number
  className?: ComponentProps<typeof motion.div>['className']
  children: ReactNode
}

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion()
  if (shouldReduceMotion) return <>{children}</>
  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
