# Tech Badge

## What
Small pill-shaped badge for displaying technology names with hover color fill effect.

## How It Works
- Default: Subtle border, transparent background, muted text
- Hover: Background fills with `var(--accent-light)`, text shifts to `var(--accent)`
- Transition: `duration-200` for smooth color change
- Font: `text-xs font-medium` with `px-3 py-1` padding

## Usage
```tsx
<TechBadge label="React 18" />
<TechBadge label="TypeScript" />
```

## Dark Mode
- Border uses `var(--border)` (slate-700 in dark)
- Hover background: `var(--accent-light)` shifts from `#eef2ff` to `#1e1b4b`
- Hover text: `var(--accent)` shifts from indigo-500 to indigo-400

## File Path
`src/components/ui/TechBadge.tsx`
