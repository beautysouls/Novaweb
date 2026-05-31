"use client";

import { motion } from "framer-motion";
import { Cloud, RefreshCcw, MonitorSmartphone, Lock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { images } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import { Reveal } from "./ui/Reveal";
import { ScreenshotFrame } from "./ui/ScreenshotFrame";

const featureIcons: Record<string, LucideIcon> = {
  sync: RefreshCcw,
  multidevice: MonitorSmartphone,
  privacy: Lock,
};

export function NovaCloud() {
  const { t } = useLanguage();
  const c = t.novacloud;

  return (
    <section id="novacloud" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-0 top-1/4 h-80 w-80 rounded-full bg-nova-purple/15 blur-[130px]" />
        <div className="absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-nova-blue/10 blur-[130px]" />
      </div>

      <div className="container-nova">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <Reveal className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 backdrop-blur-xl">
              <Cloud className="h-3.5 w-3.5 text-nova-violet" />
              {c.eyebrow}
            </span>
            <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              {c.title}
            </h2>
            <p className="mt-4 text-lg font-medium text-gradient">{c.subtitle}</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
              {c.description}
            </p>
          </Reveal>

          {/* Screenshot */}
          <div className="order-1 lg:order-2">
            <ScreenshotFrame
              src={images.novacloudSettings}
              alt={c.imageAlt}
              label={c.imageLabel}
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 grid gap-5 sm:grid-cols-3">
          {c.features.map((feature, i) => {
            const Icon = featureIcons[feature.id] ?? Cloud;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-nova-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl transition-transform duration-300 group-hover:scale-110">
                    <span aria-hidden>{feature.emoji}</span>
                  </div>
                  <h3 className="mt-5 flex items-center gap-2 text-lg font-semibold text-white">
                    <Icon className="h-4 w-4 text-nova-violet" />
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
