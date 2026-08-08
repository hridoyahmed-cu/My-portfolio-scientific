"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, SunMoon } from "lucide-react";

type ThemeMode = "light" | "dark" | "auto";

/** Clock-based auto: dark between 7 PM and 6 AM (visitor's local time). */
const DARK_START = 19; // 7 PM
const DARK_END = 6; // 6 AM

function autoIsDark(): boolean {
  const h = new Date().getHours();
  return h >= DARK_START || h < DARK_END;
}

function resolveDark(mode: ThemeMode): boolean {
  if (mode === "dark") return true;
  if (mode === "light") return false;
  return autoIsDark();
}

function readMode(): ThemeMode {
  try {
    const t = localStorage.getItem("theme");
    if (t === "light" || t === "dark" || t === "auto") return t;
  } catch {
    /* storage unavailable */
  }
  return "auto"; // default
}

/** Cycle order: Auto → Light → Dark → Auto */
const NEXT: Record<ThemeMode, ThemeMode> = {
  auto: "light",
  light: "dark",
  dark: "auto",
};

const LABEL: Record<ThemeMode, string> = {
  auto: "Auto (day / night)",
  light: "Light",
  dark: "Dark",
};

const ICON = { auto: SunMoon, light: Sun, dark: Moon } as const;

/**
 * Three-state theme control. Defaults to "Auto", which follows the visitor's
 * local clock (dark 7 PM–6 AM). The initial class is applied by an inline
 * script in layout.tsx to avoid a flash; this just keeps it in sync and lets
 * the visitor override the choice. The chosen mode is persisted in localStorage.
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [mode, setMode] = useState<ThemeMode>("auto");

  useEffect(() => {
    setMounted(true);
    setMode(readMode());
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const apply = () =>
      document.documentElement.classList.toggle("dark", resolveDark(mode));
    apply();
    if (mode !== "auto") return;
    // Re-check each minute so Auto flips at the 7 PM / 6 AM boundary while open.
    const id = setInterval(apply, 60_000);
    return () => clearInterval(id);
  }, [mode, mounted]);

  function cycle() {
    const next = NEXT[mode];
    setMode(next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* storage unavailable */
    }
  }

  const Icon = mounted ? ICON[mode] : SunMoon;

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${LABEL[mode]}. Click to switch to ${LABEL[NEXT[mode]]}.`}
      title={`Theme: ${LABEL[mode]}`}
      className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-cyan/50 hover:text-cyan"
    >
      <Icon className="h-[18px] w-[18px]" />
      <span className="sr-only">{LABEL[mode]} theme</span>
    </button>
  );
}
