'use client'

import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/context/LanguageContext"

interface NavSubItem {
  name: string
  url: string
  icon?: React.ComponentType<{ className?: string }>
}

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  subItems?: NavSubItem[]
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

function GlowIndicator() {
  return (
    <div className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10 animate-in fade-in duration-200">
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
        <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
        <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
        <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
      </div>
    </div>
  )
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname()
  const { lang, toggleLanguage } = useLanguage()

  const findActiveItem = (path: string) =>
    items.find(item =>
      item.url === path ||
      item.subItems?.some(sub => sub.url === path)
    )?.name ?? items[0].name

  const [activeTab, setActiveTab] = useState(() => findActiveItem(pathname))
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const navRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setActiveTab(findActiveItem(pathname))
  }, [pathname, items])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const itemClass = (isActive: boolean) =>
    cn(
      "relative cursor-pointer text-sm font-semibold px-5 py-2 rounded-full transition-colors flex items-center gap-1.5",
      "text-foreground/80 hover:text-primary",
      isActive && "text-primary",
    )

  return (
    <div className={cn("fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-4", className)}>
      <div
        ref={navRef}
        className="relative flex items-center gap-1 bg-background/10 border border-border/50 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg"
      >
        <a href="/" className="px-3 py-1 flex items-center">
          <img src="/Vitray.png" alt="Vitray" className="h-6 w-auto" />
        </a>
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name
          const hasDropdown = !!item.subItems?.length
          const isOpen = openDropdown === item.name
          const isRouterLink = !hasDropdown && !item.url.startsWith('#')

          return (
            <div key={item.name} className="relative">
              {hasDropdown ? (
                <button
                  onClick={() => setOpenDropdown(isOpen ? null : item.name)}
                  className={itemClass(isActive)}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <ChevronDown
                    size={13}
                    className={cn("hidden md:inline transition-transform duration-200", isOpen && "rotate-180")}
                  />
                  <span className="md:hidden"><Icon size={18} strokeWidth={2.5} /></span>
                  {isActive && <GlowIndicator />}
                </button>
              ) : isRouterLink ? (
                <Link
                  href={item.url}
                  onClick={() => { setActiveTab(item.name); setOpenDropdown(null) }}
                  className={itemClass(isActive)}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden"><Icon size={18} strokeWidth={2.5} /></span>
                  {isActive && <GlowIndicator />}
                </Link>
              ) : (
                <a
                  href={item.url}
                  onClick={() => { setActiveTab(item.name); setOpenDropdown(null) }}
                  className={itemClass(isActive)}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden"><Icon size={18} strokeWidth={2.5} /></span>
                  {isActive && <GlowIndicator />}
                </a>
              )}

              {/* Dropdown panel */}
              {hasDropdown && (
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -6, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full mt-2 right-0 min-w-[190px] bg-background/95 border border-border/60 backdrop-blur-lg rounded-2xl shadow-xl py-1.5 overflow-hidden"
                    >
                      {item.subItems!.map((sub) => {
                        const isExternal = sub.url.includes('#') || sub.url.startsWith('http')
                        if (isExternal) {
                          return (
                            <a
                              key={sub.name}
                              href={sub.url}
                              {...(sub.url.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                              onClick={() => { setActiveTab(item.name); setOpenDropdown(null) }}
                              className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                            >
                              {sub.icon && <sub.icon className="h-3.5 w-3.5 shrink-0 object-contain" />}
                              {sub.name}
                            </a>
                          )
                        }
                        return (
                          <Link
                            key={sub.name}
                            href={sub.url}
                            onClick={() => { setActiveTab(item.name); setOpenDropdown(null) }}
                            className="flex items-center gap-2.5 px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 transition-colors"
                          >
                            {sub.icon && <sub.icon className="h-3.5 w-3.5 shrink-0 object-contain" />}
                            {sub.name}
                          </Link>
                        )
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          )
        })}

        {/* Language toggle — desktop */}
        <button
          onClick={toggleLanguage}
          className="hidden md:flex items-center px-3 py-1.5 rounded-full text-xs font-semibold border border-border/50 text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors ms-1"
          aria-label="Toggle language"
        >
          {lang === 'fa' ? 'EN' : 'فا'}
        </button>

        {/* Language toggle — mobile */}
        <button
          onClick={toggleLanguage}
          className="flex md:hidden items-center px-3 py-1.5 rounded-full text-xs font-semibold border border-border/50 text-foreground/70 hover:text-primary hover:border-primary/50 transition-colors ms-1"
          aria-label="Toggle language"
        >
          {lang === 'fa' ? 'EN' : 'فا'}
        </button>
      </div>
    </div>
  )
}
