"use client";

import { motion } from "framer-motion";
import {
  Download,
  Clock,
  Check,
  Monitor,
  BadgeCheck,
  Github,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { iconById, releases, getProductRepo } from "@/lib/data";
import { handleProductDownload } from "@/lib/download";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { StatusBadge } from "./ui/StatusBadge";

const badgeIcons: Record<string, LucideIcon> = {
  windows: Monitor,
  stable: BadgeCheck,
  opensource: Github,
};

export function Downloads() {
  const { t } = useLanguage();
  const featured = t.downloads.featured;
  const FeaturedIcon = iconById[featured.id] ?? FileText;

  return (
    <section id="downloads" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-80 w-[600px] -translate-x-1/2 rounded-full bg-nova-indigo/10 blur-[120px]" />
      </div>

      <div className="container-nova">
        <SectionHeading
          eyebrow={t.downloads.eyebrow}
          title={t.downloads.title}
          description={t.downloads.description}
        />

        {/* Featured: NovaDocs */}
        <div className="mt-16">
          <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-nova-purple/60" />
            {t.downloads.featuredHeading}
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-all duration-500 hover:border-white/20"
          >
            {/* Decorative glows */}
            <div className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-nova-blue/15 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />
              <div className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-nova-purple/20 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />
            </div>

            <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-5 lg:gap-12">
              {/* Info */}
              <div className="lg:col-span-3">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-nova-gradient shadow-glow">
                    <FeaturedIcon className="h-7 w-7 text-white" />
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-2xl font-bold text-white sm:text-3xl">
                        {featured.name}
                      </h4>
                      <StatusBadge
                        status={featured.statusKey}
                        label={featured.statusLabel}
                      />
                    </div>
                    <p className="mt-1 text-sm font-medium text-slate-500">
                      {featured.versionLabel} {featured.version}
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300">
                  {featured.description}
                </p>

                {/* Badges */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {featured.badges.map((badge) => {
                    const BadgeIcon = badgeIcons[badge.id] ?? BadgeCheck;
                    return (
                      <span
                        key={badge.id}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs font-semibold text-slate-200 backdrop-blur-xl transition-colors hover:border-white/20"
                      >
                        <BadgeIcon className="h-3.5 w-3.5 text-nova-violet" />
                        {badge.label}
                      </span>
                    );
                  })}
                </div>

                {/* Features */}
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {featured.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-sm text-slate-300"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-nova-gradient">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action panel */}
              <div className="lg:col-span-2">
                <div className="flex h-full flex-col justify-center gap-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl sm:p-7">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-white">
                      {featured.name} {featured.version}
                    </span>
                    <Monitor className="h-5 w-5 text-slate-400" />
                  </div>

                  <Button
                    href={releases.novadocs.download}
                    download={releases.novadocs.fileName}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    className="w-full"
                    onClick={(event) =>
                      void handleProductDownload(event, {
                        product: "NovaDocs",
                        version: releases.novadocs.version,
                        url: releases.novadocs.download,
                        fileName: releases.novadocs.fileName,
                      })
                    }
                  >
                    <Download className="h-4.5 w-4.5" />
                    {featured.primaryButton}
                  </Button>

                  <Button
                    href={releases.novadocs.notes}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="lg"
                    variant="secondary"
                    className="w-full"
                  >
                    <FileText className="h-4.5 w-4.5" />
                    {featured.secondaryButton}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Button>

                  <p className="text-center text-xs leading-relaxed text-slate-500">
                    {featured.note}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Secondary downloads */}
        <div className="mt-14">
          <h3 className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-nova-purple/60" />
            {t.downloads.moreHeading}
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.downloads.items.map((item, i) => {
              const Icon = iconById[item.id];
              const soon = item.statusKey === "comingSoon";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
                >
                  <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-nova-gradient opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20" />

                  <div className="relative flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nova-gradient shadow-glow">
                      {Icon && <Icon className="h-5 w-5 text-white" />}
                    </span>
                    <StatusBadge status={item.statusKey} label={item.statusLabel} />
                  </div>

                  <h4 className="relative mt-5 text-lg font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="relative mt-1.5 flex-1 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>

                  <p className="relative mt-4 text-xs font-medium uppercase tracking-wider text-slate-500">
                    {item.platform}
                    {item.availability ? ` · ${item.availability}` : ""}
                  </p>

                  <div className="relative mt-5 flex flex-col gap-3">
                    {soon ? (
                      <Button
                        variant="secondary"
                        size="md"
                        className="w-full cursor-not-allowed opacity-70"
                        disabled
                      >
                        <Clock className="h-4 w-4" />
                        {item.buttonLabel}
                      </Button>
                    ) : item.id === "novamobile" ? (
                      <Button
                        href={releases.novamobile.apk}
                        download={releases.novamobile.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="md"
                        className="w-full"
                        onClick={(event) =>
                          void handleProductDownload(event, {
                            product: "NovaMobile",
                            version: releases.novamobile.version,
                            url: releases.novamobile.apk,
                            fileName: releases.novamobile.fileName,
                          })
                        }
                      >
                        <Download className="h-4 w-4" />
                        {item.buttonLabel}
                      </Button>
                    ) : getProductRepo(item.id) ? (
                      <>
                        <Button
                          href={getProductRepo(item.id)!}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="md"
                          className="w-full"
                        >
                          <Github className="h-4 w-4" />
                          {item.buttonLabel}
                        </Button>
                        <Button
                          variant="secondary"
                          size="md"
                          className="w-full cursor-not-allowed opacity-70"
                          disabled={item.secondaryDisabled}
                        >
                          <Clock className="h-4 w-4" />
                          {item.secondaryButtonLabel}
                        </Button>
                      </>
                    ) : (
                      <Button href="#" size="md" className="w-full">
                        <Download className="h-4 w-4" />
                        {item.buttonLabel}
                      </Button>
                    )}
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
