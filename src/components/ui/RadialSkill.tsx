"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Icon } from "./icon";

type RadialSkillProps = {
  label: string;
  value: number;
  icon: string;
  note?: string;
};

/** Animated radial progress dial used in the Scientific Expertise section. */
export function RadialSkill({ label, value, icon, note }: RadialSkillProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const [progress, setProgress] = useState(0);

  const size = 132;
  const stroke = 9;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setProgress(value);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
          role="img"
          aria-label={`${label}: ${value} percent`}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth={stroke}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="url(#radial-gradient)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          <defs>
            <linearGradient id="radial-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(var(--blue))" />
              <stop offset="60%" stopColor="hsl(var(--cyan))" />
              <stop offset="100%" stopColor="hsl(var(--emerald))" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon name={icon} className="mb-1 h-5 w-5 text-cyan" aria-hidden />
          <span className="font-display text-2xl font-semibold text-foreground">
            {progress}
            <span className="text-base text-muted-foreground">%</span>
          </span>
        </div>
      </div>
      <h3 className="mt-4 font-plex text-sm font-semibold text-foreground">
        {label}
      </h3>
      {note ? (
        <p className="mt-1 max-w-[15rem] text-xs leading-relaxed text-muted-foreground">
          {note}
        </p>
      ) : null}
    </div>
  );
}
