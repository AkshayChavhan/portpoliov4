# Skeleton Component

## What
Shimmer loading placeholder using animated gradient for content loading states.

## How It Works
- Renders a rounded div with animated gradient background
- Gradient slides from left to right continuously
- Uses `@keyframes shimmer` defined in `globals.css`:
  ```css
  @keyframes shimmer {
    from { background-position: -200% 0; }
    to { background-position: 200% 0; }
  }
  ```
- Background: `linear-gradient(90deg, bg-secondary 25%, border 50%, bg-secondary 75%)`
- Animation duration: 1.5s, infinite loop

## Usage
```tsx
<Skeleton className="w-full h-48" />  // Image placeholder
<Skeleton className="w-32 h-4" />     // Text placeholder
```

## Dark Mode
- Gradient colors use CSS variables that darken in dark mode

## File Path
`src/components/ui/Skeleton.tsx`
