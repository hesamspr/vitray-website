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

### استثنا: رنگ‌های hardcoded در کامپوننت‌های shader

استثنای قانون بالا فقط برای کامپوننت `MeshGradient` از کتابخانه `@paper-design/shaders-react` و `WarpCard` است. این کامپوننت‌ها آرگومان رنگ‌های hex/HSL می‌پذیرند که خارج از سیستم Tailwind هستند. رنگ‌های هر محصول:

| محصول | رنگ‌های MeshGradient |
|---|---|
| پلکس | `#000000, #1d4ed8, #1e40af, #0f172a, #0284c7` |
| راهکار BI | `#000000, #3730a3, #1e1b4b, #0f172a, #4338ca, #6366f1` |
| پیکسل | `#000000, #0e7490, #164e63, #0f172a, #0891b2` |
| پالس | `#000000, #c2410c, #9a3412, #0f172a, #ea580c` |

### الگوی white-opacity برای پس‌زمینه‌های رنگی

داخل `WarpCard` یا سایر کامپوننت‌هایی که پس‌زمینه رنگی دارند (نه مشکی)، از `white/` opacity استفاده کنید:

```tsx
text-white/60       // متن روی پس‌زمینه رنگی
border-white/20     // حاشیه روی پس‌زمینه رنگی
bg-white/5          // پس‌زمینه خیلی کم‌رنگ
bg-white/10         // پس‌زمینه کم‌رنگ
bg-white/15         // پس‌زمینه متوسط
bg-white/25         // پس‌زمینه نیمه‌شفاف
```

### پالت Neutral برای صفحات داشبورد

صفحات داشبورد از پالت `neutral` تیلویند استفاده می‌کنند:

```tsx
bg-gradient-to-b from-neutral-900 to-neutral-950
text-neutral-400
fill-white/10 stroke-white/10
```

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
Body:             text-sm md:text-base
Extra small:      text-xs
```

### رنگ‌بندی متن

```
متن اصلی:     text-foreground
متن فرعی:     text-muted-foreground
متن سفید روی تصویر: text-white
برچسب کوچک:   font-semibold یا font-medium
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

### GlowCard — کارت‌های محصول اصلی

از `GlowCard` در `src/components/ui/spotlight-card.tsx` برای کارت‌های محصول استفاده کنید.

#### رنگ glow برای محصولات

| محصول | glowColor |
|---|---|
| پلکس | `blue` (پیش‌فرض) |
| راهکار BI | `purple` |
| پیکسل | `green` |
| پالس | `orange` |

#### ساختار داخل کارت

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

### WarpCard — بخش‌های ویژگی‌ها (Feature Sections)

از `WarpCard` در `src/components/ui/warp-card.tsx` برای نمایش ویژگی‌های برجسته محصول استفاده کنید.

```tsx
<WarpCard
  colors={["hsl(200,100%,15%)", "hsl(210,100%,55%)", "hsl(190,90%,40%)", "hsl(220,100%,65%)"]}
  shape="dots"   // یا "checks"
  className="w-full"
>
  <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-12">
    {/* سمت چپ: محتوای متنی */}
    <div className="flex-1 space-y-4">
      <h3 className="text-xl font-bold text-white">عنوان ویژگی</h3>
      <p className="text-sm text-white/60">توضیح ویژگی</p>
    </div>
    {/* سمت راست: آیکون‌های ویژگی */}
    <div className="grid grid-cols-3 gap-2">
      {features.map(({ icon: Icon, label }) => (
        <div className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-4">
          <Icon size={18} className="text-white/80" />
          <span className="text-xs text-white/50">{label}</span>
        </div>
      ))}
    </div>
  </div>
</WarpCard>
```

---

### BentoGrid — شبکه اطلاعاتی

از `BentoGrid` در `src/components/ui/bento-grid.tsx` برای نمایش مجموعه‌ای از ویژگی‌های کوچک استفاده کنید.

```tsx
<BentoGrid items={[
  {
    id: "1",
    title: "عنوان",
    description: "توضیح",
    icon: <Icon className="h-5 w-5" />,
    hasPersistentHover: true,  // برای آیتم برجسته
  }
]} />
```

- گرید: `grid-cols-1 md:grid-cols-2`
- استایل آیتم: `rounded-xl border border-border/60 bg-card`
- آیکون: `w-8 h-8 rounded-lg bg-muted/60`
- Hover: `-translate-y-0.5` با سایه متحرک

---

### Feature Card با AnimatedBackground

```tsx
<AnimatedBackground enableHover className="grid grid-cols-1 sm:grid-cols-2 gap-3">
  <div
    data-id={id}
    className="rounded-2xl border border-border/60 bg-gradient-to-r from-primary/5 via-transparent to-transparent p-6"
  >
    {/* محتوا */}
  </div>
</AnimatedBackground>
```

---

### Dashboard Template Card

برای صفحات داشبورد از این ساختار استفاده کنید:

```tsx
<Link
  to={href}
  className="relative bg-gradient-to-b from-neutral-900 to-neutral-950 p-6 rounded-3xl border border-border/60 hover:border-primary/40 transition-all"
>
  <Grid pattern={[[8, 1], [9, 3], [11, 6], [3, 3], [2, 5]]} size={20} />
  <p className="text-base font-bold text-white relative z-20">{title}</p>
  <p className="text-neutral-400 mt-4 text-sm relative z-20">{description}</p>
</Link>
```

---

## ۶. انیمیشن‌ها (Animations)

### کتابخانه

- **`motion/react`** — برای انیمیشن‌های scroll-based و state-based (اکثر کامپوننت‌ها)
- **`framer-motion`** — فقط در `tubelight-navbar.tsx` (هر دو نصب هستند)

**قانون:** در کامپوننت‌های جدید از `motion/react` استفاده کنید.

### الگوهای استاندارد

**fade-in on scroll (الگوی پیش‌فرض):**
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

**slide از راست به چپ:**
```tsx
initial={{ opacity: 0, x: 20 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
viewport={{ once: true }}
```

**slide از چپ به راست:**
```tsx
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
viewport={{ once: true }}
```

**modal open (CSS keyframe):**
```css
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.95) translateY(12px); }
  to   { opacity: 1; transform: scale(1)    translateY(0);    }
}
/* استفاده: animation: 'modalIn 0.28s cubic-bezier(0.16,1,0.3,1)' */
```

**قانون:** همیشه `viewport={{ once: true }}` بگذارید تا انیمیشن فقط یک‌بار اجرا شود.

**قانون:** ease curve استاندارد `[0.16, 1, 0.3, 1]` است (ease-out شدید).

---

## ۷. فاصله‌گذاری (Spacing)

| موقعیت | کلاس |
|---|---|
| فاصله بین بخش‌های اصلی | `<div className="h-12" />` |
| فاصله کوچک‌تر | `<div className="h-8" />` |
| فاصله خیلی کوچک | `<div className="h-4" />` |
| padding اصلی صفحه | `px-6 py-12` |
| حداکثر عرض محتوا | `max-w-5xl mx-auto` |
| حداکثر عرض footer | `max-w-6xl mx-auto` |
| حداکثر عرض هدر بخش | `max-w-[540px] mx-auto` |
| حداکثر عرض مودال | `max-w-md` |

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

## ۱۰. لوگوهای محصولات (Product Logos)

همه لوگوهای محصولات در پوشه `web/public/product logos/` قرار دارند. هر محصول دو نسخه دارد:

| محصول | لوگو اصلی | لوگو مربعی (fav) |
|---|---|---|
| پلکس | `/product logos/plex W.png` | `/product logos/plex fav white.png` |
| پیکسل | `/product logos/Pixel W.svg` | `/product logos/Pixel Fav W.png` |
| پالس | `/product logos/Pulse White.png` | `/product logos/Pulse Fav W.png` |
| آکادمی | `/product logos/Academy White v2.png` | `/product logos/Academy FAV White.png` |

**لوگوهای هوش تجاری (ویترای):**
- لوگو اصلی: `web/public/Vitray.png`
- لوگو مربعی (fav): `web/public/fav.png`

**نکته:** فایل‌های لوگو سفید هستند و روی پس‌زمینه تاریک استفاده می‌شوند. در URL باید فضاها را با `%20` کد کنید (مثال: `/product%20logos/plex%20W.png`).

---

## ۱۱. آیکون‌ها (Icons)

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

## ۱۲. کامپوننت‌های موجود

همه کامپوننت‌های UI در `web/src/components/ui/` قرار دارند:

| فایل | کاربرد |
|---|---|
| `button.tsx` | دکمه‌ها با variant‌های مختلف |
| `hero.tsx` | بخش hero اصلی با ShaderAnimation |
| `shader-animation.tsx` | پس‌زمینه Three.js shader |
| `tubelight-navbar.tsx` | ناوبری floating با dropdown |
| `spotlight-card.tsx` | کارت با افکت glow (GlowCard) |
| `warp-card.tsx` | کارت با پس‌زمینه شیدر متحرک |
| `bento-grid.tsx` | شبکه ویژگی‌ها با hover animation |
| `logo-carousel.tsx` | کاروسل لوگو مشتریان |
| `gradient-heading.tsx` | تیتر با متن gradient |
| `gradient-button.tsx` | دکمه با gradient |
| `testimonials-columns.tsx` | ستون‌های انیمیشن‌دار نظرات |
| `cta-3.tsx` | بخش call-to-action |
| `footer-section.tsx` | فوتر با انیمیشن |
| `consultation-modal.tsx` | مودال فرم درخواست مشاوره |
| `animated-background.tsx` | wrapper برای hover/click background animation |
| `lamp.tsx` | جداکننده بصری با افکت لامپ |
| `pulse-hero.tsx` | hero اختصاصی پالس (نارنجی) |
| `plex-hero.tsx` | hero اختصاصی پلکس (آبی) |
| `pixel-hero.tsx` | hero اختصاصی پیکسل (سبز/فیروزه‌ای) |
| `feature-section-with-card-gradient.tsx` | شبکه کارت‌های داشبورد |
| `about-section.tsx` | بخش درباره ما |
| `radial-orbital-timeline.tsx` | تایم‌لاین مداری |
| `vertical-tabs.tsx` | تب‌های عمودی |
| `dotted-surface.tsx` | پس‌زمینه نقطه‌دار |
| `focus-cards.tsx` | کارت‌های با focus effect |
| `glowing-background-stars-card.tsx` | کارت با پس‌زمینه ستاره‌ای |
| `sparkles.tsx` | افکت ذرات درخشان |

---

## ۱۳. الگوی Hero صفحات محصول

همه hero section‌های محصول از ساختار یکسانی با `MeshGradient` استفاده می‌کنند:

```tsx
<div className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: 520 }}>
  {/* لایه شیدر متحرک */}
  <MeshGradient className="absolute inset-0" colors={PRODUCT_COLORS} speed={0.3} />
  <MeshGradient className="absolute inset-0 opacity-40" wireframe="true" speed={0.2} />

  {/* gradient fade به پس‌زمینه صفحه */}
  <div
    className="pointer-events-none absolute bottom-0 left-0 right-0 h-48 z-10"
    style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }}
  />

  {/* محتوای Hero */}
  <div className="absolute inset-0 flex items-center justify-center z-20 px-6">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center space-y-6 max-w-3xl"
    >
      <img src="/product%20logos/..." alt="نام محصول" className="h-10" />
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">
        شعار محصول
      </h1>
      <p className="text-white/70 text-base md:text-lg max-w-xl">
        توضیح محصول
      </p>
      <div className="flex gap-4">
        <Button>شروع کنید</Button>
        <Button variant="outline">بیشتر بدانید</Button>
      </div>
    </motion.div>
  </div>
</div>
```

---

## ۱۴. مودال مشاوره (ConsultationModal)

از `ConsultationModal` در `src/components/ui/consultation-modal.tsx` استفاده کنید. این مودال یک فرم درخواست مشاوره است که به webhook در n8n متصل می‌شود.

### باز کردن مودال

```tsx
const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>درخواست مشاوره</Button>
<ConsultationModal open={open} onClose={() => setOpen(false)} />
```

### نکات پیاده‌سازی

- backdrop: `rgba(0,0,0,0.7)` با `backdropFilter: 'blur(6px)'`
- پس‌زمینه: GIF متحرک با gradient overlay
- فیلدهای فرم: نام، موبایل، ایمیل، شرکت، توضیحات
- Webhook: `https://n8n.vitray.ir/webhook/contact-us-form`
- تایم‌اوت: ۱۰ ثانیه با `AbortController`
- حالت موفقیت: آیکون `CheckCircle` با پیام تأیید
- بستن: کلیک خارج، کلید Escape، یا دکمه بستن

---

## ۱۵. LampContainer — جداکننده بصری

از `LampContainer` در `src/components/ui/lamp.tsx` به‌عنوان جداکننده بصری بین بخش‌ها استفاده کنید.

```tsx
<LampContainer color="blue">  {/* blue | orange | purple | cyan */}
  <motion.h2
    initial={{ opacity: 0.5, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
    className="text-3xl font-bold tracking-tighter text-center"
  >
    عنوان زیر لامپ
  </motion.h2>
</LampContainer>
```

رنگ‌های `LampContainer` مطابق با رنگ محصول انتخاب می‌شود:

| محصول | color |
|---|---|
| پلکس | `blue` |
| راهکار BI | `purple` |
| پیکسل | `cyan` |
| پالس | `orange` |

---

## ۱۶. فرم‌ها (Forms)

### ورودی‌های فرم استاندارد (صفحه تماس)

```tsx
<input
  className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/50"
  placeholder="..."
/>
<textarea
  className="w-full rounded-xl border border-border/60 bg-background/60 px-4 py-2.5 text-sm outline-none focus:border-primary/60 transition-colors placeholder:text-muted-foreground/50 resize-none"
  rows={4}
/>
```

### ورودی‌های مودال (روی پس‌زمینه رنگی)

```tsx
<input
  className="w-full rounded-2xl bg-white/10 border border-white/20 px-4 py-2.5 text-sm text-white placeholder-white/40 outline-none focus:bg-white/20 focus:border-white/40 transition-all"
/>
```

### دکمه submit مودال

```tsx
<button
  type="submit"
  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-white/15 border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/25 transition-all disabled:opacity-50"
>
  {loading ? 'در حال ارسال...' : 'ارسال درخواست'}
</button>
```

---

## ۱۷. Navbar — ناوبری

کامپوننت `TubelightNavbar` از `src/components/ui/tubelight-navbar.tsx`:

- موقعیت: `fixed top-0 left-1/2 -translate-x-1/2 z-50`
- شیشه‌ای: `bg-background/10 border border-border/50 backdrop-blur-lg`
- شکل: `rounded-full` (pill)
- انیمیشن dropdown: `initial={{ opacity: 0, y: -6, scale: 0.97 }}` → حالت عادی
- اندیکاتور فعال: GlowIndicator با `layoutId` برای انیمیشن shared

---

## ۱۸. Footer — پاورقی

کامپوننت `FooterSection` از `src/components/ui/footer-section.tsx`:

- گلوی تزئینی بالا: `radial-gradient(35%_128px_at_50%_0%, rgba(255,255,255,0.08), transparent)`
- خط جداکننده: `h-px w-1/3 blur rounded-full`
- گرید: `xl:grid-cols-3`
- آیکون‌های شبکه اجتماعی: LinkedIn، Instagram، YouTube، Aparat (SVG سفارشی)
- سال: `new Date().getFullYear()` به‌صورت پویا
- انیمیشن: `AnimatedContainer` با الگوی blur fade

---

## ۱۹. Call To Action

کامپوننت `CallToAction` از `src/components/ui/cta-3.tsx`:

- تزئین گوشه‌ها: آیکون `+` در چهار گوشه با خطوط کشیده
- خط میانی: `border-l border-dashed border-border`
- پس‌زمینه: `radial-gradient from-foreground/0.08`
- محتوا: تیتر + زیرتیتر + یک دکمه که `ConsultationModal` را باز می‌کند

---

## ۲۰. Backdrop Blur

برای شفافیت و blur روی پس‌زمینه از Tailwind استفاده کنید:

```tsx
backdrop-blur-[2px]  // بسیار کم
backdrop-blur-sm     // کم (4px)
backdrop-blur-lg     // زیاد — برای navbar
```

در مودال‌ها می‌توانید inline style استفاده کنید:
```tsx
style={{ backdropFilter: 'blur(6px)' }}
```
