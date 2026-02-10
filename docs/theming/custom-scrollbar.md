# Custom Scrollbar

## What
Thin, accent-colored scrollbar that replaces browser defaults for a polished look.

## How It Works

### WebKit (Chrome, Safari, Edge)
```css
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--accent);
}
```

### Firefox
```css
html {
  scrollbar-width: thin;
  scrollbar-color: var(--border) transparent;
}
```

## Dark Mode
- Track: Transparent in both modes
- Thumb: Uses `var(--border)` — `#e2e8f0` (light) / `#334155` (dark)
- Hover: Uses `var(--accent)` — `#6366f1` (light) / `#818cf8` (dark)

## Key Decision
- 6px width: Visible but not intrusive
- Rounded ends: Matches the rounded design language
- Transparent track: Clean, minimal look
- Hover accent: Consistent with the accent color system

## File Path
`src/app/globals.css`
