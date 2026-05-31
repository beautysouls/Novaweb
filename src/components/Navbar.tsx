"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Sparkles, Download } from "lucide-react";
import { BRAND } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import { Button } from "./ui/Button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={cn(
          "transition-all duration-300",
          scrolled
            ? "border-b border-white/10 bg-nova-bg/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="container-nova flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <Link href="#home" className="group flex items-center gap-2.5">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-nova-gradient shadow-glow">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              {BRAND}
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 md:flex">
            {t.nav.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + language */}
          <div className="hidden items-center gap-3 md:flex">
            <LanguageSwitcher />
            <Button href="#downloads" size="sm" variant="primary">
              <Download className="h-4 w-4" />
              {t.nav.download}
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-white/10 bg-nova-bg/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-nova flex flex-col gap-1 py-4">
              {t.nav.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-white/[0.05] hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="px-1 pt-3">
                <LanguageSwitcher className="w-full justify-center" />
              </li>
              <li className="px-1 pt-2">
                <Button
                  href="#downloads"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  <Download className="h-4 w-4" />
                  {t.hero.downloadApps}
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
