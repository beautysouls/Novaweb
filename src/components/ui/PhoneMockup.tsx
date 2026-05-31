import { Home, Search, Bell, User, Smartphone } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="w-40 sm:w-48">
      <div className="relative rounded-[2.2rem] border border-white/10 bg-[#0b0d1a] p-2 shadow-2xl shadow-black/60">
        <div className="relative overflow-hidden rounded-[1.7rem] border border-white/5 bg-gradient-to-b from-[#0d1020] to-[#070912]">
          {/* Notch */}
          <div className="absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-white/10" />

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pb-2 pt-5 text-[9px] font-medium text-slate-500">
            <span>9:41</span>
            <Smartphone className="h-3 w-3 text-nova-purple" />
          </div>

          {/* Header */}
          <div className="px-4">
            <div className="h-3.5 w-20 rounded bg-gradient-to-r from-white/30 to-white/10" />
          </div>

          {/* Hero card */}
          <div className="px-4 pt-3">
            <div className="h-20 rounded-2xl bg-nova-gradient opacity-90" />
          </div>

          {/* List */}
          <div className="space-y-2.5 p-4">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-xl bg-white/[0.04] p-2.5"
              >
                <div className="h-7 w-7 rounded-lg bg-nova-purple/30" />
                <div className="flex-1 space-y-1.5">
                  <div className="h-1.5 w-3/4 rounded bg-white/15" />
                  <div className="h-1.5 w-1/2 rounded bg-white/10" />
                </div>
              </div>
            ))}
          </div>

          {/* Tab bar */}
          <div className="flex items-center justify-around border-t border-white/5 px-4 py-3">
            {[Home, Search, Bell, User].map((Icon, i) => (
              <Icon
                key={i}
                className={`h-4 w-4 ${i === 0 ? "text-nova-purple" : "text-slate-600"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
