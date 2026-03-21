# English Language Support — Design Spec

**Date:** 2026-03-21
**Status:** Approved

---

## Overview

Add English language support to the existing Persian-only marketing website. The English version mirrors the exact same design, layout, and components as the Persian version — only text content and direction (RTL → LTR) change.

---

## Requirements

- Toggle between Persian (FA) and English (EN) in-place (no URL changes)
- Language preference persists across page reloads via `localStorage`
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
- On mount, reads saved preference from `localStorage`
- On language change:
  - Saves to `localStorage`
  - Updates `document.documentElement.dir` (`"rtl"` | `"ltr"`)
  - Updates `document.documentElement.lang` (`"fa"` | `"en"`)
  - Switches active font family on `<html>`

### 2. Translation Files

**Files:**
- `web/src/locales/fa.json` — all Persian strings extracted from components
- `web/src/locales/en.json` — English translations (creative, not literal)

**Key structure (namespaced by page/section):**
```json
{
  "nav": {},
  "home": {},
  "about": {},
  "contact": {},
  "footer": {},
  "products": {
    "plex": {},
    "pixel": {},
    "pulse": {}
  },
  "bi_solution": {},
  "modal": {}
}
```

### 3. `useTranslation` Hook

**File:** `web/src/hooks/useTranslation.ts`

- Reads current language from `LanguageContext`
- Returns `t(key: string): string` — dot-notation key lookup into active locale JSON
- Example: `t("nav.home")` → `"Home"` or `"خانه"`

---

## Language Switcher UI

### Desktop Navbar
- Added to the right end of `tubelight-navbar.tsx`
- Button shows `EN` when Persian is active, `فا` when English is active
- Styled to match existing navbar aesthetics (subtle border, matching font size)

### Mobile Menu
- Same toggle at the bottom of the mobile drawer
- Full-width, consistent with existing mobile menu item styling

### Font Handling
- Persian: IRANSans (already in use)
- English: Inter (system font stack or Tailwind default)
- `font-family` on `<html>` switches when language changes

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
| `web/index.html` | Remove hardcoded `dir="rtl"` and `lang="fa"` |
| `web/src/App.tsx` | Replace hardcoded strings with `t()` calls |
| `web/src/pages/AboutPage.tsx` | Replace hardcoded strings |
| `web/src/pages/ContactPage.tsx` | Replace hardcoded strings |
| `web/src/pages/BiSolutionPage.tsx` | Replace hardcoded strings |
| `web/src/pages/PlexPage.tsx` | Replace hardcoded strings |
| `web/src/pages/PixelPage.tsx` | Replace hardcoded strings |
| `web/src/pages/PulsePage.tsx` | Replace hardcoded strings |
| `web/src/pages/dashboards/MaintenanceDashboardPage.tsx` | Replace hardcoded strings |
| `web/src/components/ui/footer-section.tsx` | Replace hardcoded strings |
| `web/src/components/ui/tubelight-navbar.tsx` | Add language switcher + replace strings |
| `web/src/components/ui/consultation-modal.tsx` | Replace hardcoded strings |

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
- Right-to-left specific layout fixes beyond `dir` attribute
- Any new pages or features
