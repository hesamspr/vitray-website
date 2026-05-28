# English Language Support — Design Spec

**Date:** 2026-03-21
**Status:** Approved

---

## Overview

Add English language support to the existing Persian-only marketing website. The English version mirrors the exact same design, layout, and components as the Persian version — only text content and direction (RTL → LTR) change.

---

## Requirements

- Toggle between Persian (FA) and English (EN) in-place (no URL changes)
- Language preference persists across page reloads via `localStorage` (key: `"vitray_lang"`)
- Default language when no saved preference: `"fa"` (Persian)
- English layout is LTR; Persian layout is RTL — direction switches dynamically
- Language switcher appears in: desktop navbar + mobile menu
- English translations are creative (not word-for-word), written by Claude
- No new i18n library dependencies — use a custom React Context solution

---

## Architecture

### 1. Language Context

**File:** `web/src/context/LanguageContext.tsx`

- Holds current language state: `"fa" | "en"`
- Exposes `toggleLanguage()` function
- On mount, reads saved preference from `localStorage` key `"vitray_lang"`; defaults to `"fa"` if absent
- On language change:
  - Saves to `localStorage`
  - Updates `document.documentElement.dir` (`"rtl"` | `"ltr"`)
  - Updates `document.documentElement.lang` (`"fa"` | `"en"`)
  - Toggles CSS class on `<html>`: add `lang-en` for English, remove for Persian

**Provider mount point:** `<LanguageProvider>` wraps `<BrowserRouter>` in `web/src/main.tsx` so all routes (including lazy-loaded pages) have access to context.

### 2. Translation Files

**Files:**
- `web/src/locales/fa.json` — all Persian strings extracted from components
- `web/src/locales/en.json` — English translations (creative, not literal)

**Key structure (namespaced by page/section):**
```json
{
  "nav": {},
  "home": {
    "hero": {},
    "cta": {},
    "features": {}
  },
  "about": {},
  "contact": {},
  "footer": {},
  "products": {
    "plex": { "hero": {}, "features": {} },
    "pixel": { "hero": {}, "features": {} },
    "pulse": { "hero": {}, "features": {} }
  },
  "bi_solution": {},
  "modal": {},
  "page_titles": {
    "site_name": "راهکارهای ویترای / Vitray Solutions",
    "home": "خانه / Home",
    "about": "درباره ما / About",
    "contact": "تماس با ما / Contact",
    "plex": "پلکس / Plex",
    "pixel": "پیکسل / Pixel",
    "pulse": "پالس / Pulse",
    "bi_solution": "راهکار هوش تجاری / BI Solution",
    "dashboard_finance": "داشبورد مالی / Finance Dashboard",
    "dashboard_hr": "داشبورد منابع انسانی / HR Dashboard",
    "dashboard_warehouse": "داشبورد انبار / Warehouse Dashboard",
    "dashboard_maintenance": "داشبورد نگهداری و تعمیرات / Maintenance Dashboard",
    "dashboard_production": "داشبورد تولید / Production Dashboard",
    "dashboard_distribution_sales": "داشبورد فروش پخش / Distribution Sales Dashboard",
    "dashboard_b2b_sales": "داشبورد فروش B2B / B2B Sales Dashboard"
  }
}
```

### 3. `useTranslation` Hook

**File:** `web/src/hooks/useTranslation.ts`

- Reads current language from `LanguageContext`
- Returns `t(key: string): string` — dot-notation key lookup into active locale JSON
- **Missing key fallback policy:** In development, log a console warning. In all environments, return the key string itself (e.g., `"nav.home"`) so missing translations are visible rather than blank
- Example: `t("nav.home")` → `"Home"` or `"خانه"`

### 4. `usePageTitle` Update

**File:** `web/src/lib/usePageTitle.ts`

The hook currently accepts a hardcoded Persian string. It must be updated to accept a translation key instead. All 13 call sites are updated to pass a `page_titles.*` key:

| Call site | Current | Updated |
|-----------|---------|---------|
| `App.tsx` | `usePageTitle()` | `usePageTitle()` (no page arg, uses site name only) |
| `AboutPage.tsx` | `usePageTitle('درباره ما')` | `usePageTitle('page_titles.about')` |
| `ContactPage.tsx` | `usePageTitle('تماس با ما')` | `usePageTitle('page_titles.contact')` |
| `PlexPage.tsx` | `usePageTitle('پلکس')` | `usePageTitle('page_titles.plex')` |
| `PixelPage.tsx` | `usePageTitle('پیکسل')` | `usePageTitle('page_titles.pixel')` |
| `PulsePage.tsx` | `usePageTitle('پالس')` | `usePageTitle('page_titles.pulse')` |
| `BiSolutionPage.tsx` | `usePageTitle('راهکار هوش تجاری')` | `usePageTitle('page_titles.bi_solution')` |
| `FinanceDashboardPage.tsx` | `usePageTitle('داشبورد مالی')` | `usePageTitle('page_titles.dashboard_finance')` |
| `HRDashboardPage.tsx` | `usePageTitle('داشبورد منابع انسانی')` | `usePageTitle('page_titles.dashboard_hr')` |
| `WarehouseDashboardPage.tsx` | `usePageTitle('داشبورد انبار')` | `usePageTitle('page_titles.dashboard_warehouse')` |
| `MaintenanceDashboardPage.tsx` | `usePageTitle('داشبورد نگهداری و تعمیرات')` | `usePageTitle('page_titles.dashboard_maintenance')` |
| `ProductionDashboardPage.tsx` | `usePageTitle('داشبورد تولید')` | `usePageTitle('page_titles.dashboard_production')` |
| `DistributionSalesDashboardPage.tsx` | `usePageTitle('داشبورد فروش پخش')` | `usePageTitle('page_titles.dashboard_distribution_sales')` |
| `B2BSalesDashboardPage.tsx` | `usePageTitle('داشبورد فروش B2B')` | `usePageTitle('page_titles.dashboard_b2b_sales')` |

The hook itself will call `t()` internally to resolve the key to the correct language string.

### 5. Font Switching

**Mechanism:** CSS class toggle on `<html>`. When English is active, the class `lang-en` is added. CSS rules in `index.css` target this class:

```css
/* Default (Persian) */
html { font-family: IRANSans, sans-serif; }
h1, h2, h3, h4, h5, h6 { font-family: Yekan, IRANSans, sans-serif; }

/* English override */
html.lang-en { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
html.lang-en h1,
html.lang-en h2,
html.lang-en h3,
html.lang-en h4,
html.lang-en h5,
html.lang-en h6 { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
```

**Font choice:** System font stack for English (no new font loading).

---

## Language Switcher UI

### Desktop Navbar
- Added to the right end of `tubelight-navbar.tsx`
- Button shows `EN` when Persian is active, `فا` when English is active
- Styled to match existing navbar aesthetics (subtle border, matching font size)

### Mobile Menu
- Same toggle at the bottom of the mobile drawer
- Full-width, consistent with existing mobile menu item styling

---

## Component Migration

### Strategy
- No structural changes to any component
- Only text nodes replaced with `t("key")` calls
- Layout, styling, animations, assets all unchanged

### RTL/LTR Handling
- `dir` attribute managed on `<html>` by `LanguageContext` — no per-component `dir` props needed
- Components with hardcoded `dir="rtl"` are updated to read dynamically from context

### Files Modified

| File | Change |
|------|--------|
| `web/index.html` | Remove hardcoded `dir="rtl"`, `lang="fa"`, and update `<title>` to English-friendly fallback |
| `web/src/index.css` | Remove `html { direction: rtl; }` inside `@layer base` (line 246–248); add `html.lang-en` font rules |
| `web/src/main.tsx` | Wrap app with `<LanguageProvider>` around `<BrowserRouter>` |
| `web/src/lib/usePageTitle.ts` | Accept translation key instead of raw string; call `t()` internally |
| `web/src/App.tsx` | Replace hardcoded strings with `t()` calls |
| `web/src/pages/AboutPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/ContactPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/BiSolutionPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/PlexPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/PixelPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/PulsePage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/dashboards/MaintenanceDashboardPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/dashboards/HRDashboardPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/dashboards/DistributionSalesDashboardPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/dashboards/WarehouseDashboardPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/dashboards/ProductionDashboardPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/dashboards/FinanceDashboardPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/pages/dashboards/B2BSalesDashboardPage.tsx` | Replace hardcoded strings + update `usePageTitle` call |
| `web/src/components/ui/footer-section.tsx` | Replace hardcoded strings |
| `web/src/components/ui/tubelight-navbar.tsx` | Add language switcher + replace strings |
| `web/src/components/ui/consultation-modal.tsx` | Replace hardcoded strings |
| `web/src/components/ui/hero.tsx` | Replace hardcoded strings |
| `web/src/components/ui/cta-3.tsx` | Replace hardcoded strings |
| `web/src/components/ui/plex-hero.tsx` | Replace hardcoded strings |
| `web/src/components/ui/pixel-hero.tsx` | Replace hardcoded strings |
| `web/src/components/ui/pulse-hero.tsx` | Replace hardcoded strings |
| `web/src/components/ui/feature-section-with-card-gradient.tsx` | Replace hardcoded strings |

### New Files Created

| File | Purpose |
|------|---------|
| `web/src/context/LanguageContext.tsx` | Language state + localStorage + DOM updates |
| `web/src/hooks/useTranslation.ts` | `t()` lookup hook |
| `web/src/locales/fa.json` | Persian translation strings |
| `web/src/locales/en.json` | English translation strings |

---

## Out of Scope

- URL-based language routing (`/en/`)
- SEO meta tag updates per language
- Any new pages or features
