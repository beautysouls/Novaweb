"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

type ScreenshotImageProps = {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
  fallbackLabel?: string;
};

/**
 * Renders a screenshot via next/image (fill). The parent MUST be
 * `relative` and sized. If the file is missing, it degrades gracefully
 * to an on-brand placeholder instead of a broken image.
 */
export function ScreenshotImage({
  src,
  alt,
  sizes = "(max-width: 768px) 100vw, 60vw",
  priority = false,
  className,
  fallbackLabel,
}: ScreenshotImageProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-nova-surface via-nova-bg to-black">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="relative flex flex-col items-center gap-3 px-6 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-nova-gradient shadow-glow">
            <ImageOff className="h-5 w-5 text-white" />
          </span>
          <span className="text-sm font-medium text-slate-300">
            {fallbackLabel ?? alt}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      onError={() => setErrored(true)}
      className={cn("object-cover object-top", className)}
    />
  );
}
