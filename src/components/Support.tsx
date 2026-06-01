"use client";

import { motion } from "framer-motion";
import { Coffee } from "lucide-react";
import { contactLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { PayPalIcon } from "./ui/BrandIcons";

export function Support() {
  const { t } = useLanguage();

  return (
    <section id="support" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-nova">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 text-center backdrop-blur-xl sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-72 w-[520px] -translate-x-1/2 rounded-full bg-nova-purple/15 blur-[120px]" />
          </div>

          <div className="flex flex-col items-center">
            <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-nova-gradient shadow-glow">
              <Coffee className="h-6 w-6 text-white" />
            </span>
            <SectionHeading
              eyebrow={t.support.eyebrow}
              title={t.support.title}
              description={t.support.description}
            />

            <Reveal className="mt-9" delay={0.1}>
              <motion.a
                href={contactLinks.paypal}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group inline-flex items-center gap-2.5 rounded-full bg-nova-gradient px-8 py-4 text-base font-semibold text-white shadow-glow transition-shadow duration-300 hover:shadow-glow-lg"
              >
                <Coffee className="h-5 w-5" />
                {t.support.button}
                <PayPalIcon className="ml-1 h-4 w-4 opacity-90 transition-transform duration-300 group-hover:translate-x-0.5" />
              </motion.a>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
