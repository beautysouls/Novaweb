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
} from "lucide-react";

export const BRAND = "NOVA";

/** Real product screenshots (place the PNG files in /public/images). */
export const images = {
  novadocsEditor: "/images/novadocs-editor.png",
  novacloudSettings: "/images/novacloud-settings.png",
};

export type StatusKey =
  | "available"
  | "beta"
  | "comingSoon"
  | "completed"
  | "inProgress"
  | "planned";

/** Icons are language-agnostic and looked up by stable id. */
export const iconById: Record<string, LucideIcon> = {
  novadocs: FileText,
  novamobile: Smartphone,
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
};

/** Non-translatable external release URLs. */
export const releases = {
  novadocs: {
    /** Direct download of the Windows installer (.exe). */
    download:
      "https://github.com/beautysouls/NovaDocs/releases/download/v1.0.7/NovaDocs-Setup-1.0.7.exe",
    /** Installer filename, used as the suggested download name. */
    fileName: "NovaDocs-Setup-1.0.7.exe",
    /** GitHub release page (release notes). */
    notes: "https://github.com/beautysouls/NovaDocs/releases/tag/v1.0.7",
  },
};

/** Non-translatable contact endpoints. */
export const contactLinks = {
  email: "novaecosystem.app@libero.it",
  github: "https://github.com/nova",
  twitter: "https://x.com/novahq",
  linkedin: "https://linkedin.com/company/nova",
  discord: "https://discord.gg/nova",
};
