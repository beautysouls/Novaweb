import { LanguageProvider } from "@/context/LanguageProvider";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { NovaDocsShowcase } from "@/components/NovaDocsShowcase";
import { NovaCloud } from "@/components/NovaCloud";
import { Features } from "@/components/Features";
import { Roadmap } from "@/components/Roadmap";
import { Downloads } from "@/components/Downloads";
import { Changelog } from "@/components/Changelog";
import { Contact } from "@/components/Contact";
import { Community } from "@/components/Community";
import { Support } from "@/components/Support";
import { Ecosystem } from "@/components/Ecosystem";
import { Footer } from "@/components/Footer";
import { contactLinks } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Nova Ecosystem",
  slogan: "Build. Create. Evolve.",
  description:
    "Nova Ecosystem is building the next generation productivity ecosystem including NovaDocs, NovaMobile, NovaBeauty and NovaCloud.",
  url: "https://nova.example.com",
  sameAs: [
    contactLinks.github,
    contactLinks.instagram,
    contactLinks.tiktok,
    contactLinks.discord,
  ],
  makesOffer: [
    { "@type": "Offer", name: "NovaDocs" },
    { "@type": "Offer", name: "NovaMobile" },
    { "@type": "Offer", name: "NovaBeauty" },
    { "@type": "Offer", name: "NovaCloud" },
  ],
};

export default function Home() {
  return (
    <LanguageProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="relative">
        <Hero />
        <Products />
        <NovaDocsShowcase />
        <NovaCloud />
        <Features />
        <Roadmap />
        <Downloads />
        <Changelog />
        <Ecosystem />
        <Community />
        <Support />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
