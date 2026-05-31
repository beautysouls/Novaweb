"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScreenshotImage } from "./ScreenshotImage";

type ScreenshotFrameProps = {
  src: string;
  alt: string;
  label?: string;
  aspect?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * Premium "app window" frame around a product screenshot — glassmorphism,
 * gradient glow, soft shadow and a subtle hover lift. Apple/Linear style.
 */
export function ScreenshotFrame({
  src,
  alt,
  label,
  aspect = "aspect-[16/10]",
  sizes,
  priority,
  className,
}: ScreenshotFrameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -8 }}
      className={cn("group relative", className)}
    >
      {/* Ambient gradient glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 opacity-70 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-full w-3/4 -translate-x-1/2 rounded-[3rem] bg-nova-gradient opacity-20 blur-[90px]" />
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/60 backdrop-blur-xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-glow-lg">
        {/* Window title bar */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />
          {label && (
            <div className="ml-3 truncate text-xs font-medium text-slate-400">
              {label}
            </div>
          )}
          <div className="ml-auto h-2 w-20 rounded-full bg-white/[0.06]" />
        </div>

        {/* Screenshot */}
        <div className={cn("relative w-full overflow-hidden", aspect)}>
          <ScreenshotImage
            src={src}
            alt={alt}
            sizes={sizes}
            priority={priority}
            fallbackLabel={label ?? alt}
            className="transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
      </div>
    </motion.div>
  );
}
