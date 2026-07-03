"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { marqueeTech, site } from "@/lib/site";
import Terminal from "../Terminal";

const rotating = [
  "web apps",
  "AI products",
  "mobile apps",
  "cloud platforms",
  "Web3 systems",
];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % rotating.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* copy */}
        <div>
          <motion.a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/50 py-1.5 pl-2 pr-4 text-sm text-fg-dim backdrop-blur"
          >
            <span className="chip-lime inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-xs">
              <Sparkles className="h-3 w-3" /> AI-native
            </span>
            Now booking new engagements
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            We design &amp; engineer{" "}
            <span className="text-gradient">production-grade</span>
            <span className="mt-1 flex h-[1.15em] items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotating[idx]}
                  initial={{ y: "0.7em", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-0.7em", opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="block text-lime-soft"
                >
                  {rotating[idx]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-fg-dim"
          >
            {site.name} is a senior engineering studio that takes ideas from
            whiteboard to launch — clean architecture, real deadlines, and
            software that scales.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_-4px_rgba(219,255,0,0.7)]"
            >
              Book a strategy call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/40 px-6 py-3 text-sm font-medium text-fg transition-all hover:-translate-y-0.5 hover:border-lime/50"
            >
              Explore services
            </a>
          </motion.div>
        </div>

        {/* terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="animate-float-slow"
        >
          <Terminal />
        </motion.div>
      </div>

      {/* tech marquee pinned to bottom of hero */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 border-y border-line/60 bg-ink/40 py-4 backdrop-blur-sm">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
          <div className="marquee-track flex shrink-0 items-center gap-10 pr-10">
            {[...marqueeTech, ...marqueeTech].map((t, i) => (
              <span
                key={i}
                className="font-mono text-sm uppercase tracking-widest text-fg-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
