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
      <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
        {galleryItems.map((item, i) => (
          <motion.button
            key={item.src}
            type="button"
            onClick={() => setIndex(i)}
            initial={reduce ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 8) * 0.04 }}
            className="focus-ring group block w-full break-inside-avoid overflow-hidden rounded-xl border border-border bg-card"
            aria-label={`Open image ${i + 1} of ${galleryItems.length}`}
          >
            <span className="relative block">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(item.src)}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
              />
              {/* Showcase overlay — gradient wash + reveal on hover */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-1.5 items-center gap-1.5 p-3 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <Expand className="h-4 w-4" />
                View photo
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
            transition={{ duration: 0.2 }}
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
              initial={reduce ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-h-[86vh] w-auto max-w-[90vw] px-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(galleryItems[index].src)}
                alt={galleryItems[index].alt}
                className="mx-auto max-h-[80vh] w-auto rounded-lg object-contain shadow-lift"
              />
              <figcaption className="mt-3 text-center text-sm text-white/70">
                {index + 1} / {galleryItems.length}
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
