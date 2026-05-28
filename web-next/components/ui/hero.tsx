'use client'

import dynamic from "next/dynamic"
import { useTranslation } from "@/hooks/useTranslation"

const ShaderAnimation = dynamic(
  () => import("@/components/ui/shader-animation").then((m) => m.ShaderAnimation),
  {
    ssr: false,
    loading: () => <div className="absolute inset-0 bg-black" />,
  },
)

export const PremiumHero = () => {
  const { t } = useTranslation()

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ShaderAnimation />
      <div className="relative z-20 flex h-screen w-full items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-7xl flex flex-col gap-6">
          <span>{t('hero.line1')}</span>
          <span>{t('hero.line2')}</span>
        </h1>
      </div>
    </div>
  )
}
