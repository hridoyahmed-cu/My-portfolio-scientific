import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/Badge";
import { TechniqueInventory } from "@/components/research/TechniqueInventory";
import { LabFigures } from "@/components/research/LabFigures";
import { techniqueInventory } from "@/data/research";
import { certifications } from "@/data/skills";
import { benchProjects } from "@/data/projects";
import { labGalleryItems } from "@/data/gallery";
import { withBasePath } from "@/lib/utils";
import { SectionDivider } from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Laboratory Techniques",
  alternates: { canonical: "/research/techniques/" },
  description:
    "Primary laboratory data - PCR gel, Sanger electropherogram, and read-quality profile - alongside the wet-lab techniques run first-hand: DNA extraction, PCR and qPCR, gel electrophoresis, and targeted panel and whole-exome library workflows.",
};

const benchBlocks = techniqueInventory.filter((t) => t.kind === "bench");
const analysisBlocks = techniqueInventory.filter((t) => t.kind !== "bench");

export default function TechniquesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Laboratory"
        title="Techniques at the bench"
        description="The hands-on half of the research programme, starting with the data itself: a gel, a chromatogram, and a quality profile from the MMP variant study. Techniques and computational tooling follow."
      />

      {/* Primary data - the evidence comes first, before any list of skills. */}
      <section id="primary-data" className="container scroll-mt-24 py-16">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="heading-display text-2xl">Primary data</h2>
          <Badge accent="emerald">
            <Icon name="FlaskConical" className="h-3 w-3" aria-hidden />
            Generated at the bench
          </Badge>
        </div>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          Three figures from the M.Sc. thesis cohort. The electropherogram and
          quality profile are rendered straight from the raw{" "}
          <span className="font-plex">.ab1</span> records, so every point shown
          is measured data.
        </p>
        <div className="mt-10">
          <LabFigures />
        </div>
      </section>

      <SectionDivider />

      {/* Bench techniques */}
      <section className="bg-card/30 py-16">
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="heading-display text-2xl">Wet-lab techniques</h2>
            <Badge accent="emerald">
              <Icon name="FlaskConical" className="h-3 w-3" aria-hidden />
              Hands-on
            </Badge>
          </div>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Performed at the Functional Genomics &amp; Proteomics Laboratory,
            University of Chittagong, and during research placements at the
            National Institute of Biotechnology and the Alternative Medicine
            &amp; Natural Product Research Lab.
          </p>
          <div className="mt-10">
            <TechniqueInventory blocks={benchBlocks} />
          </div>
        </div>
      </section>

      <SectionDivider flip />

      {/* Where the techniques were applied */}
      <section className="py-16">
        <div className="container">
          <h2 className="heading-display text-2xl">Where these were applied</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">
            Studies in which I generated the underlying data at the bench, with
            sample counts where a cohort was involved.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benchProjects.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.05}>
                <div className="surface h-full p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge accent="emerald">
                      <Icon name="FlaskConical" className="h-3 w-3" aria-hidden />
                      Bench
                    </Badge>
                    <Badge accent="muted">{p.status}</Badge>
                  </div>
                  <h3 className="mt-3 font-display text-sm font-semibold leading-snug text-foreground">
                    {p.title}
                  </h3>
                  {p.cohort ? (
                    <p className="mt-2 font-plex text-xs text-cyan">{p.cohort}</p>
                  ) : null}
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.objective}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Analysis stack */}
      <section className="container py-16">
        <h2 className="heading-display text-2xl">Sequencing analysis & computation</h2>
        <p className="mt-2 max-w-3xl text-muted-foreground">
          What happens to the data after it leaves the bench.
        </p>
        <div className="mt-10">
          <TechniqueInventory blocks={analysisBlocks} />
        </div>
      </section>

      <SectionDivider flip />

      {/* Training & certification */}
      <section className="bg-card/30 py-16">
        <div className="container">
          <h2 className="heading-display text-2xl">Training & certification</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 0.05}>
                <div className="surface h-full p-6">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-cyan">{c.provider}</p>
                  <ul className="mt-3 space-y-1.5">
                    {c.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-emerald" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Laboratory photographs - populated by tagging gallery items "Lab & Bench" */}
      {labGalleryItems.length > 0 ? (
        <section className="container py-16">
          <h2 className="heading-display text-2xl">From the laboratory</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {labGalleryItems.map((item) => (
              <figure
                key={item.src}
                className="surface overflow-hidden rounded-xl"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath(item.src)}
                  alt={item.alt}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="p-3 text-xs leading-relaxed text-muted-foreground">
                  {item.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
