# Animation Variants

## What
Centralized Framer Motion animation variants used across the entire site for consistent, coordinated motion.

## Variants Defined in `lib/animations.ts`

### `fadeInUp`
- From: `opacity: 0, y: 30`
- To: `opacity: 1, y: 0`
- Duration: 0.6s, easing: `[0.25, 0.4, 0.25, 1]` (custom cubic-bezier)
- Usage: Most common — cards, headings, content blocks

### `fadeIn`
- From: `opacity: 0`
- To: `opacity: 1`
- Duration: 0.5s
- Usage: Subtle content reveals

### `slideInLeft` / `slideInRight`
- From: `opacity: 0, x: ±40`
- To: `opacity: 1, x: 0`
- Duration: 0.6s, same easing
- Usage: Featured Project section (image slides left, content slides right)

### `scaleIn`
- From: `opacity: 0, scale: 0.95`
- To: `opacity: 1, scale: 1`
- Duration: 0.5s
- Usage: Skills section cards

### `staggerContainer`
- `staggerChildren: 0.1` — each child animates 100ms after the previous
- `delayChildren: 0.1` — initial 100ms delay before first child
- Usage: Parent wrapper for any staggered group

### Hover/Tap Presets
- `hoverLift`: `y: -4` (card hover)
- `tapScale`: `scale: 0.97` (mobile tap)
- `buttonHover`: `scale: 1.02` (button hover)
- `buttonTap`: `scale: 0.98` (button press)

## Key Decisions
- Easing `[0.25, 0.4, 0.25, 1]` chosen for natural, non-bouncy motion
- `as const` on ease strings prevents TypeScript type widening
- All durations between 0.5-0.6s for cinematic but not sluggish feel

## File Path
`src/lib/animations.ts`
