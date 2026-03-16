import { NavBar } from '@/components/ui/tubelight-navbar';
import { Footer } from '@/components/ui/footer-section';
import { motion } from 'motion/react';
import { BarChart3, Cloud, GraduationCap, Home, Info, Layers3, Mail, MapPin, Package, Phone, Send, Share2 } from 'lucide-react';
import { usePageTitle } from '@/lib/usePageTitle';
import { useState } from 'react';

const navItems = [
  { name: 'خانه', url: '/', icon: Home },
  {
    name: 'راهکارها',
    url: '/#products',
    icon: Package,
    subItems: [
      { name: 'هوش تجاری', url: '/bi-solution', icon: BarChart3 },
      { name: 'پیکسل', url: '/pixel', icon: Cloud },
      { name: 'پالس', url: '/pulse', icon: Share2 },
      { name: 'پلکس', url: '/plex', icon: Layers3 },
      { name: 'آکادمی', url: 'https://academy.vitrayco.com', icon: GraduationCap },
    ],
  },
  { name: 'درباره ما', url: '/about', icon: Info },
  { name: 'تماس با ما', url: '/contact', icon: Mail },
];

export function ContactPage() {
  usePageTitle('تماس با ما');

  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            تماس با ما
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
            با ما در ارتباط باشید
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-md">
            برای دریافت مشاوره رایگان یا هر سوالی درباره محصولات ویترای، پیام بگذارید.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl border border-border/60 bg-card p-8 flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <img src="/Vitray.png" alt="Vitray" className="h-7 w-auto" />
              <p className="text-muted-foreground text-sm leading-relaxed">
                ویترای با هدف کمک به سازمان‌ها در تبدیل داده‌های خام به بینش‌های عملی تأسیس شده است. تیم ما از متخصصان فناوری و کسب‌وکار تشکیل شده که راه‌حل‌های نوآورانه هوش تجاری ارائه می‌دهند.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/30">
                  <Phone size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">تلفن</p>
                  <p className="text-sm font-medium" dir="ltr">۲۲۸۶۵۶۱۹</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/30">
                  <MapPin size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">آدرس</p>
                  <p className="text-sm font-medium leading-relaxed">
                    تهران، پاسداران، نگارستان چهارم، پلاک ٬۲۸ واحد ۵
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border/60 bg-muted/30">
                  <Mail size={14} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-0.5">ایمیل</p>
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
            className="rounded-3xl border border-border/60 bg-card p-8"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 text-center py-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
                  <Send size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">پیام شما ارسال شد</h3>
                <p className="text-sm text-muted-foreground">به زودی با شما تماس می‌گیریم.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground">نام و نام خانوادگی</label>
                    <input
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/50"
                      placeholder="علی احمدی"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs text-muted-foreground">ایمیل</label>
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
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground">نام شرکت</label>
                  <input
                    value={form.company}
                    onChange={e => setForm({ ...form, company: e.target.value })}
                    className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/50"
                    placeholder="شرکت نمونه"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-muted-foreground">پیام</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/50 resize-none"
                    placeholder="چطور می‌توانیم کمک کنیم؟"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Send size={14} />
                  ارسال پیام
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
