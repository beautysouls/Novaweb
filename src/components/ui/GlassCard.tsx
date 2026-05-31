"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  glow?: boolean;
};

export function GlassCard({ children, className, glow = true }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 sm:p-8",
        className
      )}
    >
      {glow && (
        <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-nova-blue/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-nova-purple/20 blur-3xl" />
        </div>
      )}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
