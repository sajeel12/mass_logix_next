"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { clients, integrations, type Logo } from "@/lib/site";

/**
 * "Trusted by" clients + "Integrations we work with".
 * Logos sit on light chips so colored/dark marks stay visible in both themes.
 * NOTE: integrations are tools we build with — not official partnerships.
 */
export default function Trusted() {
  return (
    <section
      aria-label="Clients and integrations"
      className="relative mx-auto max-w-6xl px-6 py-16"
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-8">
        <LogoGroup label="Trusted by" logos={clients} />
        <LogoGroup label="Integrations we work with" logos={integrations} />
      </div>
    </section>
  );
}

function LogoGroup({ label, logos }: { label: string; logos: Logo[] }) {
  return (
    <div className="flex flex-col items-center gap-5 md:items-start">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
        {label}
      </span>
      <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
        {logos.map((logo, i) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <LogoChip logo={logo} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LogoChip({ logo }: { logo: Logo }) {
  const img = (
    <Image
      src={logo.src}
      alt={logo.name}
      width={logo.width}
      height={logo.height}
      className="h-7 w-auto object-contain sm:h-8"
    />
  );
  const chipClass =
    "flex h-16 items-center justify-center rounded-xl border border-line bg-white px-6 shadow-sm transition-transform duration-300 hover:-translate-y-0.5";

  return logo.href ? (
    <a
      href={logo.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={logo.name}
      className={chipClass}
    >
      {img}
    </a>
  ) : (
    <div className={chipClass}>{img}</div>
  );
}
