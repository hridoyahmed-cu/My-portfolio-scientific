import { ArrowUpRight } from "lucide-react";
import { Icon } from "@/components/ui/icon";
import type { ResourceLink } from "@/data/resources";

/** A single resource: icon, category badge, name, 2-line description, Visit. */
export function ResourceCard({
  link,
  category,
  icon,
}: {
  link: ResourceLink;
  category: string;
  icon: string;
}) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card-glass surface group flex h-full flex-col p-5"
      aria-label={`${link.name} - opens in a new tab`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan/10 text-cyan transition-colors duration-300 group-hover:bg-indigo/15 group-hover:text-indigo">
          <Icon name={icon} className="h-5 w-5" aria-hidden />
        </span>
        <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
          {category}
        </span>
      </div>

      <h3 className="mt-4 font-display text-base font-semibold leading-snug text-foreground">
        {link.name}
      </h3>
      <p
        className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground"
        title={link.description}
      >
        {link.description}
      </p>

      <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-blue transition-colors duration-300 group-hover:text-indigo">
        Visit
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </a>
  );
}
