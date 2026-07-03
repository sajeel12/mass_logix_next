"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck,
  KeyRound,
  Users,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";
import { trustPoints } from "@/lib/site";

const icons: Record<string, LucideIcon> = {
  CalendarCheck,
  KeyRound,
  Users,
  LifeBuoy,
};

/** Business reassurances — answers "can I trust this team?" before the pitch. */
export default function TrustStrip() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-10">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {trustPoints.map((t, i) => {
          const Icon = icons[t.icon] ?? CalendarCheck;
          return (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex flex-col gap-3 bg-surface p-6"
            >
              <span className="icon-tile flex h-10 w-10 items-center justify-center rounded-lg border">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="text-sm font-semibold tracking-tight text-fg">
                {t.title}
              </h3>
              <p className="text-sm leading-relaxed text-fg-dim">{t.copy}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
