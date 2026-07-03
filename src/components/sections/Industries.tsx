"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { industries, site } from "@/lib/site";
import SectionHeading from "../ui/SectionHeading";

export default function Industries() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section
      id="industries"
      aria-label="Industries we serve"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        align="left"
        eyebrow="Industries"
        title="Software that ships in the real world"
        subtitle="We've delivered across regulated, high-stakes domains where correctness and uptime actually matter."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        {/* selector list */}
        <ul className="flex flex-col gap-1">
          {industries.map((ind, i) => {
            const on = i === active;
            return (
              <li key={ind.id}>
                <button
                  onMouseEnter={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className={`group flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left transition-all ${
                    on
                      ? "border-lime/40 bg-surface"
                      : "border-transparent hover:border-line-strong hover:bg-surface/50"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs ${
                        on ? "text-lime-soft" : "text-fg-muted"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`text-lg font-medium tracking-tight ${
                        on ? "text-fg" : "text-fg-dim"
                      }`}
                    >
                      {ind.name}
                    </span>
                  </span>
                  <ArrowUpRight
                    className={`h-4 w-4 transition-all ${
                      on
                        ? "translate-x-0 text-lime-soft opacity-100"
                        : "-translate-x-2 opacity-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* detail panel */}
        <div className="card-hairline relative overflow-hidden rounded-2xl p-8 sm:p-10">
          <div className="bg-dots absolute inset-0 opacity-50" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.3 }}
              className="relative flex h-full flex-col"
            >
              <span className="font-mono text-7xl font-semibold text-line-strong sm:text-8xl">
                {String(active + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {current.name}
              </h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-fg-dim">
                {current.copy}
              </p>
              <a
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 self-start rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium text-fg transition-all hover:border-lime/50"
              >
                Discuss your {current.name.toLowerCase()} project
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
