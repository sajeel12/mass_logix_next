"use client";

import { motion } from "framer-motion";
import { techGroups } from "@/lib/site";
import SectionHeading from "../ui/SectionHeading";

export default function Technologies() {
  return (
    <section
      id="technologies"
      aria-label="Technology stack"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        eyebrow="Stack"
        title={
          <>
            Battle-tested tools,{" "}
            <span className="text-gradient-lime">used with taste</span>
          </>
        }
        subtitle="We pick technology to fit the problem — not the hype cycle. Here's what we reach for most."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {techGroups.map((group, i) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="card-hairline rounded-2xl p-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
                {group.label}
              </h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-line bg-surface-2 px-3 py-1.5 text-sm text-fg-dim transition-colors hover:border-lime/40 hover:text-fg"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
