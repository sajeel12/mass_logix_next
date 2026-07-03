"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Instagram } from "lucide-react";
import { site } from "@/lib/site";

export default function CTA() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24 pt-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="card-hairline relative overflow-hidden rounded-3xl px-8 py-16 text-center sm:px-16"
      >
        {/* glow */}
        <div className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-80 w-80 rounded-full bg-lime/20 blur-[120px]" />
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-30" />

        <div className="relative">
          <span className="chip-lime inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.25em]">
            <span className="chip-dot h-1.5 w-1.5 rounded-full" />
            Let&apos;s build
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Have an idea? Let&apos;s turn it into{" "}
            <span className="text-gradient">shipped software.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-pretty text-base text-fg-dim md:text-lg">
            Book a free 60-minute strategy call. We&apos;ll pressure-test the
            idea, sketch an architecture, and give you a clear path to launch.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={site.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-lime px-7 py-3.5 text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_-4px_rgba(219,255,0,0.75)]"
            >
              Book your strategy call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/40 px-7 py-3.5 text-sm font-medium text-fg transition-all hover:-translate-y-0.5 hover:border-lime/50"
            >
              Email us
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
              Find us
            </span>
            <div className="h-px w-8 bg-line-strong" />
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line-strong text-fg-dim transition-all hover:border-lime/50 hover:text-lime"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line-strong text-fg-dim transition-all hover:border-lime/50 hover:text-lime"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
