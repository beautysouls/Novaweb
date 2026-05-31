"use client";

import { motion } from "framer-motion";
import { GitCommitHorizontal, Tag } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";

export function Changelog() {
  const { t } = useLanguage();

  return (
    <section id="changelog" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading
          eyebrow={t.changelog.eyebrow}
          title={t.changelog.title}
          description={t.changelog.description}
        />

        <div className="mx-auto mt-16 max-w-3xl space-y-6">
          {t.changelog.entries.map((entry, i) => (
            <motion.article
              key={entry.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors hover:border-white/20 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-nova-gradient shadow-glow">
                  <GitCommitHorizontal className="h-5 w-5 text-white" />
                </span>
                <div>
                  <h3 className="flex items-center gap-2 text-base font-bold text-white">
                    {entry.product}
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-0.5 text-xs font-medium text-nova-violet">
                      <Tag className="h-3 w-3" />
                      {entry.version}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500">{entry.date}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 border-l border-white/10 pl-5">
                {entry.changes.map((change) => (
                  <li
                    key={change}
                    className="relative text-sm text-slate-300 before:absolute before:-left-[1.45rem] before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-nova-gradient"
                  >
                    {change}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
