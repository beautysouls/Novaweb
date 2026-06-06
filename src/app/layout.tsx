import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
    default: "Nova Ecosystem | NovaDocs, NovaMobile, NovaBeauty & NovaCloud",
    template: "%s · Nova Ecosystem",
  },
  description:
    "Nova Ecosystem is building the next generation productivity ecosystem including NovaDocs, NovaMobile, NovaBeauty and NovaCloud.",
  keywords: [
    "Nova Ecosystem",
    "NovaDocs",
    "NovaMobile",
    "NovaBeauty",
    "NovaCloud",
    "Document Editor",
    "Productivity Software",
    "Cloud Workspace",
    "Mobile Productivity",
    "Flutter",
    "Electron",
    "AI Assistant",
  ],
  authors: [{ name: "Nova Ecosystem" }],
  creator: "Nova Ecosystem",
  applicationName: "Nova Ecosystem",
  openGraph: {
    type: "website",
    url: siteUrl,
    locale: "en_US",
    title: "Nova Ecosystem | NovaDocs, NovaMobile, NovaBeauty & NovaCloud",
    description:
      "Nova Ecosystem is building the next generation productivity ecosystem including NovaDocs, NovaMobile, NovaBeauty and NovaCloud.",
    siteName: "Nova Ecosystem",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Ecosystem | NovaDocs, NovaMobile, NovaBeauty & NovaCloud",
    description:
      "Nova Ecosystem is building the next generation productivity ecosystem including NovaDocs, NovaMobile, NovaBeauty and NovaCloud.",
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
