# Dark/Light Mode

## What
Full dark and light mode support with toggle button, localStorage persistence, system preference detection, and no flash of wrong theme on initial load.

## How It Works

### Theme Provider (`ThemeProvider.tsx`)
1. `useState` initialized with `getInitialTheme()` — reads localStorage, falls back to system preference
2. `useEffect` applies `.dark` class to `<html>` on mount
3. `toggleTheme()` updates state, localStorage, and DOM class simultaneously
4. `useSyncExternalStore` for SSR-safe mounted detection (avoids hydration mismatch)

### No-Flash Script (`layout.tsx`)
```html
<script dangerouslySetInnerHTML={{ __html: `
  (function() {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  })();
`}} />
```
Runs synchronously before React hydrates, preventing a flash of light mode.

### CSS Variable Approach
- All theme colors defined as CSS custom properties in `globals.css`
- Root `:root` has light mode values
- `.dark` class overrides with dark values
- Components use `style={{ color: 'var(--text-primary)' }}` instead of Tailwind's `dark:` variant
- This avoids className bloat and keeps theme logic centralized

### Toggle Button (`ThemeToggle.tsx`)
- Lucide `Sun` and `Moon` icons
- Animated swap: icon rotates 180° and scales on transition
- `playToggleBeep()` sound on toggle (1000Hz, 40ms)

## System Preference Detection
```typescript
window.matchMedia('(prefers-color-scheme: dark)').matches
```
Used on first visit when no localStorage value exists.

## File Paths
- Theme provider: `src/components/ui/ThemeProvider.tsx`
- Toggle button: `src/components/ui/ThemeToggle.tsx`
- CSS variables: `src/app/globals.css`
- No-flash script: `src/app/layout.tsx`
