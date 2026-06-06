import type { StatusKey } from "./data";
import { contactLinks } from "./data";

export type Lang = "it" | "en";

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "it", label: "Italiano" },
  { code: "en", label: "English" },
];

type NavLink = { label: string; href: string };
type StatusItem = { id: string; statusKey: StatusKey; statusLabel: string };

type ProductItem = StatusItem & {
  name: string;
  tagline: string;
  description: string;
  features: string[];
  badges?: Tag[];
};

type FeatureItem = {
  id: string;
  emoji: string;
  title: string;
  description: string;
  templates?: string[];
};

type RoadmapItem = {
  id: string;
  name: string;
  objectives?: string[];
};

type RoadmapGroup = {
  statusKey: StatusKey;
  statusLabel: string;
  items: RoadmapItem[];
};

type DownloadItem = StatusItem & {
  name: string;
  description: string;
  platform: string;
  availability?: string;
  buttonLabel: string;
  secondaryButtonLabel?: string;
  secondaryDisabled?: boolean;
};

type DownloadBadge = { id: "windows" | "stable" | "opensource"; label: string };

type FeaturedDownload = StatusItem & {
  name: string;
  description: string;
  version: string;
  versionLabel: string;
  badges: DownloadBadge[];
  features: string[];
  primaryButton: string;
  secondaryButton: string;
  note: string;
};

type ChangelogEntry = {
  id: string;
  product: string;
  version: string;
  date: string;
  changes: string[];
};

type SocialLink = { id: string; label: string; handle: string; href: string };
type FooterLink = { label: string; href: string; external?: boolean };
type FooterColumn = { title: string; links: FooterLink[] };

type Tag = { id: string; label: string };

type IconLink = { id: string; label: string; href: string };

type EcosystemCard = {
  id: string;
  emoji: string;
  title: string;
  description: string;
  statusKey: StatusKey;
  statusLabel: string;
};

type ShowcaseFeatureCard = {
  id: string;
  emoji: string;
  title: string;
  description: string;
};

export type Dictionary = {
  nav: { links: NavLink[]; download: string };
  hero: {
    badge: string;
    tagline: string;
    description: string;
    downloadApps: string;
    exploreProducts: string;
    ecosystem: string;
  };
  products: {
    eyebrow: string;
    title: string;
    description: string;
    download: string;
    learnMore: string;
    githubButton: string;
    testFlightButton: string;
    items: ProductItem[];
  };
  showcase: {
    eyebrow: string;
    name: string;
    description: string;
    badges: Tag[];
    primaryButton: string;
    secondaryButton: string;
    note: string;
    imageAlt: string;
    imageLabel: string;
    capabilitiesHeading: string;
    capabilities: Tag[];
  };
  novacloud: {
    eyebrow: string;
    title: string;
    subtitle: string;
    description: string;
    imageAlt: string;
    imageLabel: string;
    features: ShowcaseFeatureCard[];
  };
  features: {
    eyebrow: string;
    title: string;
    description: string;
    items: FeatureItem[];
  };
  roadmap: {
    eyebrow: string;
    title: string;
    description: string;
    objectivesLabel: string;
    groups: RoadmapGroup[];
  };
  downloads: {
    eyebrow: string;
    title: string;
    description: string;
    featuredHeading: string;
    moreHeading: string;
    featured: FeaturedDownload;
    items: DownloadItem[];
  };
  changelog: {
    eyebrow: string;
    title: string;
    description: string;
    entries: ChangelogEntry[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    githubLabel: string;
    socials: SocialLink[];
  };
  community: {
    eyebrow: string;
    title: string;
    description: string;
    buttons: IconLink[];
  };
  support: {
    eyebrow: string;
    title: string;
    description: string;
    button: string;
  };
  ecosystem: {
    eyebrow: string;
    title: string;
    description: string;
    cards: EcosystemCard[];
  };
  footer: {
    brand: string;
    slogan: string;
    description: string;
    columns: FooterColumn[];
    builtWith: string;
    rights: string;
  };
};

const it: Dictionary = {
  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Prodotti", href: "#products" },
      { label: "Download", href: "#downloads" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Contatti", href: "#contact" },
    ],
    download: "Scarica",
  },
  hero: {
    badge: "Un moderno ecosistema software",
    tagline: "Costruisci. Crea. Evolvi.",
    description:
      "Nova è un moderno ecosistema software dedicato alla produttività, alle applicazioni mobili e agli strumenti digitali del futuro.",
    downloadApps: "Scarica le app",
    exploreProducts: "Esplora i prodotti",
    ecosystem: "Parte del crescente ecosistema NOVA",
  },
  products: {
    eyebrow: "Prodotti",
    title: "Software pensato per il tuo modo di lavorare",
    description:
      "Un ecosistema curato di app dal design impeccabile, costruite per velocità, chiarezza ed evoluzione continua.",
    download: "Scarica",
    learnMore: "Scopri di più",
    githubButton: "Repository GitHub",
    testFlightButton: "Prossimamente TestFlight",
    items: [
      {
        id: "novadocs",
        name: "NovaDocs",
        tagline: "Editor di documenti desktop moderno.",
        description:
          "Un editor di documenti pulito, veloce e in costante miglioramento, pensato per la concentrazione e la fluidità sul desktop.",
        features: [
          "Interfaccia pulita",
          "Prestazioni elevate",
          "Aggiornamenti continui",
          "Supporto Windows",
        ],
        statusKey: "available",
        statusLabel: "Disponibile",
      },
      {
        id: "novamobile",
        name: "NovaMobile",
        tagline: "L'ecosistema Nova in tasca.",
        description:
          "Porta Nova ovunque. Un'esperienza mobile moderna e veloce, con l'integrazione cloud in arrivo.",
        features: [
          "UI moderna",
          "Supporto Android",
          "Esperienza veloce",
          "Futura integrazione cloud",
        ],
        statusKey: "beta",
        statusLabel: "Beta",
      },
      {
        id: "novatk",
        name: "NovaTK",
        tagline: "Fitness tracker personale per iPhone.",
        description:
          "Fitness tracker personale per iPhone sviluppato con SwiftUI e HealthKit. Pensato per allenamenti, progressi fisici e monitoraggio attività.",
        features: [
          "Schede allenamento",
          "Monitoraggio peso",
          "HealthKit",
          "Widget iOS",
          "Cronologia allenamenti",
        ],
        badges: [
          { id: "ios", label: "iOS" },
          { id: "alpha", label: "Alpha" },
          { id: "swiftui", label: "SwiftUI" },
        ],
        statusKey: "alpha",
        statusLabel: "Alpha",
      },
      {
        id: "novabeauty",
        name: "NovaBeauty",
        tagline: "Gestionale per centri estetici e beauty.",
        description:
          "Gestionale professionale per centri estetici, parrucchieri e attività beauty.",
        features: [
          "Gestione clienti",
          "Appuntamenti",
          "Storico trattamenti",
          "Dashboard attività",
        ],
        badges: [{ id: "alpha", label: "Alpha" }],
        statusKey: "alpha",
        statusLabel: "Alpha",
      },
    ],
  },
  showcase: {
    eyebrow: "Prodotto in evidenza",
    name: "NovaDocs",
    description:
      "NovaDocs è un editor documenti moderno con assistente IA locale, integrazione cloud e strumenti progettati per massimizzare la produttività.",
    badges: [
      { id: "ai", label: "Assistente IA Locale" },
      { id: "cloud", label: "NovaCloud" },
      { id: "offline", label: "Offline First" },
      { id: "windows", label: "Windows Desktop" },
    ],
    primaryButton: "Scarica per Windows",
    secondaryButton: "Note di rilascio",
    note: "Scarica l'ultima versione stabile di NovaDocs per Windows.",
    imageAlt: "Schermata dell'editor NovaDocs",
    imageLabel: "NovaDocs — Editor",
    capabilitiesHeading: "Tutto ciò che NovaDocs sa fare",
    capabilities: [
      { id: "editor", label: "Editor moderno" },
      { id: "ai", label: "Assistente IA integrato" },
      { id: "cloud", label: "NovaCloud" },
      { id: "import", label: "Import da telefono" },
      { id: "darktheme", label: "Tema scuro" },
      { id: "updates", label: "Aggiornamenti automatici" },
      { id: "resume", label: "AI Resume Builder" },
    ],
  },
  novacloud: {
    eyebrow: "Ecosistema",
    title: "NovaCloud",
    subtitle: "Sincronizzazione intelligente per l'ecosistema Nova.",
    description:
      "NovaCloud permette di gestire dispositivi, sincronizzazione e servizi collegati all'ecosistema Nova in un'unica esperienza integrata.",
    imageAlt: "Schermata delle impostazioni di NovaCloud",
    imageLabel: "NovaCloud — Impostazioni",
    features: [
      {
        id: "sync",
        emoji: "☁️",
        title: "Sincronizzazione",
        description: "Mantieni i tuoi dati sempre aggiornati.",
      },
      {
        id: "multidevice",
        emoji: "📱",
        title: "Multi Dispositivo",
        description: "Accedi da più dispositivi.",
      },
      {
        id: "privacy",
        emoji: "🔒",
        title: "Privacy",
        description: "Controllo e gestione locale dei dati.",
      },
    ],
  },
  features: {
    eyebrow: "Perché Nova",
    title: "Progettato per essere veloce, moderno e affidabile",
    description:
      "Ogni prodotto Nova nasce dagli stessi principi: prestazioni, design curato ed evoluzione costante.",
    items: [
      {
        id: "fast",
        emoji: "⚡",
        title: "Veloce",
        description: "Applicazioni costruite per velocità ed efficienza.",
      },
      {
        id: "modern",
        emoji: "🎨",
        title: "Moderno",
        description: "Esperienze utente belle e intuitive.",
      },
      {
        id: "reliable",
        emoji: "🔒",
        title: "Affidabile",
        description: "Software stabile con miglioramenti continui.",
      },
      {
        id: "evolving",
        emoji: "🚀",
        title: "In evoluzione",
        description: "Nuove funzionalità e prodotti sempre in sviluppo.",
      },
      {
        id: "resume",
        emoji: "📄",
        title: "AI Resume Builder",
        description:
          "Crea curriculum professionali in pochi minuti con template moderni e assistenza IA. Esporta in PDF e DOCX.",
        templates: [
          "Modern",
          "Professional",
          "Minimal",
          "Europass",
          "Creative",
        ],
      },
    ],
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "La direzione di Nova",
    description:
      "Uno sguardo trasparente su ciò che è stato rilasciato, ciò che stiamo costruendo e ciò che arriverà.",
    objectivesLabel: "Obiettivi",
    groups: [
      {
        statusKey: "completed",
        statusLabel: "Completato",
        items: [
          { id: "website", name: "Sito Nova" },
          { id: "novadocs", name: "NovaDocs" },
        ],
      },
      {
        statusKey: "inProgress",
        statusLabel: "In corso",
        items: [{ id: "novamobile", name: "NovaMobile" }],
      },
      {
        statusKey: "developing",
        statusLabel: "In sviluppo",
        items: [
          {
            id: "novatk",
            name: "NovaTK",
            objectives: [
              "Completamento Workout Session",
              "Cronologia allenamenti",
              "Integrazione HealthKit avanzata",
              "Widget attività",
              "Dashboard progressi",
              "Esportazione dati",
            ],
          },
          {
            id: "novabeauty",
            name: "NovaBeauty",
            objectives: [
              "Gestione clienti",
              "Appuntamenti",
              "Storico trattamenti",
              "Dashboard attività",
            ],
          },
        ],
      },
      {
        statusKey: "planned",
        statusLabel: "Pianificato",
        items: [
          { id: "cloud", name: "Nova Cloud" },
          { id: "account", name: "Nova Account" },
          { id: "ai", name: "Funzionalità AI" },
          { id: "future", name: "Applicazioni future" },
        ],
      },
    ],
  },
  downloads: {
    eyebrow: "Centro download",
    title: "Ottieni Nova sui tuoi dispositivi",
    description:
      "Scarica le ultime versioni stabili. Altre piattaforme e applicazioni sono in arrivo.",
    featuredHeading: "Download in evidenza",
    moreHeading: "Altre applicazioni",
    featured: {
      id: "novadocs",
      name: "NovaDocs",
      description:
        "Moderno editor documenti desktop progettato per produttività, semplicità e prestazioni.",
      version: "v1.0.8",
      versionLabel: "Versione",
      badges: [
        { id: "windows", label: "Windows" },
        { id: "stable", label: "Versione stabile" },
        { id: "opensource", label: "Open Source" },
      ],
      features: [
        "Interfaccia moderna",
        "Prestazioni elevate",
        "Aggiornamenti continui",
        "Supporto desktop Windows",
      ],
      primaryButton: "Scarica per Windows",
      secondaryButton: "Note di rilascio",
      note: "Scarica l'ultima versione stabile di NovaDocs per Windows.",
      statusKey: "available",
      statusLabel: "Disponibile",
    },
    items: [
      {
        id: "novamobile",
        name: "NovaMobile",
        description: "L'ecosistema Nova in tasca.",
        platform: "Android · .apk",
        statusKey: "beta",
        statusLabel: "Beta",
        buttonLabel: "Partecipa alla beta",
      },
      {
        id: "novatk",
        name: "NovaTK",
        description:
          "Fitness tracker personale per iPhone con SwiftUI e HealthKit.",
        platform: "iOS",
        availability: "Sviluppo attivo",
        statusKey: "alpha",
        statusLabel: "Alpha",
        buttonLabel: "Repository GitHub",
        secondaryButtonLabel: "Prossimamente TestFlight",
        secondaryDisabled: true,
      },
      {
        id: "novabeauty",
        name: "NovaBeauty",
        description:
          "Gestionale professionale per centri estetici, parrucchieri e attività beauty.",
        platform: "iOS",
        availability: "Sviluppo attivo",
        statusKey: "alpha",
        statusLabel: "Alpha",
        buttonLabel: "Repository GitHub",
        secondaryButtonLabel: "Prossimamente TestFlight",
        secondaryDisabled: true,
      },
      {
        id: "future",
        name: "Applicazioni future",
        description: "Altre app Nova sono in arrivo.",
        platform: "Multipiattaforma",
        statusKey: "comingSoon",
        statusLabel: "Prossimamente",
        buttonLabel: "Prossimamente",
      },
    ],
  },
  changelog: {
    eyebrow: "Changelog",
    title: "Novità di Nova",
    description:
      "Rilasciamo aggiornamenti di continuo. Ecco le ultime novità nell'ecosistema Nova.",
    entries: [
      {
        id: "novadocs-108",
        product: "NovaDocs",
        version: "v1.0.8",
        date: "Giugno 2026",
        changes: [
          "NovaDrop completamente operativo",
          "Trasferimento file tramite QR Code",
          "Correzione import da Firebase Storage",
          "Risolto errore CORS su download remoti",
          "Migliorata sincronizzazione NovaCloud",
          "Migliorati log diagnostici",
          "Stabilità generale aumentata",
        ],
      },
      {
        id: "novadocs-107",
        product: "NovaDocs",
        version: "v1.0.7",
        date: "Giugno 2026",
        changes: [
          "Nuovo AI Resume Builder",
          "5 template professionali per curriculum",
          "Esportazione PDF",
          "Esportazione DOCX",
          "Miglioramenti a NovaCloud",
          "Miglioramenti a NovaDrop",
          "Correzioni e ottimizzazioni generali",
        ],
      },
      {
        id: "novadocs",
        product: "NovaDocs",
        version: "v1.0.6",
        date: "Maggio 2026",
        changes: [
          "Interfaccia migliorata",
          "Bug corretti",
          "Prestazioni migliori",
        ],
      },
      {
        id: "novamobile",
        product: "NovaMobile",
        version: "Beta",
        date: "Maggio 2026",
        changes: [
          "Rilascio iniziale",
          "Miglioramenti dell'interfaccia",
          "Ottimizzazione delle prestazioni",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contatti",
    title: "Costruiamo insieme il futuro",
    description:
      "Domande, feedback o idee di collaborazione? Ci farebbe piacere sentirti.",
    githubLabel: "GitHub",
    socials: [
      {
        id: "instagram",
        label: "Instagram",
        handle: "@novaecosystem",
        href: contactLinks.instagram,
      },
      {
        id: "tiktok",
        label: "TikTok",
        handle: "@novaecosystem.app",
        href: contactLinks.tiktok,
      },
      {
        id: "discord",
        label: "Discord",
        handle: "Community Nova",
        href: contactLinks.discord,
      },
      {
        id: "github",
        label: "GitHub",
        handle: "NovaEcosystemOfficial",
        href: contactLinks.github,
      },
    ],
  },
  community: {
    eyebrow: "Community",
    title: "Unisciti alla community di Nova Ecosystem",
    description:
      "Segui lo sviluppo di NovaDocs, NovaMobile, NovaBeauty, NovaTK e NovaCloud. Entra nella community, condividi idee, segnala bug e aiutaci a plasmare il futuro di Nova Ecosystem.",
    buttons: [
      { id: "discord", label: "Entra in Discord", href: contactLinks.discord },
      {
        id: "instagram",
        label: "Segui su Instagram",
        href: contactLinks.instagram,
      },
      { id: "tiktok", label: "Segui su TikTok", href: contactLinks.tiktok },
      { id: "github", label: "Vai su GitHub", href: contactLinks.github },
    ],
  },
  support: {
    eyebrow: "Supporto",
    title: "Sostieni Nova Ecosystem",
    description:
      "Nova Ecosystem è un progetto indipendente costruito da zero. Se ti piacciono NovaDocs, NovaMobile, NovaBeauty, NovaTK e NovaCloud e vuoi sostenere lo sviluppo futuro, offrici un caffè.",
    button: "Sostieni Nova Ecosystem",
  },
  ecosystem: {
    eyebrow: "Ecosistema",
    title: "Nova Ecosystem",
    description:
      "Un moderno ecosistema di produttività pensato per desktop, mobile e cloud.",
    cards: [
      {
        id: "novadocs",
        emoji: "📄",
        title: "NovaDocs",
        description:
          "Editor di documenti moderno per produttività e organizzazione.",
        statusKey: "available",
        statusLabel: "Attivo",
      },
      {
        id: "novamobile",
        emoji: "📱",
        title: "NovaMobile",
        description: "App companion mobile per l'ecosistema Nova.",
        statusKey: "inProgress",
        statusLabel: "In sviluppo",
      },
      {
        id: "novacloud",
        emoji: "☁️",
        title: "NovaCloud",
        description: "Piattaforma cloud per sincronizzazione e archiviazione.",
        statusKey: "comingSoon",
        statusLabel: "Prossimamente",
      },
    ],
  },
  footer: {
    brand: "Nova Ecosystem",
    slogan: "Build. Create. Evolve.",
    description:
      "Un moderno ecosistema di produttività pensato per desktop, mobile e cloud.",
    columns: [
      {
        title: "Link rapidi",
        links: [
          { label: "Home", href: "#home" },
          { label: "Prodotti", href: "#products" },
          { label: "Roadmap", href: "#roadmap" },
          { label: "Contatti", href: "#contact" },
        ],
      },
      {
        title: "Progetti",
        links: [
          { label: "NovaDocs", href: "#novadocs" },
          { label: "NovaMobile", href: "#ecosystem" },
          { label: "NovaTK", href: "#products" },
          { label: "NovaBeauty", href: "#products" },
          { label: "NovaCloud", href: "#novacloud" },
        ],
      },
      {
        title: "Community",
        links: [
          { label: "Discord", href: contactLinks.discord, external: true },
          { label: "Instagram", href: contactLinks.instagram, external: true },
          { label: "TikTok", href: contactLinks.tiktok, external: true },
          { label: "GitHub", href: contactLinks.github, external: true },
        ],
      },
      {
        title: "Supporto",
        links: [
          {
            label: "Sostieni Nova Ecosystem",
            href: contactLinks.paypal,
            external: true,
          },
        ],
      },
      {
        title: "Contatti",
        links: [
          { label: contactLinks.email, href: `mailto:${contactLinks.email}` },
        ],
      },
    ],
    builtWith: "Realizzato con Next.js, TypeScript e Tailwind CSS.",
    rights: "Tutti i diritti riservati.",
  },
};

const en: Dictionary = {
  nav: {
    links: [
      { label: "Home", href: "#home" },
      { label: "Products", href: "#products" },
      { label: "Downloads", href: "#downloads" },
      { label: "Roadmap", href: "#roadmap" },
      { label: "Contact", href: "#contact" },
    ],
    download: "Download",
  },
  hero: {
    badge: "A modern software ecosystem",
    tagline: "Build. Create. Evolve.",
    description:
      "Nova is a modern software ecosystem focused on productivity, mobile applications, and future digital tools.",
    downloadApps: "Download Apps",
    exploreProducts: "Explore Products",
    ecosystem: "Part of the growing NOVA ecosystem",
  },
  products: {
    eyebrow: "Products",
    title: "Software crafted for the way you work",
    description:
      "A focused ecosystem of beautifully designed apps — built for speed, clarity and continuous evolution.",
    download: "Download",
    learnMore: "Learn More",
    githubButton: "GitHub Repository",
    testFlightButton: "TestFlight Coming Soon",
    items: [
      {
        id: "novadocs",
        name: "NovaDocs",
        tagline: "Modern desktop document editor.",
        description:
          "A clean, fast and continuously improving document editor built for focus and flow on the desktop.",
        features: [
          "Clean interface",
          "Fast performance",
          "Continuous updates",
          "Windows support",
        ],
        statusKey: "available",
        statusLabel: "Available",
      },
      {
        id: "novamobile",
        name: "NovaMobile",
        tagline: "The Nova ecosystem in your pocket.",
        description:
          "Take Nova everywhere. A modern, fast mobile experience with future cloud integration on the way.",
        features: [
          "Modern UI",
          "Android support",
          "Fast experience",
          "Future cloud integration",
        ],
        statusKey: "beta",
        statusLabel: "Beta",
      },
      {
        id: "novatk",
        name: "NovaTK",
        tagline: "Personal fitness tracker for iPhone.",
        description:
          "Personal fitness tracker for iPhone built with SwiftUI and HealthKit. Designed for workouts, physical progress and activity monitoring.",
        features: [
          "Workout cards",
          "Weight tracking",
          "HealthKit",
          "iOS widgets",
          "Workout history",
        ],
        badges: [
          { id: "ios", label: "iOS" },
          { id: "alpha", label: "Alpha" },
          { id: "swiftui", label: "SwiftUI" },
        ],
        statusKey: "alpha",
        statusLabel: "Alpha",
      },
      {
        id: "novabeauty",
        name: "NovaBeauty",
        tagline: "Management app for beauty salons.",
        description:
          "Professional management software for beauty centers, hair salons and wellness businesses.",
        features: [
          "Client management",
          "Appointments",
          "Treatment history",
          "Activity dashboard",
        ],
        badges: [{ id: "alpha", label: "Alpha" }],
        statusKey: "alpha",
        statusLabel: "Alpha",
      },
    ],
  },
  showcase: {
    eyebrow: "Featured product",
    name: "NovaDocs",
    description:
      "NovaDocs is a modern document editor with a local AI assistant, cloud integration and tools designed to maximize your productivity.",
    badges: [
      { id: "ai", label: "Local AI Assistant" },
      { id: "cloud", label: "NovaCloud" },
      { id: "offline", label: "Offline First" },
      { id: "windows", label: "Windows Desktop" },
    ],
    primaryButton: "Download for Windows",
    secondaryButton: "Release notes",
    note: "Download the latest stable version of NovaDocs for Windows.",
    imageAlt: "NovaDocs editor screenshot",
    imageLabel: "NovaDocs — Editor",
    capabilitiesHeading: "Everything NovaDocs can do",
    capabilities: [
      { id: "editor", label: "Modern editor" },
      { id: "ai", label: "Built-in AI assistant" },
      { id: "cloud", label: "NovaCloud" },
      { id: "import", label: "Import from phone" },
      { id: "darktheme", label: "Dark theme" },
      { id: "updates", label: "Automatic updates" },
      { id: "resume", label: "AI Resume Builder" },
    ],
  },
  novacloud: {
    eyebrow: "Ecosystem",
    title: "NovaCloud",
    subtitle: "Smart sync for the Nova ecosystem.",
    description:
      "NovaCloud lets you manage devices, synchronization and connected services across the Nova ecosystem in one integrated experience.",
    imageAlt: "NovaCloud settings screenshot",
    imageLabel: "NovaCloud — Settings",
    features: [
      {
        id: "sync",
        emoji: "☁️",
        title: "Synchronization",
        description: "Keep your data always up to date.",
      },
      {
        id: "multidevice",
        emoji: "📱",
        title: "Multi-device",
        description: "Access from multiple devices.",
      },
      {
        id: "privacy",
        emoji: "🔒",
        title: "Privacy",
        description: "Local control and management of your data.",
      },
    ],
  },
  features: {
    eyebrow: "Why Nova",
    title: "Designed to be fast, modern and reliable",
    description:
      "Every Nova product is built on the same principles — performance, beautiful design and constant evolution.",
    items: [
      {
        id: "fast",
        emoji: "⚡",
        title: "Fast",
        description: "Applications built for speed and efficiency.",
      },
      {
        id: "modern",
        emoji: "🎨",
        title: "Modern",
        description: "Beautiful and intuitive user experiences.",
      },
      {
        id: "reliable",
        emoji: "🔒",
        title: "Reliable",
        description: "Stable software with continuous improvements.",
      },
      {
        id: "evolving",
        emoji: "🚀",
        title: "Evolving",
        description: "New features and products constantly in development.",
      },
      {
        id: "resume",
        emoji: "📄",
        title: "AI Resume Builder",
        description:
          "Create professional resumes in minutes with modern templates and AI assistance. Export to PDF and DOCX.",
        templates: [
          "Modern",
          "Professional",
          "Minimal",
          "Europass",
          "Creative",
        ],
      },
    ],
  },
  roadmap: {
    eyebrow: "Roadmap",
    title: "Where Nova is headed",
    description:
      "A transparent look at what's shipped, what we're building, and what's coming next.",
    objectivesLabel: "Goals",
    groups: [
      {
        statusKey: "completed",
        statusLabel: "Completed",
        items: [
          { id: "website", name: "Nova Website" },
          { id: "novadocs", name: "NovaDocs" },
        ],
      },
      {
        statusKey: "inProgress",
        statusLabel: "In Progress",
        items: [{ id: "novamobile", name: "NovaMobile" }],
      },
      {
        statusKey: "developing",
        statusLabel: "In Development",
        items: [
          {
            id: "novatk",
            name: "NovaTK",
            objectives: [
              "Workout Session completion",
              "Workout history",
              "Advanced HealthKit integration",
              "Activity widgets",
              "Progress dashboard",
              "Data export",
            ],
          },
          {
            id: "novabeauty",
            name: "NovaBeauty",
            objectives: [
              "Client management",
              "Appointments",
              "Treatment history",
              "Activity dashboard",
            ],
          },
        ],
      },
      {
        statusKey: "planned",
        statusLabel: "Planned",
        items: [
          { id: "cloud", name: "Nova Cloud" },
          { id: "account", name: "Nova Account" },
          { id: "ai", name: "AI Features" },
          { id: "future", name: "Future Applications" },
        ],
      },
    ],
  },
  downloads: {
    eyebrow: "Download Center",
    title: "Get Nova on your devices",
    description:
      "Download the latest stable builds. More platforms and applications are on the way.",
    featuredHeading: "Featured download",
    moreHeading: "More applications",
    featured: {
      id: "novadocs",
      name: "NovaDocs",
      description:
        "Modern desktop document editor designed for productivity, simplicity and performance.",
      version: "v1.0.8",
      versionLabel: "Version",
      badges: [
        { id: "windows", label: "Windows" },
        { id: "stable", label: "Stable Release" },
        { id: "opensource", label: "Open Source" },
      ],
      features: [
        "Modern Interface",
        "Fast Performance",
        "Continuous Updates",
        "Windows Desktop Support",
      ],
      primaryButton: "Download for Windows",
      secondaryButton: "Release notes",
      note: "Download the latest stable version of NovaDocs for Windows.",
      statusKey: "available",
      statusLabel: "Available",
    },
    items: [
      {
        id: "novamobile",
        name: "NovaMobile",
        description: "The Nova ecosystem in your pocket.",
        platform: "Android · .apk",
        statusKey: "beta",
        statusLabel: "Beta",
        buttonLabel: "Join Beta",
      },
      {
        id: "novatk",
        name: "NovaTK",
        description:
          "Personal fitness tracker for iPhone with SwiftUI and HealthKit.",
        platform: "iOS",
        availability: "Active development",
        statusKey: "alpha",
        statusLabel: "Alpha",
        buttonLabel: "GitHub Repository",
        secondaryButtonLabel: "TestFlight Coming Soon",
        secondaryDisabled: true,
      },
      {
        id: "novabeauty",
        name: "NovaBeauty",
        description:
          "Professional management software for beauty centers, hair salons and wellness businesses.",
        platform: "iOS",
        availability: "Active development",
        statusKey: "alpha",
        statusLabel: "Alpha",
        buttonLabel: "GitHub Repository",
        secondaryButtonLabel: "TestFlight Coming Soon",
        secondaryDisabled: true,
      },
      {
        id: "future",
        name: "Future Applications",
        description: "More Nova apps are on the way.",
        platform: "Cross-platform",
        statusKey: "comingSoon",
        statusLabel: "Coming Soon",
        buttonLabel: "Coming Soon",
      },
    ],
  },
  changelog: {
    eyebrow: "Changelog",
    title: "What's new in Nova",
    description:
      "We ship continuously. Here are the latest updates across the Nova ecosystem.",
    entries: [
      {
        id: "novadocs-108",
        product: "NovaDocs",
        version: "v1.0.8",
        date: "June 2026",
        changes: [
          "NovaDrop fully operational",
          "QR Code file transfer",
          "Fixed import from Firebase Storage",
          "Fixed CORS error on remote downloads",
          "Improved NovaCloud synchronization",
          "Improved diagnostic logs",
          "Increased overall stability",
        ],
      },
      {
        id: "novadocs-107",
        product: "NovaDocs",
        version: "v1.0.7",
        date: "June 2026",
        changes: [
          "New AI Resume Builder",
          "5 professional resume templates",
          "PDF export",
          "DOCX export",
          "NovaCloud improvements",
          "NovaDrop improvements",
          "General fixes and optimizations",
        ],
      },
      {
        id: "novadocs",
        product: "NovaDocs",
        version: "v1.0.6",
        date: "May 2026",
        changes: ["Improved UI", "Fixed bugs", "Better performance"],
      },
      {
        id: "novamobile",
        product: "NovaMobile",
        version: "Beta",
        date: "May 2026",
        changes: [
          "Initial release",
          "UI improvements",
          "Performance optimization",
        ],
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Let's build the future together",
    description:
      "Questions, feedback or partnership ideas? We'd love to hear from you.",
    githubLabel: "GitHub",
    socials: [
      {
        id: "instagram",
        label: "Instagram",
        handle: "@novaecosystem",
        href: contactLinks.instagram,
      },
      {
        id: "tiktok",
        label: "TikTok",
        handle: "@novaecosystem.app",
        href: contactLinks.tiktok,
      },
      {
        id: "discord",
        label: "Discord",
        handle: "Nova Community",
        href: contactLinks.discord,
      },
      {
        id: "github",
        label: "GitHub",
        handle: "NovaEcosystemOfficial",
        href: contactLinks.github,
      },
    ],
  },
  community: {
    eyebrow: "Community",
    title: "Join the Nova Ecosystem Community",
    description:
      "Follow the development of NovaDocs, NovaMobile, NovaBeauty, NovaTK and NovaCloud. Join the community, share ideas, report bugs and help shape the future of Nova Ecosystem.",
    buttons: [
      { id: "discord", label: "Join Discord", href: contactLinks.discord },
      {
        id: "instagram",
        label: "Follow on Instagram",
        href: contactLinks.instagram,
      },
      { id: "tiktok", label: "Follow on TikTok", href: contactLinks.tiktok },
      { id: "github", label: "View GitHub", href: contactLinks.github },
    ],
  },
  support: {
    eyebrow: "Support",
    title: "Support Nova Ecosystem",
    description:
      "Nova Ecosystem is an independent project built from scratch. If you enjoy NovaDocs, NovaMobile, NovaBeauty, NovaTK and NovaCloud and want to support future development, consider offering a coffee.",
    button: "Support Nova Ecosystem",
  },
  ecosystem: {
    eyebrow: "Ecosystem",
    title: "Nova Ecosystem",
    description:
      "A modern productivity ecosystem designed for desktop, mobile and cloud.",
    cards: [
      {
        id: "novadocs",
        emoji: "📄",
        title: "NovaDocs",
        description: "Modern document editor for productivity and organization.",
        statusKey: "available",
        statusLabel: "Active",
      },
      {
        id: "novamobile",
        emoji: "📱",
        title: "NovaMobile",
        description: "Mobile companion app for the Nova ecosystem.",
        statusKey: "inProgress",
        statusLabel: "In Development",
      },
      {
        id: "novacloud",
        emoji: "☁️",
        title: "NovaCloud",
        description: "Cloud platform for synchronization and storage.",
        statusKey: "comingSoon",
        statusLabel: "Coming Soon",
      },
    ],
  },
  footer: {
    brand: "Nova Ecosystem",
    slogan: "Build. Create. Evolve.",
    description:
      "A modern productivity ecosystem designed for desktop, mobile and cloud.",
    columns: [
      {
        title: "Quick Links",
        links: [
          { label: "Home", href: "#home" },
          { label: "Products", href: "#products" },
          { label: "Roadmap", href: "#roadmap" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Projects",
        links: [
          { label: "NovaDocs", href: "#novadocs" },
          { label: "NovaMobile", href: "#ecosystem" },
          { label: "NovaTK", href: "#products" },
          { label: "NovaBeauty", href: "#products" },
          { label: "NovaCloud", href: "#novacloud" },
        ],
      },
      {
        title: "Community",
        links: [
          { label: "Discord", href: contactLinks.discord, external: true },
          { label: "Instagram", href: contactLinks.instagram, external: true },
          { label: "TikTok", href: contactLinks.tiktok, external: true },
          { label: "GitHub", href: contactLinks.github, external: true },
        ],
      },
      {
        title: "Support",
        links: [
          {
            label: "Support Nova Ecosystem",
            href: contactLinks.paypal,
            external: true,
          },
        ],
      },
      {
        title: "Contact",
        links: [
          { label: contactLinks.email, href: `mailto:${contactLinks.email}` },
        ],
      },
    ],
    builtWith: "Built with Next.js, TypeScript & Tailwind CSS.",
    rights: "All rights reserved.",
  },
};

export const translations: Record<Lang, Dictionary> = { it, en };
