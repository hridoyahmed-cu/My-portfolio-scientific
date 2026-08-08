import type { ReactNode } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Brand glyphs lucide does not ship, drawn as small inline SVGs. */
function OrcidGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.37 18.13H5.62V7.7h1.75v10.43zM6.49 6.49a1.02 1.02 0 1 1 0-2.04 1.02 1.02 0 0 1 0 2.04zM18.38 13.2c0 2.98-1.9 4.93-4.68 4.93H9.86V7.7h3.84c2.78 0 4.68 1.95 4.68 4.93zm-1.79 0c0-2.16-1.34-3.34-3.07-3.34h-1.91v6.68h1.91c1.57 0 3.07-1 3.07-3.34z" />
    </svg>
  );
}
function ResearchGateGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="currentColor">
      <path d="M19.59 0H4.41A4.41 4.41 0 0 0 0 4.41v15.18A4.41 4.41 0 0 0 4.41 24h15.18A4.41 4.41 0 0 0 24 19.59V4.41A4.41 4.41 0 0 0 19.59 0zM8.5 14.62c-.42.45-1.02.68-1.78.68-.8 0-1.43-.25-1.87-.74-.44-.5-.66-1.2-.66-2.08V10.4c0-.9.22-1.6.67-2.1.45-.5 1.08-.74 1.88-.74.76 0 1.35.22 1.76.66.4.44.62 1.06.65 1.86H7.93c0-.45-.08-.77-.22-.95-.14-.18-.37-.27-.7-.27-.32 0-.56.11-.71.34-.15.22-.23.58-.23 1.08v2.16c0 .5.08.86.24 1.09.16.22.42.34.78.34.27 0 .48-.06.62-.18l.12-.1v-1.27H6.84v-1.2H9.2v3.02c-.18.27-.42.5-.7.73zm8.71.55h-1.67l-1.2-2.85h-.96v2.85h-1.55V7.7h2.5c.86 0 1.52.2 1.98.6.46.4.69.98.69 1.74 0 1.05-.4 1.78-1.2 2.2l1.41 2.93zm-2.05-4.16c.2-.18.3-.46.3-.83 0-.38-.1-.66-.3-.85-.2-.19-.5-.28-.9-.28h-.88v2.24h.88c.4 0 .7-.09.9-.28z" />
    </svg>
  );
}
function ScholarGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden fill="currentColor">
      <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm-7 9.27v3.5L12 19l7-3.23v-3.5L12 16 5 12.27z" />
    </svg>
  );
}

type CardItem = {
  label: string;
  value: string;
  href: string;
  glyph: ReactNode;
  accent: string; // tailwind text + bg accent classes
};

function buildCards(): CardItem[] {
  const s = siteConfig.socials;
  const scholar =
    s.googleScholar ||
    `https://scholar.google.com/scholar?q=${encodeURIComponent(siteConfig.name)}`;

  const cards: CardItem[] = [
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      glyph: <Mail className="h-5 w-5" />,
      accent: "text-cyan bg-cyan/10",
    },
    {
      label: "LinkedIn",
      value: "Connect professionally",
      href: s.linkedin,
      glyph: <Linkedin className="h-5 w-5" />,
      accent: "text-blue bg-blue/10",
    },
    {
      label: "Google Scholar",
      value: "Citations & publications",
      href: scholar,
      glyph: <ScholarGlyph />,
      accent: "text-indigo bg-indigo/10",
    },
    {
      label: "ResearchGate",
      value: "Research profile",
      href: s.researchgate,
      glyph: <ResearchGateGlyph />,
      accent: "text-teal bg-teal/10",
    },
    {
      label: "ORCID",
      value: "0000-0003-2077-4401",
      href: s.orcid,
      glyph: <OrcidGlyph />,
      accent: "text-emerald bg-emerald/10",
    },
    {
      label: "GitHub",
      value: "Code & projects",
      href: s.github,
      glyph: <Github className="h-5 w-5" />,
      accent: "text-purple bg-purple/10",
    },
  ];

  // Only show cards that have a usable destination.
  return cards.filter((c) => c.href && c.href !== "https://github.com/");
}

export function ContactCards({ className }: { className?: string }) {
  const cards = buildCards();
  return (
    <div className={cn("grid gap-3 sm:grid-cols-2", className)}>
      {cards.map((card) => {
        const isMail = card.href.startsWith("mailto:");
        return (
          <a
            key={card.label}
            href={card.href}
            target={isMail ? undefined : "_blank"}
            rel={isMail ? undefined : "noopener noreferrer"}
            className="contact-card surface group flex items-center gap-3.5 p-4"
          >
            <span
              className={cn(
                "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110",
                card.accent,
              )}
            >
              {card.glyph}
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {card.label}
              </span>
              <span className="block truncate text-sm font-medium text-foreground">
                {card.value}
              </span>
            </span>
            <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan" />
          </a>
        );
      })}
    </div>
  );
}
