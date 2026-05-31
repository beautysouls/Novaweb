import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center gap-6 overflow-hidden bg-nova-bg px-6 text-center">
      <div className="pointer-events-none absolute inset-0 bg-nova-radial" />
      <p className="text-8xl font-black text-gradient">404</p>
      <h1 className="text-2xl font-bold text-white sm:text-3xl">
        Pagina non trovata
      </h1>
      <p className="max-w-md text-slate-400">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/[0.08]"
      >
        <ArrowLeft className="h-4 w-4" />
        Torna alla home
      </Link>
    </div>
  );
}
