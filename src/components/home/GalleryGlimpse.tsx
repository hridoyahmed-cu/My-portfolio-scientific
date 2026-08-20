import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SectionCta } from "@/components/ui/SectionCta";
import { Reveal } from "@/components/ui/Reveal";
import { researchGlimpse } from "@/data/gallery";
import { withBasePath } from "@/lib/utils";
import { cn } from "@/lib/utils";

/**
 * A glimpse of the gallery, research work only.
 *
 * Ten photographs picked for content rather than decoration: the qPCR and
 * sequencing instruments, PCR setup, the laboratory group, a conference talk,
 * a training workshop, and the department. Each carries a real caption, so the
 * strip reads as evidence of the work rather than as a photo dump.
 *
 * The first two are given double width, so the instrument shots - the ones that
 * actually show the bench - lead the grid instead of being lost in a uniform
 * mosaic.
 */
export function GalleryGlimpse() {
  return (
    <section id="gallery" className="container scroll-mt-24 py-24">
      <SectionHeading
        eyebrow="A Glimpse of the Gallery"
        title="The work, in photographs"
        description="Ten frames from the laboratory, the podium, and the lecture hall."
        align="center"
      />

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {researchGlimpse.map((item, i) => (
          <Reveal
            key={item.src}
            delay={(i % 4) * 0.06}
            // The two instrument shots lead at double width. This has to sit on
            // the Reveal, since that is the actual grid child.
            className={cn("h-full", i < 2 && "md:col-span-2")}
          >
            <Link
              href="/gallery"
              className="focus-ring group relative block h-full overflow-hidden rounded-xl border border-border"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={withBasePath(item.src)}
                alt={item.alt}
                loading="lazy"
                className={cn(
                  "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]",
                  i < 2 ? "aspect-[16/9]" : "aspect-[4/3]",
                )}
              />

              {/* Caption plate, always legible rather than hover-only. */}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/60 to-transparent p-3 pt-8">
                <span className="block text-[11px] font-medium leading-snug text-white/90">
                  {item.alt}
                </span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      <SectionCta href="/gallery" label="View the full gallery" />
    </section>
  );
}
