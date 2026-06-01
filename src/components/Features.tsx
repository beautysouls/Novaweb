"use client";

import { motion } from "framer-motion";
import { iconById } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./ui/SectionHeading";

export function Features() {
  const { t } = useLanguage();

  return (
    <section id="features" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-nova-blue/10 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-nova-purple/10 blur-[120px]" />
      </div>

      <div className="container-nova">
        <SectionHeading
          eyebrow={t.features.eyebrow}
          title={t.features.title}
          description={t.features.description}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.features.items.map((feature, i) => {
            const Icon = iconById[feature.id];
            const wide = Boolean(feature.templates?.length);
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors duration-300 hover:border-white/20",
                  wide && "sm:col-span-2 lg:col-span-4"
                )}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-nova-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                <div
                  className={cn(
                    "relative",
                    wide && "lg:flex lg:items-center lg:gap-10"
                  )}
                >
                  <div className={cn(wide && "lg:flex-1")}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl transition-transform duration-300 group-hover:scale-110">
                      <span aria-hidden>{feature.emoji}</span>
                    </div>
                    <h3 className="mt-5 flex items-center gap-2 text-lg font-semibold text-white">
                      {Icon && <Icon className="h-4 w-4 text-nova-violet" />}
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {feature.description}
                    </p>
                  </div>

                  {feature.templates?.length ? (
                    <div className="mt-6 lg:mt-0 lg:max-w-md lg:flex-1">
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                        Template
                      </p>
                      <div className="flex flex-wrap gap-2.5">
                        {feature.templates.map((template) => (
                          <span
                            key={template}
                            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-sm font-medium text-slate-200 backdrop-blur-xl transition-colors hover:border-white/20"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-nova-gradient" />
                            {template}
                          </span>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
