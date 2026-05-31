export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-nova-bg">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-white/10 border-t-nova-purple" />
          <div className="absolute inset-2 animate-pulse rounded-full bg-nova-gradient opacity-60 blur-md" />
        </div>
        <p className="text-sm font-medium tracking-widest text-slate-400">
          CARICAMENTO NOVA
        </p>
      </div>
    </div>
  );
}
