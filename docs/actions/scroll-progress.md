# Scroll Progress Indicator

## What
A thin accent-colored gradient bar fixed at the very top of the page that grows from 0% to 100% width based on scroll position.

## How It Works

```tsx
const { scrollYProgress } = useScroll();
const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
```

1. `useScroll()` returns `scrollYProgress` — a motion value from 0 to 1
2. `useTransform` maps it to `scaleX` from 0 to 1
3. Applied to a `motion.div` with `transform-origin: left` so it grows from left to right
4. Height: 3px
5. Background: `linear-gradient(to right, var(--accent), var(--accent-hover))`
6. Glow effect: `box-shadow: 0 0 10px rgba(99, 102, 241, 0.5)`
7. `z-50` to stay above all other content including navbar

## Key Decision
- Framer Motion's `useScroll` is performance-optimized (uses `requestAnimationFrame` internally)
- `scaleX` transform is GPU-accelerated (no layout recalculation)
- 3px height is visible without being intrusive

## Dark Mode
- Gradient uses CSS variables that adapt
- Glow shadow stays consistent (indigo-based)

## File Path
`src/components/ui/ScrollProgress.tsx`
