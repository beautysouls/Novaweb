"use client";

import { motion } from "framer-motion";
import { Mail, Github, ArrowUpRight } from "lucide-react";
import { contactLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import { SectionHeading } from "./ui/SectionHeading";
import { Button } from "./ui/Button";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="container-nova">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-nova-purple/20 blur-[120px]" />
            <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-nova-blue/20 blur-[120px]" />
          </div>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow={t.contact.eyebrow}
                title={t.contact.title}
                description={t.contact.description}
                align="left"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={`mailto:${contactLinks.email}`} size="md">
                  <Mail className="h-4 w-4" />
                  {contactLinks.email}
                </Button>
                <Button
                  href={contactLinks.github}
                  size="md"
                  variant="secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  {t.contact.githubLabel}
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {t.contact.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {social.label}
                    </p>
                    <p className="text-xs text-slate-400">{social.handle}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-500 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
