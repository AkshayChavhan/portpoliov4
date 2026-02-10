# Custom Cursor

## What
A custom animated cursor that replaces the default on desktop, featuring a dot, ring, glow trail, and pointer state changes on interactive elements.

## How It Works

### Cursor Elements (4 layers)
1. **Inner dot**: 6px accent-colored circle, grows to 8px on interactive hover
2. **Outer ring**: 32px border ring, grows to 48px on interactive hover, 40% opacity
3. **Trail dot 1**: 8px, 30% opacity, follows with `damping: 30, stiffness: 400`
4. **Trail dot 2**: 6px, 15% opacity, follows with `damping: 35, stiffness: 250`

### Tracking
- `useMotionValue` for raw cursor position (no re-renders)
- `useSpring` for smooth following with different spring configs per element
- `document.addEventListener('mousemove')` for global tracking

### Pointer State
- `mouseover` event checks if target matches `a, button, [role="button"], input, textarea, select`
- If interactive: dot grows, ring expands

### Visibility
- Hidden when mouse leaves document (`mouseleave`)
- Shown when mouse enters document (`mouseenter`)
- All elements use `pointer-events: none` to not interfere with clicks

## Touch Device Handling
- Detected at initialization: `!window.matchMedia('(hover: hover)').matches`
- Returns `null` (nothing rendered) on touch devices
- CSS `cursor: none` only applied on hover-capable devices

## File Path
`src/components/ui/CustomCursor.tsx`
