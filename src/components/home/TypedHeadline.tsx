"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export type HeadlineSegment = { text: string; gradient?: boolean };

/**
 * Typewriter headline.
 *
 * Two details drive the implementation:
 *
 * 1. The accent words use `.text-gradient`, which is `background-clip: text` on
 *    the wrapper. A per-character opacity reveal would not hide those letters,
 *    because the gradient is painted by the parent's background rather than by
 *    the glyphs. So the reveal slices the real string instead, and the gradient
 *    is applied to whatever prefix is currently rendered.
 *
 * 2. A full, invisible copy of the headline sits in the same grid cell and
 *    reserves the final box, so the hero never grows or reflows as lines are
 *    added. Because line breaking is greedy, the prefix breaks lines in exactly
 *    the same places the full text does, and `text-justify` leaves the last
 *    (in-progress) line unjustified on its own, so nothing stretches oddly
 *    while typing.
 */
export function TypedHeadline({
  segments,
  className,
  speed = 52,
  startDelay = 350,
}: {
  segments: HeadlineSegment[];
  className?: string;
  /** Milliseconds per character. */
  speed?: number;
  /** Pause before the first character, so the hero settles first. */
  startDelay?: number;
}) {
  const reduce = useReducedMotion();
  const full = segments.map((s) => s.text).join("");
  const total = full.length;

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

  /** Render the segments truncated to `upto` characters. */
  const render = (upto: number) => {
    let seen = 0;
    return segments.map((seg, i) => {
      const start = seen;
      seen += seg.text.length;
      const slice = seg.text.slice(0, Math.max(0, Math.min(seg.text.length, upto - start)));
      if (!slice) return null;
      return (
        <span key={i} className={seg.gradient ? "text-gradient" : undefined}>
          {slice}
        </span>
      );
    });
  };

  return (
    <h1 className={cn("grid", className)} aria-label={full}>
      {/* Reserves the final box so the hero never reflows while typing. */}
      <span className="invisible col-start-1 row-start-1" aria-hidden>
        {render(total)}
      </span>

      <span className="col-start-1 row-start-1" aria-hidden>
        {render(count)}
        {!done && (
          /* Zero-width so the caret never shifts the text it follows. */
          <span className="relative inline-block w-0 align-baseline">
            <span className="absolute left-0 top-[0.1em] block h-[0.78em] w-[3px] animate-caret rounded-full bg-cyan" />
          </span>
        )}
      </span>
    </h1>
  );
}
