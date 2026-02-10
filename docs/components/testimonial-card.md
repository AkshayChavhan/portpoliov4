# Testimonial Card

## What
Client review card with decorative quote mark, italic text, author info with avatar initials, and star rating.

## How It Works
- **Quote mark**: Large serif `"` character at 20% opacity in accent color
- **Quote text**: Italic, `text-sm leading-relaxed`
- **Divider**: 48px horizontal line
- **Author**: Avatar circle (initials in accent-light bg) + name + role/company
- **Stars**: Row of filled `Star` icons from Lucide, accent colored
- **Hover**: Card lifts `y: -4` with deepened shadow

## Props
| Prop | Type | Description |
|------|------|-------------|
| `testimonial` | `Testimonial` | Testimonial data object |

## Dark Mode
- Card and avatar backgrounds adapt via CSS variables
- Star color uses `var(--accent)`

## File Path
`src/components/ui/TestimonialCard.tsx`
