# Micro Interactions

## What
Small, subtle animations that add life and polish to the interface without being distracting.

## Interactions

### Pulse Dot
- Green dot (`bg-green-500`) in hero badge and footer
- `@keyframes pulse-dot` in `globals.css`: scales between 1 and 1.5 with opacity change
- 2-second infinite cycle
- Indicates "Available for Freelance" status

### Timeline Dot Animation
- Dots scale from 0 to 1 when scrolled into view
- Uses Framer Motion spring: `type: 'spring'` for natural bounce
- Each dot has outer glow ring: `box-shadow: 0 0 0 2px var(--accent)`

### Nav Active States
- Desktop links have underline that slides in from left on hover
- CSS `::after` pseudo-element with `scaleX` transform
- `transform-origin: left` for directional reveal

### Theme Toggle
- Sun/Moon icons cross-fade with rotation animation
- Framer Motion `AnimatePresence` + `motion.div`
- `rotate: 180` on icon swap for spinning effect

### Card Hover Sequence
- Shadow deepens → card lifts → border may shift
- All happening simultaneously over 200ms
- Creates a "picking up" sensation

### "Learn More" Arrow
- Default: arrow right of text with standard gap
- Hover: gap widens (`group-hover:gap-4`) pushing arrow further right
- Creates a "beckoning" motion

### Button Press
- Scale drops to 0.98 on press (via `whileTap`)
- Shadow reduces briefly
- Creates tactile "push" feeling

## CSS Keyframes (globals.css)
- `pulse-dot`: Scale 1→1.5→1 with opacity
- `shimmer`: Background position slides for skeleton loading
- `gradient-shift`: Background position shift for gradients
- `float`: Y position oscillation for floating elements

## File Paths
- Keyframes: `src/app/globals.css`
- Timeline dots: `src/components/ui/TimelineItem.tsx`
- Nav underline: `src/app/globals.css` (`.nav-link::after`)
- Theme toggle: `src/components/ui/ThemeToggle.tsx`
