"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Loader2, CircleDashed } from "lucide-react";
import { iconById, type StatusKey } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";

const statusMeta: Partial<
  Record<
    StatusKey,
    { icon: typeof CheckCircle2; ring: string; dot: string; label: string }
  >
> = {
  completed: {
    icon: CheckCircle2,
    ring: "ring-emerald-500/40",
    dot: "bg-emerald-400",
    label: "text-emerald-300",
  },
  inProgress: {
    icon: Loader2,
    ring: "ring-blue-500/40",
    dot: "bg-blue-400",
    label: "text-blue-300",
  },
  developing: {
    icon: Loader2,
    ring: "ring-pink-500/40",
    dot: "bg-pink-400",
    label: "text-pink-300",
  },
  planned: {
    icon: CircleDashed,
    ring: "ring-violet-500/40",
    dot: "bg-violet-400",
    label: "text-violet-300",
  },
};

export function Roadmap() {
  const { t } = useLanguage();

  return (
    <section id="roadmap" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading
          eyebrow={t.roadmap.eyebrow}
          title={t.roadmap.title}
          description={t.roadmap.description}
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-emerald-400/50 via-blue-400/40 to-violet-400/30 md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-10">
            {t.roadmap.groups.map((group, groupIndex) => {
              const meta = statusMeta[group.statusKey] ?? statusMeta.planned!;
              const StatusIcon = meta.icon;
              const isLeft = groupIndex % 2 === 0;
              const isActive =
                group.statusKey === "inProgress" ||
                group.statusKey === "developing";

              return (
                <motion.div
                  key={`${group.statusKey}-${groupIndex}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: groupIndex * 0.08 }}
                  className={`relative pl-12 md:w-1/2 md:pl-0 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1 flex h-9 w-9 items-center justify-center rounded-full bg-nova-surface ring-2 ${meta.ring} md:left-auto ${
                      isLeft
                        ? "md:right-0 md:translate-x-1/2"
                        : "md:left-0 md:-translate-x-1/2"
                    }`}
                  >
                    <StatusIcon
                      className={`h-4 w-4 ${meta.label} ${
                        isActive ? "animate-spin" : ""
                      }`}
                    />
                  </span>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors hover:border-white/20">
                    <span
                      className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] ${meta.label}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                      {group.statusLabel}
                    </span>

                    <div
                      className={`mt-4 flex flex-col gap-3 ${
                        isLeft ? "md:items-end" : ""
                      }`}
                    >
                      <ul
                        className={`flex flex-wrap gap-2.5 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        {group.items.map((entry) => {
                          const ItemIcon = iconById[entry.id];
                          if (entry.objectives) return null;
                          return (
                            <li
                              key={entry.id}
                              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-slate-200"
                            >
                              {ItemIcon && (
                                <ItemIcon className="h-3.5 w-3.5 text-slate-400" />
                              )}
                              {entry.name}
                            </li>
                          );
                        })}
                      </ul>

                      {group.items.map((entry) => {
                        if (!entry.objectives?.length) return null;
                        const ItemIcon = iconById[entry.id];
                        return (
                          <div
                            key={entry.id}
                            className={`w-full rounded-2xl border border-pink-500/20 bg-pink-500/[0.04] p-4 ${
                              isLeft ? "md:text-right" : ""
                            }`}
                          >
                            <div
                              className={`flex items-center gap-2 text-sm font-semibold text-white ${
                                isLeft ? "md:justify-end" : ""
                              }`}
                            >
                              {ItemIcon && (
                                <ItemIcon className="h-4 w-4 text-pink-300" />
                              )}
                              {entry.name}
                            </div>
                            <p
                              className={`mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-pink-300/80 ${
                                isLeft ? "md:text-right" : ""
                              }`}
                            >
                              {t.roadmap.objectivesLabel}
                            </p>
                            <ul
                              className={`mt-2 flex flex-wrap gap-2 ${
                                isLeft ? "md:justify-end" : ""
                              }`}
                            >
                              {entry.objectives.map((objective) => (
                                <li
                                  key={objective}
                                  className="rounded-full border border-pink-500/20 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200"
                                >
                                  {objective}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
