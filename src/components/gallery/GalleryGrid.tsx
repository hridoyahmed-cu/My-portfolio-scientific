"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Expand } from "lucide-react";
import { orderedGalleryItems as galleryItems } from "@/data/gallery";
import { withBasePath } from "@/lib/utils";

export function GalleryGrid() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % galleryItems.length)),
    [],
  );
  const prev = useCallback(
    () =>
      setIndex((i) =>
        i === null ? i : (i - 1 + galleryItems.length) % galleryItems.length,
      ),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <>
      <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
        {galleryItems.map((item, i) => (
          <motion.button
            key={item.src}
            type="button"
            onClick={() => setIndex(i)}
            // Slow, soft settle rather than a quick pop: a long ease-out curve,
            // a small drift and a barely-there zoom, staggered a row at a time.
            initial={reduce ? false : { opacity: 0, y: 26, scale: 0.985 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 1.15,
              delay: (i % 4) * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="focus-ring group block w-full break-inside-avoid overflow-hidden rounded-xl border border-border bg-card text-left transition-shadow duration-700 ease-out hover:shadow-lift"
            aria-label={`Open image ${i + 1} of ${galleryItems.length}: ${item.alt}`}
          >
            <span className="relative block overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(item.src)}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
              />
              {/* Gentle wash, and the open affordance on hover. */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/5 to-transparent opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-center gap-1.5 p-3 text-xs font-semibold text-white opacity-0 transition-all duration-700 ease-out group-hover:translate-y-0 group-hover:opacity-100">
                <Expand className="h-4 w-4" />
                View photo
              </span>
            </span>

            {/* Caption stays visible: an uncaptioned research photograph is
                decoration. Clamped so a long one cannot unbalance the masonry. */}
            <span className="block px-3.5 pb-3.5 pt-3">
              <span className="line-clamp-3 text-[12.5px] leading-snug text-muted-foreground transition-colors duration-500 group-hover:text-foreground/90">
                {item.alt}
              </span>
            </span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open && index !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="focus-ring absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous image"
              className="focus-ring absolute left-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:left-6"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next image"
              className="focus-ring absolute right-3 top-1/2 inline-flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 sm:right-6"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            <motion.figure
              key={index}
              initial={reduce ? false : { opacity: 0, scale: 0.975 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-h-[86vh] w-auto max-w-[90vw] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(galleryItems[index].src)}
                alt={galleryItems[index].alt}
                className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain shadow-lift"
              />
              <figcaption className="mx-auto mt-4 max-w-2xl text-center">
                <span className="block text-sm leading-relaxed text-white/85">
                  {galleryItems[index].alt}
                </span>
                <span className="mt-1.5 block text-xs text-white/50">
                  {galleryItems[index].category} &middot; {index + 1} /{" "}
                  {galleryItems.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
