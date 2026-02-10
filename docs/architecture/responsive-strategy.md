# Responsive Strategy

## What
Mobile-first responsive design ensuring the portfolio looks premium on all devices from 375px to 2560px+.

## Breakpoints

| Breakpoint | Tailwind Prefix | Min Width | Target Devices |
|-----------|----------------|-----------|---------------|
| Default | (none) | 0px | Mobile phones |
| `sm:` | Small | 640px | Large phones, small tablets |
| `md:` | Medium | 768px | Tablets |
| `lg:` | Large | 1024px | Laptops, desktops |
| `xl:` | Extra Large | 1280px | Large desktops |

## Per-Section Responsive Behavior

| Section | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Navbar | Hamburger menu | Hamburger | Full horizontal nav |
| Hero | 1 col, `text-4xl`, code editor below | 1 col, `text-5xl` | 2 cols, `text-6xl/7xl` |
| Featured Project | 1 col stacked | 2 cols | 2 cols, wider gaps |
| Projects Grid | 1 col | 2 cols | 2 cols |
| Skills | 1 col | 2 cols | 3 cols |
| Timeline | Stacked cards | Line left + cards right | Same with more width |
| Testimonials | 1 col | 2 cols | 3 cols |
| Blog | 1 col | 2 cols | 3 cols |
| Contact | 1 col (form then info) | 2 cols | 5-col grid (3:2 ratio) |
| Footer | Centered, stacked | Row | Row |

## Mobile-Specific Adjustments
- **Custom cursor**: Disabled on touch devices (detected via `(hover: hover)` media query)
- **Magnetic buttons**: Disabled on touch
- **3D tilt cards**: Falls back to simple `y: -4` lift on touch
- **Gradient background**: Simpler animation (no mouse tracking)
- **Section padding**: `py-12` on mobile vs `py-20`/`py-28` on desktop
- **Touch targets**: Minimum 44x44px for all interactive elements

## Implementation Pattern
```tsx
// Mobile-first with Tailwind
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* 1 col → 2 cols → 3 cols */}
</div>

// Touch device detection
const [isTouchDevice] = useState(() =>
  typeof window !== 'undefined'
    ? !window.matchMedia('(hover: hover)').matches
    : true
);
```

## File Paths
- Container component: `src/components/ui/Container.tsx` (max-w-6xl, responsive padding)
- Touch detection: Used in `CustomCursor.tsx`, `MagneticButton.tsx`, `TiltCard.tsx`, `GradientBackground.tsx`
