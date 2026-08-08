import { ArrowUpRight, FileText, Quote } from "lucide-react";
import type { Publication } from "@/data/publications";
import { Badge } from "@/components/ui/Badge";

function AuthorLine({ authors, highlight }: { authors: string; highlight: string }) {
  const parts = authors.split(highlight);
  if (parts.length === 1) return <span>{authors}</span>;
  return (
    <span>
      {parts[0]}
      <strong className="font-semibold text-foreground">{highlight}</strong>
      {parts.slice(1).join(highlight)}
    </span>
  );
}

export function PublicationCard({ pub }: { pub: Publication }) {
  return (
    <article className="surface card-scan group flex h-full flex-col p-6">
      <div className="flex flex-wrap items-center gap-2">
        <Badge accent="gold">{pub.tier} Journal</Badge>
        <Badge accent="cyan">{pub.type}</Badge>
        <span className="ml-auto font-plex text-sm text-muted-foreground">
          {pub.year}
        </span>
      </div>

      <h3 className="scan-title relative z-[1] mt-4 font-display text-lg font-semibold leading-snug text-foreground">
        {pub.title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        <AuthorLine authors={pub.authors} highlight={pub.authorHighlight} />
      </p>

      <p className="mt-3 font-plex text-sm text-foreground/90">
        <span className="italic">{pub.journal}</span>
        {pub.volume ? `, ${pub.volume}` : ""}
        {pub.pages ? `, ${pub.pages}` : ""}
        {pub.publisher ? ` · ${pub.publisher}` : ""}
      </p>

      <ul className="mt-4 space-y-1.5 border-l-2 border-cyan/30 pl-4">
        {pub.highlights.map((h) => (
          <li key={h} className="text-sm leading-relaxed text-muted-foreground">
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-2 pt-1">
        <a
          href={pub.url}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-navy px-3.5 py-1.5 text-xs font-semibold text-white transition-transform hover:-translate-y-0.5"
        >
          <Quote className="h-3.5 w-3.5" /> View article
        </a>
        {pub.doi ? (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            DOI <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        ) : null}
        {pub.pdf ? (
          <a
            href={pub.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-cyan/50 hover:text-cyan"
          >
            <FileText className="h-3.5 w-3.5" /> PDF
          </a>
        ) : null}
      </div>
    </article>
  );
}
