# Project Structure

## What
The portfolio uses Next.js App Router with a clean, modular file structure separating concerns into layout, sections, UI components, and shared utilities.

## Directory Layout

```
portpoliov4/
├── docs/                    # Feature documentation
├── public/images/           # Static assets (project screenshots)
├── src/
│   ├── app/
│   │   ├── globals.css      # Tailwind 4 @theme + CSS variables + base styles
│   │   ├── layout.tsx       # Root layout (metadata, fonts, providers)
│   │   ├── page.tsx         # Home page — assembles all sections
│   │   └── not-found.tsx    # Custom 404 page
│   ├── components/
│   │   ├── layout/          # Navbar.tsx, Footer.tsx
│   │   ├── sections/        # 8 page sections (Hero, Featured, Projects, Skills, etc.)
│   │   └── ui/              # 20+ reusable UI components
│   ├── lib/
│   │   ├── animations.ts    # Framer Motion variant definitions
│   │   ├── constants.ts     # Site config, social links, nav links
│   │   ├── data.ts          # All static content (projects, skills, etc.)
│   │   └── sounds.ts        # Web Audio API beep utilities
│   └── types/
│       └── index.ts         # TypeScript interfaces
├── eslint.config.mjs        # ESLint 9 flat config with strict rules
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Key Decisions

- **`src/` directory**: Keeps source code separate from config files at root
- **`components/` split into 3 folders**: `layout/` (site-wide), `sections/` (page-level), `ui/` (reusable primitives)
- **`lib/` for shared logic**: Animations, data, constants, and sounds are centralized for easy updates
- **`types/` separate folder**: TypeScript interfaces kept independent from implementation

## File Paths
- Root layout: `src/app/layout.tsx`
- Home page: `src/app/page.tsx`
- Design system: `src/app/globals.css`
- Static data: `src/lib/data.ts`
