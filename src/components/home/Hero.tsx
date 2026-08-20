"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { SocialLinks } from "@/components/layout/SocialLinks";
import { TypedText } from "./TypedText";
import { withAssetVersion } from "@/lib/utils";

// Three.js renders only on the client.
const DNAHero = dynamic(() => import("@/components/three/DNAHero"), {
  ssr: false,
});

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: reduce ? {} : { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-16">
      {/* 3D backdrop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute inset-0 opacity-[0.22] dark:opacity-[0.28] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_82%)]">
          <DNAHero />
        </div>
        <div className="absolute inset-0 bg-grid bg-science-grid opacity-20" aria-hidden />
        <div className="absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-blue/10 blur-3xl" aria-hidden />
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-emerald/10 blur-3xl" aria-hidden />
      </div>

      <div className="container grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald/70" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            Open to PhD positions & research collaborations
          </motion.span>

          <motion.h1
            variants={item}
            className="heading-display mt-6 text-justify text-4xl leading-[1.05] sm:text-5xl lg:text-6xl"
          >
            Reading Disease In The{" "}
            <span className="text-gradient">Genome</span>, Starting At The{" "}
            <span className="text-gradient">Bench</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-justify text-lg leading-relaxed text-muted-foreground"
          >
            I am{" "}
            <strong className="font-normal">
              <TypedText
                text="Md. Hridoy Ahmed"
                className="text-gradient font-display text-2xl font-bold tracking-tight sm:text-[1.7rem]"
              />
            </strong>
            , a molecular geneticist working on the genetic basis of complex
            disease. I generate my own data - extraction, PCR, Sanger
            sequencing, targeted panels and exomes on patient cohorts - and
            interpret it computationally.
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/research"
              className="btn-shift focus-ring group inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white shadow-soft"
            >
              Research Programme
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/publications"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-cyan/50"
            >
              Publications
            </Link>
            <Link
              href={withAssetVersion("/Md-Hridoy-Ahmed-CV.pdf")}
              download
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:border-cyan/50"
            >
              <Download className="h-4 w-4" />
              Download CV
            </Link>
            <Link
              href="/contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:text-cyan"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Link>
          </motion.div>

          <motion.div variants={item} className="mt-9">
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Portrait - branded headshot presentation */}
        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="group relative mx-auto w-full max-w-sm"
        >
          {/* Soft accent glow - calm at rest, intensifies on hover */}
          <div
            className="pointer-events-none absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-cyan/30 via-indigo/25 to-purple/30 opacity-70 blur-2xl transition-opacity duration-500 animate-pulse group-hover:opacity-100"
            aria-hidden
          />

          {/* Rotating scientific orbit halo - spins only on hover */}
          {!reduce && (
            <div
              className="pointer-events-none absolute -inset-2 rounded-[2.2rem] opacity-0 blur-[3px] transition-opacity duration-500 animate-spin-slow [animation-play-state:paused] group-hover:opacity-100 group-hover:[animation-play-state:running]"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, hsl(var(--cyan) / 0.45), transparent 35%, transparent 65%, hsl(var(--indigo) / 0.45), transparent)",
              }}
              aria-hidden
            />
          )}

          {/* Orbiting molecular accent particles - orbit on hover */}
          {!reduce && (
            <div
              className="pointer-events-none absolute -inset-3 animate-spin-slow [animation-play-state:paused] group-hover:[animation-play-state:running]"
              aria-hidden
            >
              <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-cyan shadow-[0_0_12px_2px_rgba(56,189,248,0.55)]" />
              <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-indigo shadow-[0_0_12px_2px_rgba(129,140,248,0.5)]" />
              <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-purple shadow-[0_0_10px_2px_rgba(192,132,252,0.5)]" />
            </div>
          )}

          {/* Floating headshot card with gradient frame */}
          <div className="animate-float-slow">
            <div className="relative rounded-[1.9rem] bg-gradient-to-br from-cyan/60 via-indigo/50 to-purple/60 p-[2px] shadow-lift">
              <div className="relative overflow-hidden rounded-[1.8rem] border border-border bg-card">
                {/* Headshot lives at /public/portrait.jpg - swap it in place and bump ASSET_VERSION. */}
                <img
                  src={withAssetVersion("/portrait.jpg")}
                  alt="Portrait of Md. Hridoy Ahmed, molecular geneticist"
                  className="aspect-[4/5] w-full object-cover"
                  width={1122}
                  height={1402}
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent p-5">
                  <p className="font-display text-lg font-semibold text-white">
                    Md. Hridoy Ahmed
                  </p>
                  <p className="text-sm text-white/80">
                    Molecular Geneticist · Disease Variant Genomics
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 top-8 hidden rounded-xl border border-border bg-card/90 px-4 py-2.5 shadow-soft backdrop-blur sm:block">
            <p className="font-display text-xl font-bold text-foreground">3</p>
            <p className="text-[11px] text-muted-foreground">bench cohort studies</p>
          </div>
          <div className="absolute -right-5 bottom-24 hidden rounded-xl border border-border bg-card/90 px-4 py-2.5 shadow-soft backdrop-blur sm:block">
            <p className="font-display text-xl font-bold text-foreground">2 Q1</p>
            <p className="text-[11px] text-muted-foreground">of 4 publications</p>
          </div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex">
        <span className="text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="h-9 w-5 rounded-full border border-border">
          <span className="mx-auto mt-1.5 block h-1.5 w-1.5 animate-float rounded-full bg-cyan" />
        </span>
      </div>
    </section>
  );
}
