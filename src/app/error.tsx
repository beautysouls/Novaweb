"use client";

import { useEffect } from "react";
import { RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-nova-bg px-6 text-center">
      <h1 className="text-3xl font-bold text-white sm:text-4xl">
        Si è verificato un errore
      </h1>
      <p className="max-w-md text-slate-400">
        Si è verificato un errore imprevisto durante il caricamento della
        pagina. Riprova.
      </p>
      <button
        onClick={reset}
        className="inline-flex items-center gap-2 rounded-full bg-nova-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:scale-105"
      >
        <RefreshCw className="h-4 w-4" />
        Riprova
      </button>
    </div>
  );
}
