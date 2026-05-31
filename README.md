# NOVA — Build. Create. Evolve.

A premium, production-ready marketing website for **NOVA**, a modern software
ecosystem focused on productivity, mobile applications, and future digital
tools.

Built with a high-end SaaS aesthetic inspired by Linear, Notion and Apple —
dark theme, glassmorphism, blue→purple gradients and smooth Framer Motion
animations.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS** 3
- **Framer Motion** (animations)
- **Lucide React** (icons)
- Fully responsive (mobile-first) & SEO optimized

## Getting Started

Install dependencies (already done if you used the setup script):

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build   # Create an optimized production build
npm run start   # Run the production server (after build)
npm run lint    # Lint the project
```

## Project Structure

```
novaweb/
├── public/                     # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout, fonts & SEO metadata
│   │   ├── page.tsx            # Home page (composes all sections)
│   │   ├── globals.css         # Tailwind layers + design tokens
│   │   ├── loading.tsx         # Route-level loading UI
│   │   ├── error.tsx           # Error boundary UI
│   │   ├── not-found.tsx       # 404 page
│   │   ├── robots.ts           # robots.txt (generated)
│   │   └── sitemap.ts          # sitemap.xml (generated)
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navbar (transparent → glass on scroll)
│   │   ├── Hero.tsx            # Hero with laptop + phone mockups
│   │   ├── Products.tsx        # NovaDocs & NovaMobile product cards
│   │   ├── Features.tsx        # Fast / Modern / Reliable / Evolving
│   │   ├── Roadmap.tsx         # Timeline: Completed / In Progress / Planned
│   │   ├── Downloads.tsx       # Download center cards
│   │   ├── Changelog.tsx       # Release notes
│   │   ├── Contact.tsx         # Email, GitHub & social links
│   │   ├── Footer.tsx          # Branding, quick links & socials
│   │   └── ui/                 # Reusable building blocks
│   │       ├── Button.tsx
│   │       ├── GlassCard.tsx
│   │       ├── Reveal.tsx
│   │       ├── SectionHeading.tsx
│   │       ├── StatusBadge.tsx
│   │       ├── LaptopMockup.tsx
│   │       └── PhoneMockup.tsx
│   └── lib/
│       ├── data.ts             # All site content (single source of truth)
│       └── utils.ts            # cn() class-name helper
├── tailwind.config.ts          # Theme, gradients, animations
├── next.config.mjs
└── tsconfig.json
```

## Customization

All content (products, features, roadmap, downloads, changelog, contact) lives
in `src/lib/data.ts`. Edit that single file to update the site copy without
touching components.

Brand colors, gradients and animations are defined in `tailwind.config.ts`
under the `nova` color palette and `backgroundImage` / `keyframes` keys.
