"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Inline typewriter for a short run of text inside a sentence.
 *
 * Two constraints shape this:
 *
 * 1. It sits mid-paragraph, so the surrounding sentence must not reflow while
 *    the characters arrive. An invisible full copy holds the inline box open
 *    and the typed copy is absolutely positioned over it.
 *
 * 2. The text carries `.text-gradient`, which is `background-clip: text`. A
 *    per-character opacity reveal would not hide anything, because the gradient
 *    is painted by the element's background rather than by the glyphs, so the
 *    reveal slices the real string and lets the gradient paint the prefix.
 */
export function TypedText({
  text,
  className,
  speed = 90,
  startDelay = 550,
}: {
  text: string;
  /** Applied to both copies so their metrics match exactly. */
  className?: string;
  /** Milliseconds per character. */
  speed?: number;
  /** Pause before the first character. */
  startDelay?: number;
}) {
  const reduce = useReducedMotion();
  const total = text.length;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (reduce) {
      setCount(total);
      return;
    }
    setCount(0);
    let i = 0;
    let timer: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        i += 1;
        setCount(i);
        if (i >= total) clearInterval(timer);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [reduce, total, speed, startDelay]);

  const done = count >= total;

  return (
    <span className="relative inline-block align-baseline" aria-label={text}>
      {/* Holds the inline box open so the sentence never reflows. */}
      <span className={cn("invisible", className)} aria-hidden>
        {text}
      </span>

      <span
        className={cn("absolute left-0 top-0 whitespace-pre", className)}
        aria-hidden
      >
        {text.slice(0, count)}
        {!done && (
          /* Zero-width, so the caret never nudges the text it trails. */
          <span className="relative inline-block w-0 align-baseline">
            <span className="absolute left-0 top-[0.12em] block h-[0.76em] w-[3px] animate-caret rounded-full bg-cyan" />
          </span>
        )}
      </span>
    </span>
  );
}
