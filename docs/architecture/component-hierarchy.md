# Component Hierarchy

## What
The component tree follows a top-down architecture with server components at the root and client components only where interactivity is needed.

## Component Tree

```
RootLayout (server)
├── ThemeProvider (client) — manages dark/light state
│   ├── CustomCursor (client) — global cursor overlay
│   ├── ScrollProgress (client) — top progress bar
│   ├── Navbar (client) — fixed navigation
│   ├── <main>
│   │   ├── HeroSection (client)
│   │   │   ├── GradientBackground (client) — animated blobs
│   │   │   ├── MagneticButton (client) — cursor attraction
│   │   │   │   └── Button (client)
│   │   │   └── CodeEditor (client) — typewriter effect
│   │   ├── FeaturedProject (client)
│   │   │   ├── MetricCard (client) — animated counters
│   │   │   └── TechBadge (client)
│   │   ├── ProjectsGrid (client)
│   │   │   └── TiltCard (client) → ProjectCard (client)
│   │   ├── SkillsSection (client)
│   │   │   └── TechBadge (client)
│   │   ├── ExperienceTimeline (client)
│   │   │   └── TimelineItem (client)
│   │   ├── Testimonials (client)
│   │   │   └── TestimonialCard (client)
│   │   ├── BlogSection (client)
│   │   │   └── BlogCard (client)
│   │   └── ContactSection (client)
│   │       ├── Input (client), Textarea (client)
│   │       └── MagneticButton → Button
│   └── Footer (server)
```

## Data Flow
- **Static data** flows from `lib/data.ts` → section components → card components via props
- **Theme state** flows from `ThemeProvider` context → any component via `useTheme()` hook
- **No global state management** needed — CSS variables handle theming, props handle data

## Server vs Client
- **Server components**: `layout.tsx`, `page.tsx`, `Footer.tsx`
- **Client components**: Everything with animations, state, or browser APIs (marked with `'use client'`)

## File Paths
- Theme context: `src/components/ui/ThemeProvider.tsx`
- Page assembly: `src/app/page.tsx`
