import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="container scroll-mt-24 py-24">
      <Reveal>
        <div className="surface relative overflow-hidden p-8 sm:p-12">
          <div
            className="pointer-events-none absolute inset-0 bg-grid bg-science-grid opacity-40"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-cyan/10 blur-3xl"
            aria-hidden
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title="Let's discuss research, study, and collaboration"
                description="I welcome enquiries about doctoral positions, fellowships, co-authorship, and bioinformatics training. The fastest way to reach me is by email."
              />

              <div className="mt-8 space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="focus-ring group flex items-center gap-3 text-foreground"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-white">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Email
                    </span>
                    <span className="font-medium group-hover:text-cyan">
                      {siteConfig.email}
                    </span>
                  </span>
                </a>
                <div className="flex items-center gap-3 text-foreground">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border">
                    <MapPin className="h-5 w-5 text-cyan" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Based in
                    </span>
                    <span className="font-medium">{siteConfig.location}</span>
                  </span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="btn-shift focus-ring group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white"
                >
                  Go to contact page
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-border bg-background/50 p-6">
              <p className="font-plex text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Find me online
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Profiles, preprints, and code. Connect on whichever platform
                suits you best.
              </p>
              <SocialLinks className="mt-5" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
