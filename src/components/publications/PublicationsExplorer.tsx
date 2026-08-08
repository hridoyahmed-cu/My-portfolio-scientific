"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  publications as allPublications,
  publicationFilters,
  type Publication,
  type PublicationType,
} from "@/data/publications";
import { PublicationCard } from "./PublicationCard";
import { cn } from "@/lib/utils";

type Props = {
  withSearch?: boolean;
  items?: Publication[];
};

type Filter = PublicationType | "All";

export function PublicationsExplorer({ withSearch = false, items }: Props) {
  const data = items ?? allPublications;
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"newest" | "oldest">("newest");

  const filtered = useMemo(() => {
    let list = data.filter((p) => (filter === "All" ? true : p.type === filter));
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.authors.toLowerCase().includes(q) ||
          p.journal.toLowerCase().includes(q) ||
          p.domain.toLowerCase().includes(q),
      );
    }
    return [...list].sort((a, b) =>
      sort === "newest" ? b.year - a.year : a.year - b.year,
    );
  }, [data, filter, query, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {publicationFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "focus-ring rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                filter === f
                  ? "border-navy bg-navy text-white"
                  : "border-border bg-card text-muted-foreground hover:border-cyan/50 hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {withSearch ? (
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search title, author, journal…"
                className="focus-ring w-full rounded-full border border-border bg-card py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground md:w-64"
              />
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as "newest" | "oldest")}
              aria-label="Sort publications"
              className="focus-ring rounded-full border border-border bg-card px-3 py-2 text-sm text-foreground"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        ) : null}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {filtered.map((pub) => (
          <PublicationCard key={pub.id} pub={pub} />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-sm text-muted-foreground">
          No publications match your search.
        </p>
      ) : null}
    </div>
  );
}
