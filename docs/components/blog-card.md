# Blog Card

## What
Blog post preview card with gradient image area, category badge, title, excerpt, date, read time, and hover effects.

## How It Works
- **Image area**: `aspect-[16/9]` with gradient background (`accent-light` to `bg-secondary`)
- **Category badge**: Pill positioned at top-left with accent background and white text
- **Content**: Title (2-line clamp), excerpt (2-line clamp), meta info
- **Meta row**: Calendar icon + date, Clock icon + read time, "Read" arrow link
- **Date formatting**: `toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })`
- **Hover**: Card lifts, title shifts to accent color, "Read" arrow gap widens

## Props
| Prop | Type | Description |
|------|------|-------------|
| `post` | `BlogPost` | Blog post data object |

## Dark Mode
- Gradient colors adapt via CSS variables
- All text colors use theme variables

## File Path
`src/components/ui/BlogCard.tsx`
