"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { StatusBadge } from "./ui/StatusBadge";

export function Ecosystem() {
  const { t } = useLanguage();

  return (
    <section id="ecosystem" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-nova-blue/10 blur-[120px]" />
        <div className="absolute right-0 bottom-1/4 h-72 w-72 rounded-full bg-nova-purple/10 blur-[120px]" />
      </div>

      <div className="container-nova">
        <SectionHeading
          eyebrow={t.ecosystem.eyebrow}
          title={t.ecosystem.title}
          description={t.ecosystem.description}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {t.ecosystem.cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 sm:p-8"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-nova-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-25" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-3xl transition-transform duration-300 group-hover:scale-110">
                    <span aria-hidden>{card.emoji}</span>
                  </span>
                  <StatusBadge status={card.statusKey} label={card.statusLabel} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
