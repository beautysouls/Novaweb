import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://nova.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NOVA — Costruisci. Crea. Evolvi.",
    template: "%s · NOVA",
  },
  description:
    "Nova è un moderno ecosistema software dedicato alla produttività, alle applicazioni mobili e agli strumenti digitali del futuro.",
  keywords: [
    "NOVA",
    "NovaDocs",
    "NovaMobile",
    "software produttività",
    "editor di documenti",
    "applicazioni mobili",
    "ecosistema software",
  ],
  authors: [{ name: "NOVA" }],
  creator: "NOVA",
  applicationName: "NOVA",
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "it_IT",
    title: "NOVA — Costruisci. Crea. Evolvi.",
    description:
      "Un moderno ecosistema software dedicato alla produttività, alle applicazioni mobili e agli strumenti digitali del futuro.",
    siteName: "NOVA",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOVA — Costruisci. Crea. Evolvi.",
    description:
      "Un moderno ecosistema software dedicato alla produttività, alle applicazioni mobili e agli strumenti digitali del futuro.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-nova-bg font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
