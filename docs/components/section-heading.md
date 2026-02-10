# Section Heading

## What
Reusable component that renders a consistent section label + heading + optional subtitle pattern across all page sections.

## How It Works
- **Label**: Uppercase, small text, accent color, extra letter-spacing (`tracking-wider`)
- **Title**: Large bold heading (`text-3xl sm:text-4xl`), primary text color
- **Subtitle** (optional): Body-colored text below heading

```tsx
<SectionHeading
  label="FEATURED PROJECT"
  title="Premium E-Commerce Platform"
  subtitle="A deep dive into my flagship project"
/>
```

## Props
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `label` | `string` | Yes | Uppercase category label |
| `title` | `string` | Yes | Main heading text |
| `subtitle` | `string` | No | Description below heading |

## Dark Mode
- Label uses `var(--accent)` — adapts to indigo-400 in dark mode
- Title uses `var(--text-primary)` — white in dark mode
- Subtitle uses `var(--text-body)` — lighter gray in dark mode

## File Path
`src/components/ui/SectionHeading.tsx`
