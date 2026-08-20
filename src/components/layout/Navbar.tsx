"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { navGroups } from "@/data/nav";
import { siteConfig } from "@/lib/site";
import { cn, withAssetVersion } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /** A group is active when the current route is any of the routes it owns. */
  const isGroupActive = (match: string[]) =>
    match.some((href) =>
      href === "/" ? pathname === "/" : pathname.startsWith(href),
    );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="focus-ring group flex items-center gap-2.5 rounded-md"
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan/70 via-indigo/60 to-purple/70 p-[1.5px] shadow-soft transition-shadow duration-300 group-hover:shadow-[0_0_14px_2px_rgba(56,189,248,0.45)]">
            <span className="relative inline-flex h-full w-full overflow-hidden rounded-full border border-background bg-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={withAssetVersion("/avatar.png")} alt="Md. Hridoy Ahmed" width={36} height={36} className="h-full w-full object-cover" />
            </span>
            <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-cyan ring-2 ring-background" />
          </span>
        </Link>

        {/* Desktop nav — six groups, each opening on hover and focus. */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navGroups.map((group) => {
            const active = isGroupActive(group.match);
            return (
              <li key={group.href} className="group/nav relative">
                <Link
                  href={group.href}
                  data-active={active}
                  className={cn(
                    "nav-link focus-ring inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium",
                    active ? "text-cyan" : "text-muted-foreground",
                  )}
                >
                  {group.label}
                  {group.children ? (
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover/nav:rotate-180"
                      aria-hidden
                    />
                  ) : null}
                </Link>

                {group.children ? (
                  <div
                    className={cn(
                      "invisible absolute left-0 top-full z-10 w-60 pt-2 opacity-0 transition-all duration-200",
                      "group-hover/nav:visible group-hover/nav:opacity-100",
                      "group-focus-within/nav:visible group-focus-within/nav:opacity-100",
                    )}
                  >
                    <ul className="overflow-hidden rounded-xl border border-border bg-background/97 p-1.5 shadow-lift backdrop-blur-md">
                      {group.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="focus-ring block rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden"
          >
            {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — groups as headings, children indented beneath. */}
      <div
        className={cn(
          "overflow-y-auto border-t border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[80vh]" : "max-h-0 border-t-transparent",
        )}
      >
        <ul className="container space-y-1 py-4">
          {navGroups.map((group) => {
            const active = isGroupActive(group.match);
            return (
              <li key={group.href}>
                <Link
                  href={group.href}
                  className={cn(
                    "focus-ring block rounded-md px-3 py-2.5 text-sm font-semibold transition-colors",
                    active
                      ? "bg-cyan/10 text-cyan"
                      : "text-foreground hover:bg-muted",
                  )}
                >
                  {group.label}
                </Link>
                {group.children ? (
                  <ul className="mb-1 ml-3 border-l border-border pl-3">
                    {group.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="focus-ring block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
