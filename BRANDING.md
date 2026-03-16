# راهنمای برندینگ و طراحی

این سند استانداردهای طراحی و برندینگ سایت را برای حفظ یکپارچگی بصری در تمام صفحات تعریف می‌کند.

---

## ۱. رنگ‌ها (Colors)

پروژه از یک تم تاریک با متغیرهای CSS مبتنی بر HSL استفاده می‌کند. همیشه از این متغیرها به‌جای رنگ‌های مستقیم استفاده کنید:

| متغیر | مقدار HSL | کاربرد |
|---|---|---|
| `--background` | `0 0% 0%` | پس‌زمینه اصلی (مشکی خالص) |
| `--foreground` | `210 40% 98%` | متن اصلی (سفید مایل به آبی) |
| `--card` | `0 0% 6%` | پس‌زمینه کارت‌ها |
| `--border` | `0 0% 14%` | خطوط و حاشیه‌ها |
| `--muted-foreground` | `215 20.2% 65.1%` | متن فرعی و توضیحات |
| `--primary` | `210 40% 98%` | رنگ اصلی (= foreground در تم تاریک) |
| `--secondary` | `217.2 32.6% 17.5%` | پس‌زمینه دکمه‌های ثانویه |
| `--muted` | `217.2 32.6% 17.5%` | پس‌زمینه‌های خنثی |

**قانون:** هرگز رنگ مستقیم (مثل `#ffffff` یا `rgb(...)`) در کلاس‌های Tailwind ننویسید. همیشه از کلاس‌هایی مثل `bg-background`، `text-foreground`، `border-border` استفاده کنید.

---

## ۲. تایپوگرافی (Typography)

### فونت‌ها

| فونت | کاربرد | فایل |
|---|---|---|
| **Yekan** | تیترها (`h1`–`h6`) | `/public/fonts/Yekan.woff2` |
| **IRANSans** | متن بدنه و سایر متون | `/public/fonts/IRANSans.woff2` |

هر دو فونت به‌صورت خودکار از `index.css` بارگذاری می‌شوند. نیازی به تنظیم دستی نیست.

### اندازه‌های تیتر

```
h1 (Hero):        text-5xl md:text-7xl   — font-bold tracking-tighter
h2 (Section):     text-2xl sm:text-3xl md:text-4xl  — font-bold tracking-tighter
h3 (Card title):  text-xl                — (Yekan auto-applied)
```

### رنگ‌بندی متن

```
متن اصلی:     text-foreground
متن فرعی:     text-muted-foreground
متن سفید روی تصویر: text-white
```

---

## ۳. الگوی هدر بخش‌ها (Section Header Pattern)

**همه بخش‌های صفحه باید از این الگوی یکسان استفاده کنند:**

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
  viewport={{ once: true }}
  className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center space-y-4"
>
  {/* Badge */}
  <div className="border border-border/60 py-1 px-4 rounded-lg text-sm text-muted-foreground w-fit">
    نام بخش
  </div>

  {/* عنوان اصلی */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
    عنوان بخش
  </h2>

  {/* توضیح */}
  <p className="text-muted-foreground text-sm md:text-base">
    توضیح کوتاه درباره این بخش.
  </p>
</motion.div>
```

---

## ۴. دکمه‌ها (Buttons)

از کامپوننت `Button` در `src/components/ui/button.tsx` استفاده کنید.

| variant | کاربرد |
|---|---|
| `default` | اقدام اصلی (CTA اولیه) |
| `outline` | اقدام ثانویه |
| `secondary` | اقدام فرعی داخل کارت |
| `ghost` | لینک‌های داخلی |

| size | ارتفاع | کاربرد |
|---|---|---|
| `sm` | h-9 | داخل کارت‌ها |
| `default` | h-10 | استفاده عمومی |
| `lg` | h-11 | CTAهای اصلی (مثل footer CTA) |

**قانون:** در هر بخش حداکثر دو دکمه نمایش دهید. دکمه اصلی اول، دکمه ثانویه بعد.

---

## ۵. کارت‌ها (Cards)

از `GlowCard` در `src/components/ui/spotlight-card.tsx` برای کارت‌های محصول استفاده کنید.

### رنگ glow برای محصولات

| محصول | glowColor |
|---|---|
| پلکس | `blue` (پیش‌فرض) |
| راهکار BI | `purple` |
| پیکسل | `green` |
| پالس | `orange` |

### ساختار داخل کارت

```tsx
<GlowCard customSize glowColor="purple" className="h-[360px] w-full">
  {/* ردیف بالا: Badge + آیکون */}
  <div className="flex items-start justify-between">
    <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted-foreground">
      دسته‌بندی
    </div>
    <Icon className="h-5 w-5 text-muted-foreground" />
  </div>

  {/* محتوا */}
  <div className="space-y-2">
    <h3 className="text-xl">نام محصول</h3>
    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
      توضیح محصول
    </p>
    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
      <Button variant="secondary" size="sm">اقدام اول</Button>
      <Button variant="outline" size="sm">اقدام دوم</Button>
    </div>
  </div>
</GlowCard>
```

---

## ۶. انیمیشن‌ها (Animations)

### کتابخانه

- **`motion/react`** — برای انیمیشن‌های scroll-based و state-based (اکثر کامپوننت‌ها)
- **`framer-motion`** — فقط در `tubelight-navbar.tsx` (هر دو نصب هستند)

**قانون:** در کامپوننت‌های جدید از `motion/react` استفاده کنید.

### الگوهای استاندارد

**fade-in on scroll:**
```tsx
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
viewport={{ once: true }}
```

**blur-in on scroll (AnimatedContainer در footer):**
```tsx
initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
viewport={{ once: true }}
transition={{ delay, duration: 0.8 }}
```

**قانون:** همیشه `viewport={{ once: true }}` بگذارید تا انیمیشن فقط یک‌بار اجرا شود.

---

## ۷. فاصله‌گذاری (Spacing)

| موقعیت | کلاس |
|---|---|
| فاصله بین بخش‌های اصلی | `<div className="h-12" />` |
| padding اصلی صفحه | `px-6 py-12` |
| حداکثر عرض محتوا | `max-w-5xl mx-auto` |
| حداکثر عرض footer | `max-w-6xl mx-auto` |
| حداکثر عرض هدر بخش | `max-w-[540px] mx-auto` |

---

## ۸. زبان و جهت (Language & Direction)

- **زبان:** فارسی (۱۰۰٪ — بدون متن انگلیسی در UI)
- **جهت:** راست‌به‌چپ (`dir="rtl"` در `index.html`)
- **قانون:** هیچ متن انگلیسی در رابط کاربری نداشته باشید. نام محصولات نیز باید فارسی باشند.
- **قانون:** از `uppercase` در CSS برای متون فارسی استفاده نکنید (فارسی حروف بزرگ ندارد).

---

## ۹. ساختار صفحه (Page Structure)

هر صفحه باید این ترتیب را داشته باشد:

```
<NavBar />          ← ثابت، در بالای همه صفحات
<main>
  <HeroSection />   ← اختیاری برای صفحات داخلی
  <Section 1 />
  <Section 2 />
  ...
</main>
<CallToAction />    ← در صفحه اصلی و صفحات محصول
<Footer />          ← ثابت، در پایین همه صفحات
```

### شناسه‌های anchor لینک‌های nav

| لینک ناوبری | id |
|---|---|
| خانه | `id="home"` |
| محصولات | `id="products"` |
| درباره ما | `id="about"` |
| تماس با ما | `id="contact"` |

---

## ۱۰. آیکون‌ها (Icons)

فقط از **`lucide-react`** برای آیکون‌ها استفاده کنید.

| کاربرد | آیکون |
|---|---|
| پلکس | `Layers3` |
| راهکار BI | `BarChart3` |
| پیکسل | `Cloud` |
| پالس | `Share2` |
| خانه (nav) | `Home` |
| محصولات (nav) | `Package` |
| درباره ما (nav) | `Info` |
| تماس با ما (nav) | `Mail` |

---

## ۱۱. کامپوننت‌های موجود

همه کامپوننت‌های UI در `web/src/components/ui/` قرار دارند:

| فایل | کاربرد |
|---|---|
| `button.tsx` | دکمه‌ها با variant‌های مختلف |
| `hero.tsx` | بخش hero با ShaderAnimation |
| `shader-animation.tsx` | پس‌زمینه Three.js shader |
| `tubelight-navbar.tsx` | ناوبری floating با dropdown |
| `spotlight-card.tsx` | کارت با افکت glow |
| `logo-carousel.tsx` | کاروسل لوگو مشتریان |
| `gradient-heading.tsx` | تیتر با متن gradient |
| `testimonials-columns.tsx` | ستون‌های انیمیشن‌دار نظرات |
| `cta-3.tsx` | بخش call-to-action |
| `footer-section.tsx` | فوتر با انیمیشن |
