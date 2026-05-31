"use client";

import { FileText, Bold, Italic, List, Image as ImageIcon } from "lucide-react";
import { ScreenshotImage } from "./ScreenshotImage";

type LaptopMockupProps = {
  src?: string;
  alt?: string;
  label?: string;
  priority?: boolean;
};

export function LaptopMockup({
  src,
  alt = "NovaDocs",
  label = "NovaDocs — Untitled",
  priority,
}: LaptopMockupProps) {
  return (
    <div className="w-full max-w-2xl">
      {/* Screen */}
      <div className="relative rounded-2xl border border-white/10 bg-[#0b0d1a] p-2 shadow-2xl shadow-black/60">
        <div className="overflow-hidden rounded-xl border border-white/5 bg-gradient-to-b from-[#0d1020] to-[#070912]">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-400/80" />
            <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
            <span className="h-3 w-3 rounded-full bg-green-400/80" />
            <div className="ml-3 flex items-center gap-2 text-xs font-medium text-slate-400">
              <FileText className="h-3.5 w-3.5 text-nova-blue" />
              {label}
            </div>
          </div>

          {src ? (
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <ScreenshotImage
                src={src}
                alt={alt}
                priority={priority}
                fallbackLabel={alt}
                sizes="(max-width: 768px) 90vw, 640px"
              />
            </div>
          ) : (
            <>
              {/* Toolbar */}
              <div className="flex items-center gap-2 border-b border-white/5 px-4 py-2">
                {[Bold, Italic, List, ImageIcon].map((Icon, i) => (
                  <div
                    key={i}
                    className="flex h-7 w-7 items-center justify-center rounded-md bg-white/[0.04] text-slate-400"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                ))}
                <div className="ml-auto h-2 w-16 rounded-full bg-nova-gradient opacity-70" />
              </div>

              {/* Body */}
              <div className="space-y-3 p-5 sm:p-7">
                <div className="h-5 w-2/3 rounded-md bg-gradient-to-r from-white/30 to-white/10" />
                <div className="h-2.5 w-full rounded bg-white/[0.07]" />
                <div className="h-2.5 w-11/12 rounded bg-white/[0.07]" />
                <div className="h-2.5 w-4/5 rounded bg-white/[0.07]" />
                <div className="h-2.5 w-full rounded bg-white/[0.05]" />
                <div className="h-2.5 w-3/4 rounded bg-white/[0.05]" />
                <div className="mt-4 flex gap-3">
                  <div className="h-16 w-28 rounded-lg bg-nova-blue/15 ring-1 ring-nova-blue/30" />
                  <div className="flex-1 space-y-2 py-1">
                    <div className="h-2.5 w-full rounded bg-white/[0.06]" />
                    <div className="h-2.5 w-5/6 rounded bg-white/[0.06]" />
                    <div className="h-2.5 w-2/3 rounded bg-white/[0.06]" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {/* Base */}
      <div className="mx-auto h-3 w-1/3 rounded-b-xl bg-gradient-to-b from-white/10 to-transparent" />
      <div className="mx-auto h-1 w-1/4 rounded-full bg-white/5" />
    </div>
  );
}
