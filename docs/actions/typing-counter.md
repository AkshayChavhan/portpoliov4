# Animated Number Counter

## What
Metric values count up from 0 to their target value when scrolled into view, using smooth easing animation.

## How It Works

### Trigger
- `useInView(ref, { once: true })` from Framer Motion detects visibility
- Animation runs once when element enters viewport

### Animation
1. Extract numeric portion from value string (e.g., "500" from "500+")
2. Store suffix for re-attachment (e.g., "+", "s", "%")
3. `requestAnimationFrame` loop over 1.5 seconds
4. Progress: `elapsed / 1500` (0 to 1)
5. Cubic ease-out: `1 - (1 - progress)^3` for fast start, smooth end
6. Current value: `target * eased`
7. Direct DOM update: `ref.current.textContent = ...` (avoids React re-renders)

### Number Formatting
- Integer targets (500): `Math.floor(current)` + suffix
- Decimal targets (2.8): `current.toFixed(1)` + suffix
- Non-numeric values (e.g., "Real-time Sync"): displayed as-is without animation

## Key Decision
Direct DOM manipulation via `textContent` instead of `setState` to avoid 60+ React re-renders per second during animation. The `useRef` pattern keeps it performant.

## File Path
`src/components/ui/MetricCard.tsx` (AnimatedValue sub-component)
