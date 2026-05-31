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
import { Footer } from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "NOVA",
  slogan: "Costruisci. Crea. Evolvi.",
  description:
    "Nova è un moderno ecosistema software dedicato alla produttività, alle applicazioni mobili e agli strumenti digitali del futuro.",
  url: "https://nova.example.com",
  sameAs: [
    "https://github.com/nova",
    "https://x.com/novahq",
    "https://linkedin.com/company/nova",
  ],
  makesOffer: [
    { "@type": "Offer", name: "NovaDocs" },
    { "@type": "Offer", name: "NovaMobile" },
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
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
