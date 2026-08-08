import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactCards } from "@/components/contact/ContactCards";
import { siteConfig } from "@/lib/site";
import { withAssetVersion } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  alternates: { canonical: "/contact/" },
  description:
    "Get in touch with Md. Hridoy Ahmed about doctoral positions, research collaborations, fellowships, and bioinformatics training.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        description="I welcome enquiries about doctoral positions, fellowships, research collaborations, co-authorship, and bioinformatics training."
      />

      <section className="container py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="heading-display text-2xl">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the form and your message is delivered straight to my inbox
              — no email app required. You can also reach me on any of the
              platforms listed here.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="surface surface-hover flex items-center gap-4 p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withAssetVersion("/avatar.png")} alt="Md. Hridoy Ahmed" width={64} height={64} className="h-16 w-16 rounded-full border border-border object-cover" />
              <div>
                <p className="font-display text-lg font-semibold text-foreground">Md. Hridoy Ahmed</p>
                <p className="text-sm text-muted-foreground">Researcher · Molecular &amp; Computational Biology</p>
              </div>
            </div>

            <div className="surface p-6">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Connect with me
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Profiles, preprints, and code — reach out on whichever platform
                suits you best.
              </p>
              <ContactCards className="mt-5" />

              <div className="mt-5 flex items-center gap-3 border-t border-border pt-5 text-foreground">
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
          </div>
        </div>
      </section>
    </>
  );
}
