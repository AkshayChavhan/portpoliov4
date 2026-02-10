# 3D Tilt Cards

## What
Project cards with a 3D perspective tilt effect on hover, tracking cursor position to rotate the card and show a glare overlay.

## How It Works

### Rotation Calculation
1. `onMouseMove` captures cursor position relative to card bounds
2. Normalizes to 0-1 range: `x = (clientX - rect.left) / rect.width`
3. `useTransform` maps to rotation: `rotateX: [-8, 8]`, `rotateY: [-8, 8]`
4. `useSpring` applies smooth damped motion: `damping: 20, stiffness: 300`

### 3D Setup
- Parent: `perspective: 1000px`
- Card: `transformStyle: 'preserve-3d'`
- `whileHover`: `scale: 1.02` for slight zoom

### Glare Overlay
- `radial-gradient` positioned at cursor location
- `rgba(255,255,255,0.15)` center fading to transparent
- Only visible on hover (`whileHover: { opacity: 1 }`)

### Reset
- `onMouseLeave`: mouseX/Y snap to 0.5 (center) → card springs flat

## Touch Device Handling
- Detected at initialization via `(hover: hover)` media query
- Falls back to simple `whileHover: { y: -4 }` lift on touch devices

## Usage
```tsx
<TiltCard>
  <ProjectCard project={project} />
</TiltCard>
```

## File Path
`src/components/ui/TiltCard.tsx`
