# Gradient Background

## What
Animated gradient mesh with floating blurred blobs in the hero section background that react to mouse movement.

## How It Works

### Blobs (3 layers)
| Blob | Color | Size | Position | Float Duration |
|------|-------|------|----------|---------------|
| 1 | Accent (indigo) | 40% | Top-left | 8s |
| 2 | Purple (#c084fc) | 35% | Center-right | 10s |
| 3 | Blue (#60a5fa) | 25% | Bottom-center | 12s |

### Visual Treatment
- `filter: blur(80px)` for soft edges
- Opacity: 0.12-0.20 (subtle, not overwhelming)
- `pointer-events: none` and `aria-hidden="true"`
- Container: `absolute inset-0 overflow-hidden`

### Mouse Parallax (Desktop)
- `useMotionValue` tracks mouse position relative to container center
- `useTransform` converts to parallax offset:
  - Blob 1: `x * 0.02`, `y * 0.02` (moves with mouse)
  - Blob 2: `x * -0.015`, `y * -0.015` (moves opposite)
- Creates depth illusion

### Auto-Float (Touch/All)
- Blobs animate on looping keyframes:
  ```tsx
  animate={{ x: [0, 30, -20, 0], y: [0, -20, 30, 0], scale: [1, 1.1, 0.95, 1] }}
  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
  ```

## Touch Device Handling
- Mouse parallax disabled on touch — uses auto-float only
- Detected via media query at render time

## Dark Mode
- Blob 1 uses `var(--accent)` which adapts
- Blobs 2 and 3 use fixed colors (purple, blue) that work in both modes

## File Path
`src/components/ui/GradientBackground.tsx`
