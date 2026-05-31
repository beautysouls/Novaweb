"use client";

import { motion } from "framer-motion";
import {
  Download,
  FileText,
  ArrowUpRight,
  Sparkles,
  Cloud,
  CloudOff,
  Monitor,
  Bot,
  Smartphone,
  Moon,
  RefreshCw,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { images, releases } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";
import { ScreenshotFrame } from "./ui/ScreenshotFrame";

const badgeIcons: Record<string, LucideIcon> = {
  ai: Sparkles,
  cloud: Cloud,
  offline: CloudOff,
  windows: Monitor,
};

const capabilityIcons: Record<string, LucideIcon> = {
  editor: FileText,
  ai: Bot,
  cloud: Cloud,
  import: Smartphone,
  darktheme: Moon,
  updates: RefreshCw,
};

export function NovaDocsShowcase() {
  const { t } = useLanguage();
  const s = t.showcase;

  return (
    <section id="novadocs" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-[420px] w-[680px] -translate-x-1/2 rounded-full bg-nova-indigo/15 blur-[130px]" />
      </div>

      <div className="container-nova">
        {/* Heading */}
        <Reveal className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-300 backdrop-blur-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-nova-gradient" />
            {s.eyebrow}
          </span>
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {s.name}
          </h2>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg">
            {s.description}
          </p>

          {/* Badges */}
          <div className="mt-2 flex flex-wrap justify-center gap-2.5">
            {s.badges.map((badge) => {
              const Icon = badgeIcons[badge.id] ?? Sparkles;
              return (
                <span
                  key={badge.id}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200 backdrop-blur-xl transition-colors hover:border-white/20"
                >
                  <Icon className="h-4 w-4 text-nova-violet" />
                  {badge.label}
                </span>
              );
            })}
          </div>
        </Reveal>

        {/* Large screenshot */}
        <div className="mx-auto mt-14 max-w-5xl">
          <ScreenshotFrame
            src={images.novadocsEditor}
            alt={s.imageAlt}
            label={s.imageLabel}
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* CTAs */}
        <Reveal className="mt-10 flex flex-col items-center gap-4" delay={0.1}>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href={releases.novadocs.download}
              download={releases.novadocs.fileName}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
            >
              <Download className="h-4.5 w-4.5" />
              {s.primaryButton}
            </Button>
            <Button
              href={releases.novadocs.notes}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              variant="secondary"
            >
              <FileText className="h-4.5 w-4.5" />
              {s.secondaryButton}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
          <p className="text-sm text-slate-500">{s.note}</p>
        </Reveal>

        {/* Capabilities */}
        <div className="mt-20">
          <Reveal>
            <h3 className="mb-8 text-center text-xl font-semibold text-white sm:text-2xl">
              {s.capabilitiesHeading}
            </h3>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {s.capabilities.map((cap, i) => {
              const Icon = capabilityIcons[cap.id] ?? Sparkles;
              return (
                <motion.div
                  key={cap.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  whileHover={{ y: -5 }}
                  className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] transition-transform duration-300 group-hover:scale-110">
                    <Icon className="h-5 w-5 text-nova-violet" />
                  </span>
                  <span className="text-base font-medium text-white">
                    {cap.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
