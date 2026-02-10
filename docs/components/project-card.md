# Project Card

## What
Card component for displaying project information with image area, title, description, metrics, tech badges, and hover lift effect.

## How It Works
- **Image area**: `aspect-[16/10]` container with emoji placeholder and `group-hover:scale-105` zoom
- **Content area**: Padded section with title, description (3-line clamp), metric pills, tech badges
- **Hover**: Card lifts `y: -4` with deepened shadow (`var(--card-hover-shadow)`)
- **"Learn more" link**: Arrow slides right on hover (`group-hover:gap-4`)
- **Animation**: Uses `fadeInUp` variant from parent stagger container

## Props
| Prop | Type | Description |
|------|------|-------------|
| `project` | `Project` | Project data object from `lib/data.ts` |

## Dark Mode
- Card background: `var(--card-bg)` — white/slate-800
- Border and shadow adapt via CSS variables
- Title changes to accent color on hover

## File Path
`src/components/ui/ProjectCard.tsx`
