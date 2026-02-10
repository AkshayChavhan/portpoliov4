# Metric Card

## What
Card displaying a metric value with animated counting effect that triggers when scrolled into view.

## How It Works

### Animated Counter
1. `useInView` detects when the card enters the viewport (once)
2. Extracts the numeric portion of the value string (e.g., "500" from "500+")
3. Uses `requestAnimationFrame` to animate from 0 to target over 1.5 seconds
4. Applies cubic ease-out curve: `1 - (1 - progress)^3`
5. Preserves decimal places for values like "2.8s"
6. Appends suffix (e.g., "+", "s", "%") after the number
7. Uses direct DOM manipulation (`textContent`) to avoid React re-renders during animation

### Card Layout
- Rounded card with border, centered text
- Value in accent color, bold `text-2xl`
- Label below in muted text, `text-xs`

## Dark Mode
- Card uses `var(--card-bg)` and `var(--border)`
- Value color uses `var(--accent)` which adapts automatically

## File Path
`src/components/ui/MetricCard.tsx`
