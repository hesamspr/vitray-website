'use client'

import { useState, useEffect } from 'react'
import { X, Zap, CheckCircle } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

interface ConsultationModalProps {
  isOpen: boolean
  onClose: () => void
}

const WEBHOOK_URL = 'https://n8n.vitray.ir/webhook/contact-us-form'

const inputClass =
  'w-full rounded-2xl bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:bg-white/20 focus:border-white/40 transition-all duration-200 shadow-lg'

const labelClass = 'block text-xs text-white/60 mb-1'

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const { t, lang } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', mobile: '', company: '', details: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [isOpen, onClose])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 10000)

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(form),
        mode: 'no-cors',
        signal: controller.signal,
      })
      setSubmitted(true)
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        setError(t('modal.error_timeout'))
      } else {
        setError(t('modal.error_generic'))
      }
    } finally {
      clearTimeout(timer)
      setLoading(false)
    }
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setSubmitted(false)
      setForm({ name: '', email: '', mobile: '', company: '', details: '' })
      setError('')
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)' }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.95) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0);    }
        }
      `}</style>

      <div
        className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl"
        style={{ animation: 'modalIn 0.28s cubic-bezier(0.16,1,0.3,1)' }}
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://media.giphy.com/media/xJT7pzbviKNqTqF1Ps/giphy.gif"
            alt=""
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/80 via-blue-900/90 to-black/95" />
        </div>

        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-colors text-white"
        >
          <X size={14} />
        </button>

        <div className="relative z-10 px-8 py-10">
          {submitted ? (
            <div className="flex flex-col items-center text-center space-y-4 py-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 border border-white/20">
                <CheckCircle size={26} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">{t('modal.success_title')}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t('modal.success_body')}</p>
              <button
                onClick={handleClose}
                className="mt-2 rounded-2xl bg-white/10 border border-white/20 px-6 py-2 text-sm text-white hover:bg-white/20 transition-colors"
              >
                {t('modal.close')}
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-7">
                <div className="w-8 h-8 mx-auto mb-5 text-white">
                  <Zap className="w-full h-full" fill="currentColor" />
                </div>
                <h1 className="text-2xl font-semibold text-white mb-2">{t('modal.title')}</h1>
                <p className="text-white/60 text-sm leading-relaxed">
                  {t('modal.subtitle')}
                  <br />
                  <span className="text-white/80">{t('modal.subtitle2')}</span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3" dir={lang === 'en' ? 'ltr' : 'rtl'}>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('modal.field_name')}</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                      placeholder={t('modal.field_name_placeholder')}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>{t('modal.field_mobile')}</label>
                    <input
                      required
                      type="tel"
                      value={form.mobile}
                      onChange={e => setForm({ ...form, mobile: e.target.value })}
                      className={inputClass}
                      placeholder="09123456789"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t('modal.field_email')}</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className={inputClass}
                    placeholder="ali@company.com"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className={labelClass}>{t('modal.field_company')}</label>
                  <input
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className={inputClass}
                    placeholder={t('modal.field_company_placeholder')}
                  />
                </div>

                <div>
                  <label className={labelClass}>{t('modal.field_details')}</label>
                  <textarea
                    rows={3}
                    value={form.details}
                    onChange={e => setForm({ ...form, details: e.target.value })}
                    className={`${inputClass} resize-none`}
                    placeholder={t('modal.field_details_placeholder')}
                  />
                </div>

                {error && <p className="text-xs text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-white/15 border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/25 transition-all duration-200 shadow-lg disabled:opacity-50 mt-1"
                >
                  {loading ? t('modal.submitting') : t('modal.submit')}
                </button>
              </form>

              <p className="text-center text-white/40 text-xs mt-5 leading-relaxed">
                {t('modal.privacy')}
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
