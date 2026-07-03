"use client";

import { motion } from "framer-motion";
import {
  Boxes,
  LayoutDashboard,
  BrainCircuit,
  Smartphone,
  Cloud,
  Blocks,
  Check,
  type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/site";
import SectionHeading from "../ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  Boxes,
  LayoutDashboard,
  BrainCircuit,
  Smartphone,
  Cloud,
  Blocks,
};

export default function Services() {
  return (
    <section id="services" aria-label="Services" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <SectionHeading
        eyebrow="Services"
        title={
          <>
            Everything you need to{" "}
            <span className="text-gradient-lime">ship</span>
          </>
        }
        subtitle="One senior team that takes your idea from plan to launch — and keeps it running after. No hand-offs, no finger-pointing."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon] ?? Boxes;
          return (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className={`card-hairline glow-border group flex flex-col rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 ${
                s.featured
                  ? "sm:col-span-2 lg:col-span-1 ring-1 ring-lime/40 shadow-glow"
                  : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="icon-tile flex h-12 w-12 items-center justify-center rounded-xl border transition-colors group-hover:border-lime/40">
                  <Icon className="h-6 w-6" />
                </div>
                {s.featured && (
                  <span className="chip-lime inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider">
                    <span className="chip-dot h-1.5 w-1.5 rounded-full" />
                    Most requested
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-fg-dim">{s.blurb}</p>
              <ul className="mt-5 flex flex-col gap-2 border-t border-line/70 pt-5">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-fg-dim"
                  >
                    <Check className="h-4 w-4 shrink-0 text-lime-soft" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
