'use client'

import { useState } from 'react'
import { ConsultationModal } from '@/components/ui/consultation-modal'

export function BiConsultationButton({ label }: { label: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
      >
        {label}
      </button>
      <ConsultationModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
