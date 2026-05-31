"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./ui/Button";
import { LaptopMockup } from "./ui/LaptopMockup";
import { PhoneMockup } from "./ui/PhoneMockup";
import { BRAND, images } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-nova-radial" />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-40" />
        <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-nova-indigo/20 blur-[120px]" />
        <div className="absolute right-1/4 top-40 h-72 w-72 rounded-full bg-nova-purple/20 blur-[120px]" />
      </div>

      <div className="container-nova">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center"
        >
          <motion.span
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-slate-300 backdrop-blur-xl"
          >
            <Sparkles className="h-3.5 w-3.5 text-nova-violet" />
            {t.hero.badge}
          </motion.span>

          <motion.h1
            variants={item}
            className="text-balance text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl"
          >
            <span className="text-gradient">{BRAND}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button href="#downloads" size="lg">
              <Download className="h-4.5 w-4.5" />
              {t.hero.downloadApps}
            </Button>
            <Button href="#products" size="lg" variant="secondary">
              {t.hero.exploreProducts}
              <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="relative mx-auto mt-16 flex max-w-4xl items-end justify-center sm:mt-20"
        >
          <div className="animate-float-slow">
            <LaptopMockup
              src={images.novadocsEditor}
              alt="NovaDocs editor"
              priority
            />
          </div>
          <div className="absolute -bottom-4 right-2 animate-float sm:-right-4 sm:bottom-0 lg:-right-10">
            <PhoneMockup />
          </div>

          {/* Reflection glow under devices */}
          <div className="pointer-events-none absolute -bottom-16 left-1/2 h-40 w-3/4 -translate-x-1/2 rounded-[50%] bg-nova-purple/20 blur-3xl" />
        </motion.div>
      </div>

      {/* Ecosystem strip */}
      <div className="container-nova mt-24 sm:mt-32">
        <p className="text-center text-xs font-medium uppercase tracking-[0.25em] text-slate-600">
          {t.hero.ecosystem}
        </p>
      </div>
    </section>
  );
}
