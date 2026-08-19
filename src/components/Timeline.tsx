"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { timeline, type TimelineKind } from "@/data/timeline";
import { cn } from "@/lib/utils";

/** Tinted ring + coloured drop shadow so each card reads as its own object. */
const kindCard: Record<TimelineKind, string> = {
  Education:
    "ring-blue/30 shadow-[0_14px_38px_-14px_hsl(var(--blue)/0.55)] hover:ring-blue/60",
  Research:
    "ring-cyan/30 shadow-[0_14px_38px_-14px_hsl(var(--cyan)/0.55)] hover:ring-cyan/60",
  Publication:
    "ring-emerald/30 shadow-[0_14px_38px_-14px_hsl(var(--emerald)/0.55)] hover:ring-emerald/60",
  Award:
    "ring-gold/30 shadow-[0_14px_38px_-14px_hsl(var(--gold)/0.55)] hover:ring-gold/60",
  Leadership:
    "ring-blue/30 shadow-[0_14px_38px_-14px_hsl(var(--blue)/0.55)] hover:ring-blue/60",
};

/** Halo on the node itself, so it reads against the thicker track. */
const kindNodeGlow: Record<TimelineKind, string> = {
  Education: "shadow-[0_0_0_4px_hsl(var(--blue)/0.16),0_0_14px_2px_hsl(var(--blue)/0.5)]",
  Research: "shadow-[0_0_0_4px_hsl(var(--cyan)/0.16),0_0_14px_2px_hsl(var(--cyan)/0.5)]",
  Publication:
    "shadow-[0_0_0_4px_hsl(var(--emerald)/0.16),0_0_14px_2px_hsl(var(--emerald)/0.5)]",
  Award: "shadow-[0_0_0_4px_hsl(var(--gold)/0.16),0_0_14px_2px_hsl(var(--gold)/0.5)]",
  Leadership:
    "shadow-[0_0_0_4px_hsl(var(--blue)/0.16),0_0_14px_2px_hsl(var(--blue)/0.5)]",
};

const kindAccent: Record<TimelineKind, string> = {
  Education: "text-blue bg-blue/10 border-blue/30",
  Research: "text-cyan bg-cyan/10 border-cyan/30",
  Publication: "text-emerald bg-emerald/10 border-emerald/30",
  Award: "text-gold bg-gold/10 border-gold/30",
  Leadership: "text-blue bg-blue/10 border-blue/30",
};

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <div ref={ref} className="relative mt-14">
      {/* track */}
      <div className="absolute left-[20px] top-0 h-full w-[3px] rounded-full bg-border md:left-1/2 md:-translate-x-1/2" />
      {/* progress fill */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-[20px] top-0 h-full w-[3px] origin-top rounded-full bg-gradient-to-b from-blue via-cyan to-emerald shadow-[0_0_18px_3px_hsl(var(--cyan)/0.55)] md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="space-y-10">
        {timeline.map((entry, i) => {
          const left = i % 2 === 0;
          return (
            <li key={entry.title} className="group relative md:grid md:grid-cols-2 md:gap-10">
              {/* node */}
              <span
                className={cn(
                  "timeline-node absolute left-[11px] top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full border-2 bg-background md:left-1/2 md:-translate-x-1/2",
                  kindAccent[entry.kind],
                  kindNodeGlow[entry.kind],
                )}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-[1.7]" />
              </span>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5 }}
                className={cn(
                  "ml-10 md:ml-0",
                  left ? "md:col-start-1 md:text-right" : "md:col-start-2",
                )}
              >
                <div
                  className={cn(
                    "surface surface-hover inline-block w-full p-6 text-left ring-1 transition-all duration-300",
                    kindCard[entry.kind],
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center gap-2",
                      left && "md:flex-row-reverse",
                    )}
                  >
                    <span
                      className={cn(
                        "inline-flex h-8 w-8 items-center justify-center rounded-lg border",
                        kindAccent[entry.kind],
                      )}
                    >
                      <Icon name={entry.icon} className="h-4 w-4" aria-hidden />
                    </span>
                    <span className="font-plex text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {entry.period} · {entry.kind}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold text-foreground">
                    {entry.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{entry.place}</p>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    {entry.description}
                  </p>
                </div>
              </motion.div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
