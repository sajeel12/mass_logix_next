"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  FileCheck2,
  QrCode,
  Check,
  Plus,
} from "lucide-react";
import { solutions, site } from "@/lib/site";
import SectionHeading from "../ui/SectionHeading";

export default function Solutions() {
  const sol = solutions[0]; // FBR IRIS — the flagship offering

  // FAQ structured data — eligible for FAQ rich results in Google.
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sol.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section
      id={sol.id}
      aria-label="FBR IRIS e-invoicing solution"
      className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <SectionHeading
        eyebrow="Featured solution"
        title={
          <>
            Become <span className="text-gradient-lime">FBR-compliant</span> —
            the easy way
          </>
        }
        subtitle="FBR now requires sales invoices to be reported digitally in real time. We set it up for your business so it just works — no penalties, no system change, no headache."
      />

      {/* main spotlight card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="card-hairline relative mt-14 overflow-hidden rounded-3xl"
      >
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-lime/15 blur-[120px]" />
        <div className="bg-grid bg-grid-fade absolute inset-0 opacity-30" />

        <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* left: business-first copy */}
          <div>
            <span className="chip-lime inline-flex items-center gap-2 rounded-full px-3 py-1 font-mono text-xs uppercase tracking-[0.18em]">
              <ShieldCheck className="h-3.5 w-3.5" />
              {sol.tag}
            </span>
            <h3 className="mt-5 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
              {sol.headline}
            </h3>
            <p className="mt-4 max-w-xl text-pretty leading-relaxed text-fg-dim">
              {sol.blurb}
            </p>

            {/* outcome chips — the business "why" */}
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {sol.outcomes.map((o) => (
                <li
                  key={o}
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/50 px-3.5 py-1.5 text-sm text-fg"
                >
                  <Check className="h-3.5 w-3.5 text-lime-soft" />
                  {o}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={site.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3 text-sm font-medium text-black transition-all hover:-translate-y-0.5 hover:shadow-[0_0_30px_-4px_rgba(219,255,0,0.7)]"
              >
                Get FBR-compliant
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={`mailto:${site.email}?subject=FBR%20IRIS%20e-invoicing`}
                className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/40 px-6 py-3 text-sm font-medium text-fg transition-all hover:-translate-y-0.5 hover:border-lime/50"
              >
                Talk to us
              </a>
            </div>
          </div>

          {/* right: technical proof (terminal + badges) */}
          <div className="flex flex-col gap-5">
            <div className="terminal-shell overflow-hidden rounded-2xl">
              <div className="terminal-bar flex items-center gap-2 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                <span className="terminal-label ml-2 font-mono text-xs">
                  iris · submit
                </span>
              </div>
              <div className="terminal-body p-4 font-mono text-[12.5px] leading-relaxed sm:text-[13px]">
                {sol.terminal.map((line, i) => (
                  <p
                    key={i}
                    className={`whitespace-pre-wrap ${
                      line.startsWith("✓")
                        ? "term-accent"
                        : line.startsWith("$")
                          ? "term-fg"
                          : "term-dim"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <Badge icon={<FileCheck2 className="h-4 w-4" />} label="Validated" />
              <Badge icon={<QrCode className="h-4 w-4" />} label="QR + IRN" />
              <Badge icon={<ShieldCheck className="h-4 w-4" />} label="Audit-ready" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* what you get — feature grid in plain language */}
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sol.features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.45, delay: (i % 4) * 0.06 }}
            className="card-hairline rounded-2xl p-5"
          >
            <h4 className="flex items-center gap-2 text-sm font-semibold text-fg">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {f.title}
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-fg-dim">{f.copy}</p>
          </motion.div>
        ))}
      </div>

      {/* how it works */}
      <div className="mt-20">
        <h3 className="text-center text-xl font-semibold tracking-tight sm:text-2xl">
          How it works
        </h3>
        <p className="mx-auto mt-2 max-w-md text-center text-sm text-fg-dim">
          We handle the technical side end to end. Here&apos;s all it takes on
          your part.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {sol.steps.map((step, i) => (
            <motion.div
              key={step.no}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="relative"
            >
              {i < sol.steps.length - 1 && (
                <div className="absolute left-6 top-6 hidden h-px w-full bg-gradient-to-r from-line-strong to-transparent md:block" />
              )}
              <div className="icon-tile flex h-12 w-12 items-center justify-center rounded-xl border font-mono text-sm font-semibold">
                {step.no}
              </div>
              <h4 className="mt-5 text-lg font-semibold tracking-tight">
                {step.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-fg-dim">
                {step.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-20">
        <h3 className="text-center text-xl font-semibold tracking-tight sm:text-2xl">
          Common questions
        </h3>
        <div className="mx-auto mt-8 max-w-3xl divide-y divide-line/70 overflow-hidden rounded-2xl border border-line bg-surface/40">
          {sol.faqs.map((faq, i) => (
            <Faq key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-surface"
        aria-expanded={open}
      >
        <span className="text-sm font-medium text-fg sm:text-base">{q}</span>
        <Plus
          className={`h-4 w-4 shrink-0 text-lime-soft transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-fg-dim">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Badge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="card-hairline flex flex-col items-center gap-1.5 rounded-xl py-3 text-center">
      <span className="text-lime-soft">{icon}</span>
      <span className="font-mono text-[11px] uppercase tracking-wider text-fg-dim">
        {label}
      </span>
    </div>
  );
}
