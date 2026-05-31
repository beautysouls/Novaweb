"use client";

import Link from "next/link";
import { Sparkles, Github, Twitter, Linkedin } from "lucide-react";
import { BRAND, contactLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";

const socialIcons = [
  { icon: Github, href: contactLinks.github, label: "GitHub" },
  { icon: Twitter, href: contactLinks.twitter, label: "Twitter" },
  { icon: Linkedin, href: contactLinks.linkedin, label: "LinkedIn" },
];

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-nova-purple/40 to-transparent" />

      <div className="container-nova py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="#home" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-nova-gradient shadow-glow">
                <Sparkles className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-bold text-white">{BRAND}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {t.footer.tagline}
            </p>
            <div className="mt-6 flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:border-white/20 hover:text-white"
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {t.footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {BRAND}. {t.footer.rights}
          </p>
          <p className="text-sm text-slate-500">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
