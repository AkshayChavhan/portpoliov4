# Tech Stack

## What
The technology choices prioritize performance, developer experience, and modern best practices.

## Core Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| **Next.js** | 16.1.6 | React framework with App Router, SSR/SSG, file-based routing |
| **React** | 19.2.3 | UI library with server components support |
| **TypeScript** | 5.x | Type safety across the entire codebase |
| **Tailwind CSS** | 4.x | Utility-first CSS with CSS-native `@theme` directive |
| **Framer Motion** | 12.x | Production-grade animation library for React |
| **Lucide React** | 0.563.x | Lightweight, customizable icon set |
| **ESLint** | 9.x | Code quality and consistency enforcement |

## Key Decisions

### Why Next.js?
- Built-in SSR/SSG for SEO (critical for a portfolio)
- App Router with server/client component split reduces JavaScript bundle
- Image optimization, font optimization, metadata API built-in
- Vercel deployment is zero-config

### Why Tailwind CSS 4?
- CSS-native `@theme inline` directive eliminates `tailwind.config.js`
- CSS custom properties for theming (dark/light mode via `.dark` class)
- Utility classes keep styles co-located with markup
- No CSS-in-JS runtime overhead

### Why Framer Motion?
- Declarative animation API (`variants`, `whileInView`, `whileHover`)
- Spring physics for natural motion (`useSpring`)
- Scroll-linked animations (`useScroll`, `useTransform`)
- `AnimatePresence` for exit animations
- Layout animations for smooth transitions

### Why Web Audio API for Sounds?
- Zero dependency — no audio files to load
- Programmable frequency/duration for different interaction types
- Instant response with no network latency
- Small code footprint (~60 lines)

## External Services
- **Formspree**: Free-tier contact form backend (50 submissions/month)
- **Vercel**: Hosting and deployment platform

## File Paths
- Package config: `package.json`
- TypeScript config: `tsconfig.json`
- ESLint config: `eslint.config.mjs`
- Tailwind/CSS: `src/app/globals.css`
