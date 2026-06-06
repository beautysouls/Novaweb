"use client";

import { motion } from "framer-motion";
import { Download, ArrowUpRight, Check, Github, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  iconById,
  productAccent,
  images,
  releases,
  getProductRepo,
} from "@/lib/data";
import { handleProductDownload } from "@/lib/download";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";
import { StatusBadge } from "./ui/StatusBadge";
import { LaptopMockup } from "./ui/LaptopMockup";
import { PhoneMockup } from "./ui/PhoneMockup";

const previews: Record<string, React.ReactNode> = {
  novadocs: (
    <div className="scale-[0.78] sm:scale-90">
      <LaptopMockup src={images.novadocsEditor} alt="NovaDocs editor" />
    </div>
  ),
  novamobile: (
    <div className="flex justify-center">
      <PhoneMockup />
    </div>
  ),
  novatk: (
    <div className="flex justify-center">
      <PhoneMockup />
    </div>
  ),
  novabeauty: (
    <div className="flex justify-center">
      <PhoneMockup />
    </div>
  ),
};

export function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-nova">
        <SectionHeading
          eyebrow={t.products.eyebrow}
          title={t.products.title}
          description={t.products.description}
        />

        <div className="mt-16 grid gap-7 lg:grid-cols-2">
          {t.products.items.map((product, i) => {
            const Icon = iconById[product.id] as LucideIcon | undefined;
            const accent =
              productAccent[product.id] ?? "from-blue-500 to-indigo-500";
            const repoUrl = getProductRepo(product.id);

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition-colors duration-300 hover:border-white/20"
              >
                <div
                  className={`pointer-events-none absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40`}
                />

                <div className="relative flex h-56 items-center justify-center overflow-hidden border-b border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent px-6 pt-8">
                  {previews[product.id]}
                </div>

                <div className="relative p-7 sm:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${accent} shadow-glow`}
                      >
                        {Icon && <Icon className="h-5 w-5 text-white" />}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-400">
                          {product.tagline}
                        </p>
                      </div>
                    </div>
                    <StatusBadge
                      status={product.statusKey}
                      label={product.statusLabel}
                    />
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-400">
                    {product.description}
                  </p>

                  <ul className="mt-6 grid grid-cols-2 gap-3">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-300"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-nova-gradient">
                          <Check className="h-2.5 w-2.5 text-white" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {product.badges && product.badges.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {product.badges.map((badge) => (
                        <span
                          key={badge.id}
                          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-slate-200"
                        >
                          {badge.label}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-7 flex flex-wrap gap-3">
                    {repoUrl ? (
                      <>
                        <Button
                          href={repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="sm"
                        >
                          <Github className="h-4 w-4" />
                          {t.products.githubButton}
                        </Button>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="cursor-not-allowed opacity-70"
                          disabled
                        >
                          <Clock className="h-4 w-4" />
                          {t.products.testFlightButton}
                        </Button>
                      </>
                    ) : product.id === "novamobile" ? (
                      <Button
                        href={releases.novamobile.apk}
                        download={releases.novamobile.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="sm"
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
                        {t.products.download}
                      </Button>
                    ) : (
                      <Button href="#downloads" size="sm">
                        <Download className="h-4 w-4" />
                        {t.products.download}
                      </Button>
                    )}
                    {!repoUrl && (
                      <Button
                        href={
                          product.id === "novadocs"
                            ? "#novadocs"
                            : product.id === "novamobile"
                              ? "/nova-mobile-alpha"
                              : "#downloads"
                        }
                        size="sm"
                        variant="secondary"
                      >
                        {t.products.learnMore}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
