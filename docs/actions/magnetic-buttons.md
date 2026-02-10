# Magnetic Buttons

## What
CTA buttons that subtly attract toward the cursor when nearby, creating a "magnetic" pull effect.

## How It Works

1. **Mouse tracking**: `onMouseMove` calculates cursor position relative to button center
2. **Direction**: Computes `deltaX` and `deltaY` from center
3. **Distance factor**: `Math.min(distance / 100, 1)` — effect scales with proximity
4. **Translation**: Max 8px movement toward cursor direction
5. **Spring physics**: `useSpring` with `damping: 15, stiffness: 150` for natural pull
6. **Reset**: `onMouseLeave` springs button back to `(0, 0)`

```tsx
const springX = useSpring(x, { damping: 15, stiffness: 150 });
const springY = useSpring(y, { damping: 15, stiffness: 150 });
```

## Touch Device Handling
- Detected via `window.matchMedia('(hover: hover)')`
- On touch devices: renders plain `<div>` wrapper with no magnetic effect
- Detection happens at component initialization (lazy `useState`)

## Usage
```tsx
<MagneticButton>
  <Button variant="primary">Let's Work Together</Button>
</MagneticButton>
```

## Used On
- Hero "Let's Work Together" CTA
- Contact "Send Message" button

## File Path
`src/components/ui/MagneticButton.tsx`
