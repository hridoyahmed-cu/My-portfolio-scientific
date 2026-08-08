"use client";

import { motion } from "framer-motion";
import { Icon } from "@/components/ui/icon";
import { ResourceCard } from "./ResourceCard";
import type { ResourceCategory } from "@/data/resources";

/** A category block: gradient header + responsive grid of animated cards. */
export function CategorySection({ category }: { category: ResourceCategory }) {
  return (
    <section className="scroll-mt-28">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 via-blue/15 to-indigo/20 text-cyan">
          <Icon name={category.icon} className="h-5 w-5" aria-hidden />
        </span>
        <h2 className="bg-gradient-to-r from-cyan via-blue to-indigo bg-clip-text font-display text-xl font-semibold text-transparent sm:text-2xl">
          {category.title}
        </h2>
        <span className="ml-1 rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
          {category.links.length}
        </span>
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {category.links.map((link, i) => (
          <motion.div
            key={link.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.45,
              delay: (i % 3) * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <ResourceCard
              link={link}
              category={category.title}
              icon={category.icon}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
