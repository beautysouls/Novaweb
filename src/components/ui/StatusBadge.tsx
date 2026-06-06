import type { StatusKey } from "@/lib/data";
import { cn } from "@/lib/utils";

const styles: Record<StatusKey, string> = {
  available: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  completed: "bg-emerald-500/15 text-emerald-300 ring-emerald-500/30",
  beta: "bg-amber-500/15 text-amber-300 ring-amber-500/30",
  inProgress: "bg-blue-500/15 text-blue-300 ring-blue-500/30",
  developing: "bg-pink-500/15 text-pink-300 ring-purple-500/30",
  comingSoon: "bg-violet-500/15 text-violet-300 ring-violet-500/30",
  planned: "bg-violet-500/15 text-violet-300 ring-violet-500/30",
};

export function StatusBadge({
  status,
  label,
}: {
  status: StatusKey;
  label: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1",
        styles[status]
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {label}
    </span>
  );
}
