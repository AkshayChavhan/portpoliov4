# Button Component

## What
A versatile button component with three visual variants, animated hover/tap states, gradient backgrounds, glow shadows, and beep sound feedback.

## Variants

### Primary
- Gradient background: `linear-gradient(135deg, var(--accent), var(--accent-hover))`
- Glow shadow: `0 4px 14px rgba(99, 102, 241, 0.25)` — intensifies on hover
- White text, rounded corners (`rounded-lg`), `px-8 py-3`

### Secondary
- Transparent background with 1px border
- On hover: border transitions to accent color, text shifts to accent
- Used for secondary CTAs like "View My Work"

### Ghost
- No background, no border — just text
- On hover: subtle background fill (`var(--bg-secondary)`)
- Used for tertiary actions

## Animations
- **Hover**: `scale: 1.02` via Framer Motion spring
- **Tap/Active**: `scale: 0.98` for tactile press feedback
- **Focus**: `ring-2 ring-offset-2` focus ring for accessibility
- **Sound**: `playClickBeep()` on every click (800Hz, 50ms)

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Visual style |
| `children` | `ReactNode` | — | Button content |
| `onClick` | `(e) => void` | — | Click handler |
| `disabled` | `boolean` | `false` | Disabled state |
| `type` | `'button' \| 'submit'` | `'button'` | HTML button type |
| `href` | `string` | — | Renders as `<a>` instead of `<button>` |

## Dark Mode
- Primary gradient uses CSS variable `--accent` which shifts from indigo-500 to indigo-400
- Secondary border uses `--border` which adapts automatically
- Glow shadow opacity stays consistent

## File Path
`src/components/ui/Button.tsx`
