import type { LucideIcon } from "lucide-react";
import {
  Zap,
  Palette,
  ShieldCheck,
  Rocket,
  FileText,
  Smartphone,
  Cloud,
  UserCircle,
  Sparkles,
  Boxes,
  ClipboardList,
  Dumbbell,
  Flower2,
} from "lucide-react";

export const BRAND = "NOVA";

/** Real product screenshots (place the PNG files in /public/images). */
export const images = {
  novadocsEditor: "/images/novadocs-editor.png",
  novacloudSettings: "/images/novacloud-settings.png",
};

export type StatusKey =
  | "available"
  | "alpha"
  | "beta"
  | "comingSoon"
  | "completed"
  | "inProgress"
  | "developing"
  | "planned";

/** Icons are language-agnostic and looked up by stable id. */
export const iconById: Record<string, LucideIcon> = {
  novadocs: FileText,
  novamobile: Smartphone,
  novatk: Dumbbell,
  novabeauty: Flower2,
  website: Boxes,
  cloud: Cloud,
  account: UserCircle,
  ai: Sparkles,
  future: Boxes,
  fast: Zap,
  modern: Palette,
  reliable: ShieldCheck,
  evolving: Rocket,
  resume: ClipboardList,
};

/** Product accent gradients, language-agnostic. */
export const productAccent: Record<string, string> = {
  novadocs: "from-blue-500 to-indigo-500",
  novamobile: "from-violet-500 to-purple-500",
  novatk: "from-rose-500 to-orange-500",
  novabeauty: "from-pink-500 to-purple-500",
};

/** Non-translatable external release URLs. */
export const releases = {
  novadocs: {
    version: "v1.0.8",
    /** Direct download of the Windows installer (.exe). */
    download:
      "https://github.com/beautysouls/NovaDocs/releases/download/v1.0.8/NovaDocs-Setup-1.0.8.exe",
    /** Installer filename, used as the suggested download name. */
    fileName: "NovaDocs-Setup-1.0.8.exe",
    /** GitHub release page (release notes). */
    notes: "https://github.com/beautysouls/NovaDocs/releases/tag/v1.0.8",
  },
  novamobile: {
    version: "v0.1 Alpha",
    /** Direct download of the Android APK. Update with each new release. */
    apk: "https://github.com/NovaEcosystemOfficial/NovaMobile/releases/download/v0.1-alpha/app-release.apk",
    /** APK filename, used as the suggested download name. */
    fileName: "app-release.apk",
    /** GitHub issues tracker for bug reports and feedback. */
    issues: "https://github.com/NovaEcosystemOfficial/NovaMobile/issues",
  },
  novatk: {
    version: "Alpha",
    repo: "https://github.com/NovaEcosystemOfficial/NovaTK",
  },
  novabeauty: {
    version: "Alpha",
    repo: "https://github.com/NovaEcosystemOfficial/NovaBeauty",
  },
};

export function getProductRepo(id: string): string | undefined {
  if (id === "novatk") return releases.novatk.repo;
  if (id === "novabeauty") return releases.novabeauty.repo;
  return undefined;
}

/** Non-translatable contact endpoints and official social links. */
export const contactLinks = {
  email: "novaecosystem.app@libero.it",
  github: "https://github.com/NovaEcosystemOfficial",
  instagram: "https://www.instagram.com/novaecosystem",
  tiktok: "https://www.tiktok.com/@novaecosystem.app",
  discord: "https://discord.gg/pGegFWK2",
  paypal: "https://paypal.me/novaecosystem",
};
