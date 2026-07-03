"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/site";
import SectionHeading from "../ui/SectionHeading";

export default function Process() {
  return (
    <section
      id="process"
      aria-label="Our process"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <SectionHeading
        align="left"
        eyebrow="Process"
        title="How an engagement runs"
        subtitle="No black boxes. You see working software every week and always know what's next."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {process.map((step, i) => (
          <motion.div
            key={step.no}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative"
          >
            {/* connector line */}
            {i < process.length - 1 && (
              <div className="absolute left-6 top-6 hidden h-px w-full bg-gradient-to-r from-line-strong to-transparent lg:block" />
            )}
            <div className="icon-tile flex h-12 w-12 items-center justify-center rounded-xl border font-mono text-sm font-semibold">
              {step.no}
            </div>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fg-dim">
              {step.copy}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
