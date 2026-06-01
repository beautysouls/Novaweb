"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { contactLinks } from "@/lib/data";
import { useLanguage } from "@/context/LanguageProvider";
import {
  InstagramIcon,
  TikTokIcon,
  DiscordIcon,
  GitHubIcon,
} from "./ui/BrandIcons";

const socialIcons = [
  { icon: DiscordIcon, href: contactLinks.discord, label: "Discord" },
  { icon: InstagramIcon, href: contactLinks.instagram, label: "Instagram" },
  { icon: TikTokIcon, href: contactLinks.tiktok, label: "TikTok" },
  { icon: GitHubIcon, href: contactLinks.github, label: "GitHub" },
];

function FooterLinkItem({
  label,
  href,
  external,
}: {
  label: string;
  href: string;
  external?: boolean;
}) {
  const className =
    "text-sm text-slate-400 transition-colors hover:text-white break-words";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {label}
      </a>
    );
  }

  if (href.startsWith("mailto:")) {
    return (
      <a href={href} className={className}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="relative border-t border-white/10">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-nova-purple/40 to-transparent" />

      <div className="container-nova py-14">
        {/* Brand */}
        <div className="max-w-md">
          <Link href="#home" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-nova-gradient shadow-glow">
              <Sparkles className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-bold text-white">
              {t.footer.brand}
            </span>
          </Link>
          <p className="mt-4 text-base font-semibold text-gradient">
            {t.footer.slogan}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            {t.footer.description}
          </p>
          <div className="mt-6 flex gap-3">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-400 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:text-white"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {t.footer.columns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLinkItem
                      label={link.label}
                      href={link.href}
                      external={link.external}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {t.footer.brand}. {t.footer.rights}
          </p>
          <p className="text-sm text-slate-500">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
}
