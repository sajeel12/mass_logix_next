"use client";

import { motion } from "framer-motion";
import {
  MessageSquareText,
  FileStack,
  PhoneCall,
  TrendingUp,
  Sparkles,
  Plug,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { aiSolutions, aiStack, site } from "@/lib/site";
import SectionHeading from "../ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  MessageSquareText,
  FileStack,
  PhoneCall,
  TrendingUp,
  Sparkles,
  Plug,
};

export default function AiSolutions() {
  return (
    <section
      id="ai"
      aria-label="AI solutions"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        eyebrow="AI-first"
        title={
          <>
            Real <span className="text-gradient-lime">AI</span>, working inside
            your business
          </>
        }
        subtitle="AI isn't the future — it's the edge you can use today. We build practical AI that saves hours, wins customers, and runs while you sleep."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {aiSolutions.map((s, i) => {
          const Icon = icons[s.icon] ?? Sparkles;
          return (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="card-hairline glow-border group flex flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <div className="icon-tile flex h-12 w-12 items-center justify-center rounded-xl border transition-colors group-hover:border-lime/40">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="chip-lime inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider">
                  <span className="chip-dot h-1.5 w-1.5 rounded-full" />
                  {s.outcome}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-dim">{s.copy}</p>
            </motion.article>
          );
        })}
      </div>

      {/* model / tooling proof + CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
        className="card-hairline mt-6 flex flex-col items-center justify-between gap-6 rounded-2xl p-6 sm:flex-row sm:p-7"
      >
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-fg-muted">
            Built with
          </span>
          <div className="flex flex-wrap justify-center gap-2">
            {aiStack.map((m) => (
              <span
                key={m}
                className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm text-fg-dim"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
        <a
          href={site.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_-4px_rgba(219,255,0,0.7)]"
        >
          Explore AI for your business
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </motion.div>
    </section>
  );
}
