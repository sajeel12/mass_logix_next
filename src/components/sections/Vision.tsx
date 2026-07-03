"use client";

import { motion } from "framer-motion";

export default function Vision() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="bg-grid bg-grid-fade absolute inset-0 opacity-40" />
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-balance text-2xl font-medium leading-snug tracking-tight sm:text-3xl md:text-4xl"
        >
          <span className="text-fg-dim">Founders bring the idea.</span>{" "}
          <span className="text-gradient">
            We engineer the future — smart, scalable, secure.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
