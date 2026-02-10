# Scroll Animations

## What
Elements animate into view as the user scrolls, using Framer Motion's `whileInView` trigger with staggered timing.

## How It Works

### Trigger Mechanism
```tsx
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-100px' }}
>
  <motion.div variants={fadeInUp}>Child 1</motion.div>
  <motion.div variants={fadeInUp}>Child 2</motion.div>
</motion.div>
```

- `whileInView="visible"` — triggers animation when element enters viewport
- `viewport.once: true` — only animates once (doesn't re-trigger on scroll back)
- `viewport.margin: '-100px'` — triggers 100px before element fully enters viewport
- `staggerContainer` — children animate 100ms apart

### Animation Flow
1. Parent container has `staggerContainer` variant (controls timing)
2. Children have `fadeInUp`, `scaleIn`, `slideInLeft`, etc. (controls motion)
3. When parent enters viewport → children animate in sequence

### Section Patterns
- **Projects Grid**: `staggerContainer` → `fadeInUp` per card
- **Skills**: `staggerContainer` → `scaleIn` per card
- **Experience**: `staggerContainer` → `fadeInUp` per timeline item
- **Featured Project**: `staggerContainer` → `slideInLeft` + `slideInRight`

## Key Decision
- `once: true` prevents distracting re-animations on scroll
- `-100px` margin creates a "pre-trigger" so animation is visible, not clipped
- 0.1s stagger is fast enough to feel coordinated, slow enough to be noticed

## File Paths
- Variants: `src/lib/animations.ts`
- Section implementations: `src/components/sections/*.tsx`
