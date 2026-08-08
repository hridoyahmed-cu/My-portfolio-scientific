"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Images } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { galleryItems } from "@/data/gallery";
import { withBasePath } from "@/lib/utils";

/** Featured subset shown in the homepage slideshow. */
const slides = galleryItems.slice(0, 20);
const AUTOPLAY_MS = 1000;

export function GalleryHighlights() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLDivElement>(null);

  const count = slides.length;
  const go = useCallback(
    (next: number) => setIndex((i) => (next + count) % count),
    [count],
  );
  const prev = useCallback(() => go(index - 1), [go, index]);
  const next = useCallback(() => go(index + 1), [go, index]);

  // Autoplay with infinite loop; pauses on hover, focus, or reduced motion.
  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reduce, count]);

  // Keyboard navigation when the carousel has focus.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    }
  };

  const active = slides[index];

  return (
    <section
      id="gallery"
      className="relative scroll-mt-24 overflow-hidden border-y border-border bg-card/30 py-24"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-indigo/10 blur-3xl" aria-hidden />
      <div className="container relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Gallery Highlights"
            title="A glimpse of the journey"
            description="Conferences, award ceremonies, BioPC workshops, and life in the laboratory and on campus."
          />
          <Reveal>
            <Link
              href="/gallery"
              className="btn-shift focus-ring group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white"
            >
              <Images className="h-4 w-4" />
              View Full Gallery
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <Reveal className="mt-10">
          <div
            ref={regionRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Gallery highlights slideshow"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            className="focus-ring group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
          >
            {/* Slides — crossfade with swipe support */}
            <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
              <AnimatePresence initial={false} mode="popLayout">
                <motion.div
                  key={active.src}
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  onDragEnd={(_, info) => {
                    if (info.offset.x < -80) next();
                    else if (info.offset.x > 80) prev();
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={withBasePath(active.src)}
                    alt={active.alt}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                    className="h-full w-full select-none object-cover"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
                  <p className="pointer-events-none absolute inset-x-0 bottom-0 line-clamp-2 p-5 text-sm font-medium text-white/90 sm:p-6 sm:text-base">
                    {active.alt}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Prev / Next controls */}
              <button
                type="button"
                onClick={prev}
                aria-label="Previous slide"
                className="focus-ring absolute left-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-navy/40 text-white backdrop-blur transition-all hover:scale-110 hover:bg-navy/70 sm:left-4"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next slide"
                className="focus-ring absolute right-3 top-1/2 z-10 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-navy/40 text-white backdrop-blur transition-all hover:scale-110 hover:bg-navy/70 sm:right-4"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Pagination dots */}
            <div
              className="flex flex-wrap items-center justify-center gap-2 py-4"
              role="tablist"
              aria-label="Choose slide"
            >
              {slides.map((s, i) => (
                <button
                  key={s.src}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => go(i)}
                  className={
                    i === index
                      ? "h-2 w-6 rounded-full bg-gradient-to-r from-cyan to-indigo transition-all duration-300"
                      : "h-2 w-2 rounded-full bg-muted-foreground/40 transition-all duration-300 hover:bg-cyan/70"
                  }
                />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Screen-reader live status */}
        <p className="sr-only" aria-live="polite">
          Slide {index + 1} of {count}
        </p>
      </div>
    </section>
  );
}
