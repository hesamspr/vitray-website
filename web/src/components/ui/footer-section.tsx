import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  BarChart3,
  Cloud,
  GraduationCap,
  Layers3,
  Share2,
  Phone,
  MapPin,
  Mail,
} from 'lucide-react';

function AparatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.75 10.875l-5.5 3.25A1 1 0 018.75 15.25v-6.5a1 1 0 011.5-.875l5.5 3.25a1 1 0 010 1.75z"/>
    </svg>
  );
}

interface FooterLink {
  title: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: 'راهکارها',
    links: [
      { title: 'هوش تجاری', href: '/bi-solution', icon: BarChart3 },
      { title: 'پیکسل', href: '/pixel', icon: Cloud },
      { title: 'پالس', href: '/pulse', icon: Share2 },
      { title: 'پلکس', href: '/plex', icon: Layers3 },
      { title: 'آکادمی', href: 'https://academy.vitrayco.com', icon: GraduationCap },
    ],
  },
  {
    label: 'شرکت',
    links: [
      { title: 'درباره ما', href: '/about' },
      { title: 'تماس با ما', href: '/contact' },
    ],
  },
  {
    label: 'منابع',
    links: [
      { title: 'وبلاگ', href: '#blog' },
    ],
  },
  {
    label: 'شبکه‌های اجتماعی',
    links: [
      { title: 'لینکدین', href: 'https://www.linkedin.com/company/vitrayco/', icon: LinkedinIcon },
      { title: 'اینستاگرام', href: 'https://www.instagram.com/vitrayco/', icon: InstagramIcon },
      { title: 'یوتیوب', href: 'https://www.youtube.com/@vitraycobi7311', icon: YoutubeIcon },
      { title: 'آپارات', href: 'https://www.aparat.com/VitrayCo.ir', icon: AparatIcon },
    ],
  },
];

function BrandLogo() {
  return <img src="/Vitray.png" alt="Vitray" className="h-8 w-auto" />;
}

export function Footer() {
  return (
    <footer className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center rounded-t-3xl border-t border-border bg-[radial-gradient(35%_128px_at_50%_0%,rgba(255,255,255,0.08),transparent)] px-6 py-12 lg:py-16">
      <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

      <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
        <AnimatedContainer className="space-y-4">
          <BrandLogo />
          <div className="space-y-3 pt-2">
            <div className="flex items-start gap-2">
              <Phone size={13} className="text-muted-foreground mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm" dir="ltr">۲۲۸۶۵۶۱۹</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPin size={13} className="text-muted-foreground mt-0.5 shrink-0" />
              <span className="text-muted-foreground text-sm leading-relaxed">تهران، پاسداران، نگارستان چهارم، پلاک ٬۲۸ واحد ۵</span>
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
                <h3 className="text-xs font-semibold text-foreground/70">
                  {section.label}
                </h3>
                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                        <Link
                          to={link.href}
                          className="hover:text-foreground inline-flex items-center gap-1.5 transition-all duration-300"
                        >
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
          © {new Date().getFullYear()} تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <>{children}</>;
  }

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
  );
}
