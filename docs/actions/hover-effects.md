# Hover Effects

## What
Every interactive element has a polished hover state that provides visual feedback.

## Hover Patterns

### Nav Links
- Underline slides in from left using CSS pseudo-element
- `transform: scaleX(0)` → `scaleX(1)` on hover
- `transform-origin: left` for directional animation
- Defined in `globals.css` as `.nav-link::after`

### Cards (Project, Blog, Testimonial)
- Lift up: `y: -4` via Framer Motion `whileHover`
- Shadow deepens: `var(--shadow-sm)` → `var(--card-hover-shadow)`
- Border color may shift to accent

### Tech Badges
- Background fills: transparent → `var(--accent-light)`
- Text shifts: `var(--text-muted)` → `var(--accent)`
- Transition: `duration-200`

### Social Icons (Contact Section)
- Background fills with `var(--accent-light)`
- Icon color shifts to `var(--accent)`
- Border color shifts to `var(--accent)`
- Applied via `onMouseEnter`/`onMouseLeave` handlers

### Images/Previews
- Slight scale: `group-hover:scale-105`
- Container has `overflow-hidden` to prevent bleed

### Buttons
- Primary: Glow shadow intensifies
- Secondary: Border + text shift to accent
- Ghost: Background fades in

## Implementation
Hover states use a mix of:
1. **Framer Motion `whileHover`** — for physics-based animations (cards, buttons)
2. **Tailwind `group-hover:`** — for child elements responding to parent hover
3. **CSS `transition`** — for simple color/background changes
4. **JavaScript `onMouseEnter`/`onMouseLeave`** — when CSS variables need dynamic application

## File Paths
- Nav hover: `src/app/globals.css`
- Card hover: Individual card components in `src/components/ui/`
- Button hover: `src/components/ui/Button.tsx`
