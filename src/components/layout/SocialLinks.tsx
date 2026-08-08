import { Github, Linkedin, Mail, NotebookPen } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/* Brand glyphs that lucide does not provide, drawn as simple inline SVGs. */
function OrcidGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zM7.37 18.13H5.62V7.7h1.75v10.43zM6.49 6.49a1.02 1.02 0 1 1 0-2.04 1.02 1.02 0 0 1 0 2.04zM18.38 13.2c0 2.98-1.9 4.93-4.68 4.93H9.86V7.7h3.84c2.78 0 4.68 1.95 4.68 4.93zm-1.79 0c0-2.16-1.34-3.34-3.07-3.34h-1.91v6.68h1.91c1.57 0 3.07-1 3.07-3.34z" />
    </svg>
  );
}

function ResearchGateGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden fill="currentColor">
      <path d="M19.59 0H4.41A4.41 4.41 0 0 0 0 4.41v15.18A4.41 4.41 0 0 0 4.41 24h15.18A4.41 4.41 0 0 0 24 19.59V4.41A4.41 4.41 0 0 0 19.59 0zM8.5 14.62c-.42.45-1.02.68-1.78.68-.8 0-1.43-.25-1.87-.74-.44-.5-.66-1.2-.66-2.08V10.4c0-.9.22-1.6.67-2.1.45-.5 1.08-.74 1.88-.74.76 0 1.35.22 1.76.66.4.44.62 1.06.65 1.86H7.93c0-.45-.08-.77-.22-.95-.14-.18-.37-.27-.7-.27-.32 0-.56.11-.71.34-.15.22-.23.58-.23 1.08v2.16c0 .5.08.86.24 1.09.16.22.42.34.78.34.27 0 .48-.06.62-.18l.12-.1v-1.27H6.84v-1.2H9.2v3.02c-.18.27-.42.5-.7.73zm8.71.55h-1.67l-1.2-2.85h-.96v2.85h-1.55V7.7h2.5c.86 0 1.52.2 1.98.6.46.4.69.98.69 1.74 0 1.05-.4 1.78-1.2 2.2l1.41 2.93zm-2.05-4.16c.2-.18.3-.46.3-.83 0-.38-.1-.66-.3-.85-.2-.19-.5-.28-.9-.28h-.88v2.24h.88c.4 0 .7-.09.9-.28z" />
    </svg>
  );
}

function ScholarGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden fill="currentColor">
      <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zm-7 9.27v3.5L12 19l7-3.23v-3.5L12 16 5 12.27z" />
    </svg>
  );
}

type SocialItem = {
  label: string;
  href: string;
  glyph: ReactNode;
};

function buildItems(): SocialItem[] {
  const s = siteConfig.socials;
  const items: SocialItem[] = [];
  if (s.googleScholar)
    items.push({ label: "Google Scholar", href: s.googleScholar, glyph: <ScholarGlyph /> });
  if (s.orcid) items.push({ label: "ORCID", href: s.orcid, glyph: <OrcidGlyph /> });
  if (s.researchgate)
    items.push({ label: "ResearchGate", href: s.researchgate, glyph: <ResearchGateGlyph /> });
  if (s.linkedin)
    items.push({ label: "LinkedIn", href: s.linkedin, glyph: <Linkedin className="h-[18px] w-[18px]" /> });
  if (s.github)
    items.push({ label: "GitHub", href: s.github, glyph: <Github className="h-[18px] w-[18px]" /> });
  if (s.blog)
    items.push({ label: "Blog", href: s.blog, glyph: <NotebookPen className="h-[18px] w-[18px]" /> });
  items.push({
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    glyph: <Mail className="h-[18px] w-[18px]" />,
  });
  return items;
}

export function SocialLinks({ className }: { className?: string }) {
  const items = buildItems();
  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {items.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target={item.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            aria-label={item.label}
            title={item.label}
            className="social-pop focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground"
          >
            {item.glyph}
          </a>
        </li>
      ))}
    </ul>
  );
}
