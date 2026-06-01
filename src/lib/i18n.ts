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
};

type FeatureItem = {
  id: string;
  emoji: string;
  title: string;
  description: string;
  templates?: string[];
};

type RoadmapGroup = {
  statusKey: StatusKey;
  statusLabel: string;
  items: { id: string; name: string }[];
};

type DownloadItem = StatusItem & {
  name: string;
  description: string;
  platform: string;
  buttonLabel: string;
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

type SocialLink = { label: string; handle: string; href: string };
type FooterColumn = { title: string; links: NavLink[] };

type Tag = { id: string; label: string };

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
  footer: {
    tagline: string;
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
    groups: [
      {
        statusKey: "completed",
        statusLabel: "Completato",
        items: [{ id: "website", name: "Sito Nova" }],
      },
      {
        statusKey: "inProgress",
        statusLabel: "In corso",
        items: [
          { id: "novadocs", name: "NovaDocs" },
          { id: "novamobile", name: "NovaMobile" },
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
      version: "v1.0.7",
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
      { label: "Twitter / X", handle: "@novahq", href: contactLinks.twitter },
      { label: "LinkedIn", handle: "/company/nova", href: contactLinks.linkedin },
      { label: "Discord", handle: "Community Nova", href: contactLinks.discord },
    ],
  },
  footer: {
    tagline:
      "Costruisci. Crea. Evolvi. — un moderno ecosistema software dedicato alla produttività, alle applicazioni mobili e agli strumenti digitali del futuro.",
    columns: [
      {
        title: "Prodotto",
        links: [
          { label: "Prodotti", href: "#products" },
          { label: "Download", href: "#downloads" },
          { label: "Roadmap", href: "#roadmap" },
          { label: "Changelog", href: "#changelog" },
        ],
      },
      {
        title: "Azienda",
        links: [
          { label: "Home", href: "#home" },
          { label: "Contatti", href: "#contact" },
          { label: "GitHub", href: contactLinks.github },
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
    groups: [
      {
        statusKey: "completed",
        statusLabel: "Completed",
        items: [{ id: "website", name: "Nova Website" }],
      },
      {
        statusKey: "inProgress",
        statusLabel: "In Progress",
        items: [
          { id: "novadocs", name: "NovaDocs" },
          { id: "novamobile", name: "NovaMobile" },
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
      version: "v1.0.7",
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
      { label: "Twitter / X", handle: "@novahq", href: contactLinks.twitter },
      { label: "LinkedIn", handle: "/company/nova", href: contactLinks.linkedin },
      { label: "Discord", handle: "Nova Community", href: contactLinks.discord },
    ],
  },
  footer: {
    tagline:
      "Build. Create. Evolve. — a modern software ecosystem focused on productivity, mobile applications, and future digital tools.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Products", href: "#products" },
          { label: "Downloads", href: "#downloads" },
          { label: "Roadmap", href: "#roadmap" },
          { label: "Changelog", href: "#changelog" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Home", href: "#home" },
          { label: "Contact", href: "#contact" },
          { label: "GitHub", href: contactLinks.github },
        ],
      },
    ],
    builtWith: "Built with Next.js, TypeScript & Tailwind CSS.",
    rights: "All rights reserved.",
  },
};

export const translations: Record<Lang, Dictionary> = { it, en };
