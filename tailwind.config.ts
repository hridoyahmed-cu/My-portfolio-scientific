import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/data/**/*.{ts,tsx}",
    // Shared class maps (e.g. the accent card system) live here, so this glob
    // must be present or those utilities are silently dropped from the build.
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Semantic, theme-aware tokens (driven by CSS variables in globals.css)
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        "card-foreground": "hsl(var(--card-foreground) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        "muted-foreground": "hsl(var(--muted-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
        // Brand palette — constant across themes
        navy: "hsl(var(--navy) / <alpha-value>)",
        blue: "hsl(var(--blue) / <alpha-value>)",
        cyan: "hsl(var(--cyan) / <alpha-value>)",
        emerald: "hsl(var(--emerald) / <alpha-value>)",
        gold: "hsl(var(--gold) / <alpha-value>)",
        teal: "hsl(var(--teal) / <alpha-value>)",
        indigo: "hsl(var(--indigo) / <alpha-value>)",
        purple: "hsl(var(--purple) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-source)", "system-ui", "sans-serif"],
        plex: ["var(--font-plex)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "70ch",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(8, 20, 40, 0.05), 0 10px 32px -8px rgba(8, 20, 40, 0.16)",
        lift: "0 20px 54px -12px rgba(8, 20, 40, 0.26)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 7s ease-in-out infinite",
        "spin-slow": "spin-slow 18s linear infinite",
        shimmer: "shimmer 6s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, hsl(var(--border) / 0.5) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border) / 0.5) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
