"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, site } from "@/lib/site";
import Wordmark from "./Wordmark";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`brand-surface flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled ? "shadow-card backdrop-blur-xl" : ""
        }`}
      >
        <Link href="#top" className="flex items-center" aria-label={site.name}>
          <Wordmark className="h-6 w-auto" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-lime"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={site.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-lime px-5 py-2 text-sm font-medium text-black transition-all hover:shadow-[0_0_24px_-4px_rgba(219,255,0,0.7)] sm:inline-flex"
          >
            Start a project
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong text-fg md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="brand-surface absolute inset-x-4 top-20 rounded-2xl border p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/5 hover:text-lime"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-lg bg-lime px-3 py-3 text-center text-sm font-medium text-black"
                >
                  Start a project
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
