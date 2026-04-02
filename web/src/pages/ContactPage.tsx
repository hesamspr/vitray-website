import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { usePageTitle } from '@/lib/usePageTitle';
import { useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { getNavItems } from '@/lib/navItems';
import { Button } from '@/components/ui/button';
import { ShineBorder } from '@/components/ui/shine-border';

export function ContactPage() {
  const { t, lang } = useTranslation();
  const navItems = getNavItems(t);
  usePageTitle('page_titles.contact');

  const [form, setForm] = useState({ name: '', email: '', mobile: '', company: '', details: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10000);
    try {
      await fetch('https://n8n.vitray.ir/webhook/contact-us-form', {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify(form),
        mode: 'no-cors',
        signal: controller.signal,
      });
      setSubmitted(true);
    } catch {
      // still show success — request was fired
      setSubmitted(true);
    } finally {
      clearTimeout(timer);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar items={navItems} />

      <div className="mx-auto max-w-5xl px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center space-y-3 mb-12"
        >
          <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
            {t('contact.badge')}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            {t('contact.title')}
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-md">
            {t('contact.body')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-border/60 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-8 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <img src="/Vitray.png" alt="Vitray" className="h-7 w-auto" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('contact.company_blurb')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/30">
                  <Phone size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{t('contact.about_label')}</p>
                  <a href="tel:+982122865619" className="text-sm font-medium hover:text-primary transition-colors" dir="ltr">2286 5619</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/30">
                  <MapPin size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{t('contact.address_label')}</p>
                  <p className="text-sm font-medium leading-relaxed">
                    {t('contact.address_value')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/30">
                  <Mail size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">{t('contact.email_label')}</p>
                  <p className="text-sm font-medium" dir="ltr">hello@vitrayco.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-border/60 bg-gradient-to-br from-primary/5 via-transparent to-transparent p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 text-center py-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                  <Send size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{t('contact.success_title')}</h3>
                <p className="text-sm text-muted-foreground">{t('contact.success_body')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" dir={lang === 'en' ? 'ltr' : 'rtl'}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground">{t('contact.form_name')}</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/50"
                      placeholder={t('contact.form_name_placeholder')}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground">{t('contact.form_mobile')}</label>
                    <input
                      required
                      type="tel"
                      value={form.mobile}
                      onChange={e => setForm({ ...form, mobile: e.target.value })}
                      className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/50"
                      placeholder="09123456789"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground">{t('contact.form_email')}</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/50"
                    placeholder="ali@company.com"
                    dir="ltr"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground">{t('contact.form_company')}</label>
                  <input
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/50"
                    placeholder={t('contact.form_company_placeholder')}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground">{t('contact.form_details')}</label>
                  <textarea
                    required
                    rows={4}
                    value={form.details}
                    onChange={e => setForm({ ...form, details: e.target.value })}
                    className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/50 resize-none"
                    placeholder={t('contact.form_details_placeholder')}
                  />
                </div>

                <ShineBorder
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                  className="w-full p-0 bg-transparent dark:bg-transparent"
                >
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-black text-white hover:bg-black/90 gap-2 disabled:opacity-60"
                  >
                    <Send size={14} />
                    {loading ? t('contact.form_submitting') : t('contact.form_submit')}
                  </Button>
                </ShineBorder>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
