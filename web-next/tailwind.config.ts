import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "shine-size": "300% 300%",
      },
      keyframes: {
        shine: {
          "0%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
        "daana-flow": {
          to: { strokeDashoffset: "-16" },
        },
        "daana-packet-x": {
          "0%": { insetInlineStart: "0%", opacity: "0" },
          "15%, 85%": { opacity: "1" },
          "100%": { insetInlineStart: "100%", opacity: "0" },
        },
        "puzzle-pulse": {
          "0%, 40%, 100%": { opacity: "0" },
          "12%": { opacity: "0.75" },
        },
        "daana-packet-y": {
          "0%": { top: "0%", opacity: "0" },
          "15%, 85%": { opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
      },
      animation: {
        shine: "shine var(--duration) infinite linear",
        "daana-flow": "daana-flow 1s linear infinite",
        "puzzle-pulse": "puzzle-pulse 3.6s ease-in-out infinite",
        "daana-packet-x": "daana-packet-x 2.4s cubic-bezier(0.4,0,0.2,1) infinite",
        "daana-packet-y": "daana-packet-y 2.4s cubic-bezier(0.4,0,0.2,1) infinite",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
      },
    },
  },
  plugins: [typography],
} satisfies Config;
