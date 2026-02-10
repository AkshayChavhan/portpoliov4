# Timeline Item

## What
Individual entry in the experience timeline with animated dot, connecting line, and content card.

## How It Works

### Timeline Dot
- Circular accent-colored dot (`w-6 h-6`) with border matching background color
- Outer glow: `box-shadow: 0 0 0 2px var(--accent)`
- **Spring animation**: Scales from 0 to 1 when scrolled into view (`type: 'spring'`)
- `z-10` to sit above the connecting line

### Connecting Line
- 2px vertical line from dot to next entry
- Hidden on last item (`isLast` prop)
- Uses `var(--border)` color

### Content Card
- Rounded card with role, period, company, description, and tech badges
- Role and period side-by-side on desktop, stacked on mobile
- Company in muted text below role

## Props
| Prop | Type | Description |
|------|------|-------------|
| `experience` | `Experience` | Experience data object |
| `isLast` | `boolean` | Whether this is the last timeline entry |

## Dark Mode
- Card uses `var(--card-bg)` and `var(--border)`
- Dot accent color adapts via `var(--accent)`

## File Path
`src/components/ui/TimelineItem.tsx`
