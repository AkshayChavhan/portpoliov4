# Navbar Component

## What
Fixed top navigation bar with scroll detection, smooth scroll links, dark/light theme toggle, mobile hamburger menu, and beep sound feedback.

## How It Works

### Scroll Detection
- `useState` + `useEffect` with `scroll` event listener (passive)
- When `scrollY > 50`: applies blurred white/dark background, border-bottom, and shadow
- When at top: fully transparent background

### Desktop Navigation
- Horizontal link row with hover underline animation (CSS pseudo-element `scaleX` transform)
- `ThemeToggle` component (Sun/Moon icon with rotation animation)
- "Let's Talk" CTA button (primary variant)

### Mobile Navigation
- Hamburger icon (`Menu`/`X` from Lucide) toggles slide-down panel
- `AnimatePresence` + `motion.div` for smooth height animation
- Full-width stacked links with hover background fill
- Full-width CTA button at bottom

### Smooth Scrolling
- `handleNavClick(href)` calls `document.querySelector(href).scrollIntoView({ behavior: 'smooth' })`
- Each section has `scroll-mt-20` class to offset for fixed navbar height

### Sound Feedback
- `playClickBeep()` on every nav link click and hamburger toggle

## Dark Mode
- Background transitions from `var(--nav-bg)` (white with opacity in light, slate-900 with opacity in dark)
- Border uses `var(--border)` which adapts automatically
- Text colors use `var(--text-body)` and `var(--accent)` for hover

## Responsive
- **Mobile** (< 768px): Hamburger menu with slide-down panel
- **Desktop** (>= 768px): Horizontal nav links

## File Path
`src/components/layout/Navbar.tsx`
