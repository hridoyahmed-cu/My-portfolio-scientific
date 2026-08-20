"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import {
  orderedResourceCategories,
  resourceFilters,
  resourceTierMeta,
  RESOURCE_FILTER_ALL,
  type ResourceTier,
} from "@/data/resources";
import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";
import { CategorySection } from "./CategorySection";

/** Live search + category filtering over the resource library. */
export function ResourcesExplorer() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(RESOURCE_FILTER_ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return orderedResourceCategories
      .filter((c) => active === RESOURCE_FILTER_ALL || c.title === active)
      .map((c) => ({
        ...c,
        links: c.links.filter(
          (l) =>
            !q ||
            l.name.toLowerCase().includes(q) ||
            l.description.toLowerCase().includes(q) ||
            c.title.toLowerCase().includes(q),
        ),
      }))
      .filter((c) => c.links.length > 0);
  }, [query, active]);

  const totalShown = filtered.reduce((n, c) => n + c.links.length, 0);

  return (
    <div>
      {/* Sticky controls */}
      <div className="sticky top-16 z-20 -mx-6 mb-12 border-b border-border bg-background/85 px-6 py-4 backdrop-blur-md">
        {/* Search */}
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools, databases, courses…"
            aria-label="Search resources"
            className="focus-ring w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-10 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-300 hover:border-cyan/40"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="focus-ring absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>

        {/* Category filter chips */}
        <div
          className="mt-3 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter resources by category"
        >
          {resourceFilters.map((f) => {
            const isActive = active === f.title;
            return (
              <button
                key={f.title}
                type="button"
                onClick={() => setActive(f.title)}
                aria-pressed={isActive}
                className={cn(
                  "focus-ring inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all duration-300",
                  isActive
                    ? "border-transparent bg-gradient-to-r from-cyan to-indigo text-white shadow-soft"
                    : "border-border bg-card text-muted-foreground hover:-translate-y-0.5 hover:border-cyan/40 hover:text-foreground",
                )}
              >
                <Icon name={f.icon} className="h-3.5 w-3.5" aria-hidden />
                {f.title}
              </button>
            );
          })}
        </div>

        <p className="mt-3 text-xs text-muted-foreground" aria-live="polite">
          Showing {totalShown} resource{totalShown === 1 ? "" : "s"}
          {active !== RESOURCE_FILTER_ALL ? ` in ${active}` : ""}
          {query ? ` matching “${query}”` : ""}.
        </p>
      </div>

      {/* Results */}
      <div className="space-y-14">
        <AnimatePresence mode="popLayout">
          {filtered.length === 0 ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="surface flex flex-col items-center justify-center gap-2 p-12 text-center"
            >
              <Search className="h-7 w-7 text-muted-foreground" aria-hidden />
              <p className="font-medium text-foreground">No resources found</p>
              <p className="text-sm text-muted-foreground">
                Nothing matches your search. Try a different term or clear the
                filters.
              </p>
            </motion.div>
          ) : (
            filtered.map((c, i) => {
              /* Research tools and student material are separated by a heading
                 so the field tools are not read as part of the IELTS section. */
              const isTierStart =
                i === 0 || filtered[i - 1].tier !== c.tier;
              const tier = resourceTierMeta[c.tier as ResourceTier];

              return (
                <motion.div
                  key={c.title}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {isTierStart ? (
                    <div
                      id={tier.id}
                      className="mb-8 scroll-mt-32 border-b border-border pb-4"
                    >
                      <h2 className="heading-display text-2xl">{tier.title}</h2>
                      <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">
                        {tier.description}
                      </p>
                    </div>
                  ) : null}
                  <CategorySection category={c} />
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
