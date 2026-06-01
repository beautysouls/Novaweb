"use client";

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { brandIcons, type BrandIconId } from "./ui/BrandIcons";

const buttonAccent: Record<string, string> = {
  discord: "hover:border-indigo-400/40 hover:bg-indigo-500/10",
  instagram: "hover:border-pink-400/40 hover:bg-pink-500/10",
  tiktok: "hover:border-cyan-400/40 hover:bg-cyan-500/10",
  github: "hover:border-white/30 hover:bg-white/[0.08]",
};

export function Community() {
  const { t } = useLanguage();

  return (
    <section id="community" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-nova-indigo/12 blur-[130px]" />
      </div>

      <div className="container-nova">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-nova-purple/20 blur-[120px]" />
            <div className="absolute -bottom-20 -left-12 h-72 w-72 rounded-full bg-nova-blue/20 blur-[120px]" />
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-nova-gradient shadow-glow">
              <Users className="h-6 w-6 text-white" />
            </span>
            <SectionHeading
              eyebrow={t.community.eyebrow}
              title={t.community.title}
              description={t.community.description}
            />

            <Reveal className="mt-9 w-full" delay={0.1}>
              <div className="mx-auto grid max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
                {t.community.buttons.map((button) => {
                  const Icon = brandIcons[button.id as BrandIconId];
                  return (
                    <motion.a
                      key={button.id}
                      href={button.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className={`group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition-colors duration-300 ${
                        buttonAccent[button.id] ?? "hover:border-white/20"
                      }`}
                    >
                      {Icon && (
                        <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                      )}
                      {button.label}
                    </motion.a>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
