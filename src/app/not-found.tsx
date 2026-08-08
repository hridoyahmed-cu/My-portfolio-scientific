import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-bold text-gradient">404</p>
      <h1 className="heading-display mt-4 text-2xl">This page could not be found</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The link may be broken or the page may have moved. Let's get you back to
        the research.
      </p>
      <Link
        href="/"
        className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lift"
      >
        <ArrowLeft className="h-4 w-4" /> Back to home
      </Link>
    </section>
  );
}
