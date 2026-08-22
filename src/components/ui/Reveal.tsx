"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  /** Seconds. Raise it for sections that should drift in rather than snap. */
  duration?: number;
  className?: string;
  as?: "div" | "section" | "li" | "article" | "span";
};

/** Scroll-triggered fade/translate reveal that respects reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  y = 44,
  duration = 0.85,
  className,
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y, scale: 0.965 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </MotionTag>
  );
}
