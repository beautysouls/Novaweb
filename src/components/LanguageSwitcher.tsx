"use client";

import { Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageProvider";
import { LANGUAGES } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  className,
  showIcon = true,
}: {
  className?: string;
  showIcon?: boolean;
}) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl",
        className
      )}
      role="group"
      aria-label="Language switcher"
    >
      {showIcon && (
        <Globe className="ml-1.5 mr-0.5 h-3.5 w-3.5 text-slate-400" />
      )}
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300",
            lang === code
              ? "bg-nova-gradient text-white shadow-glow"
              : "text-slate-400 hover:text-white"
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
