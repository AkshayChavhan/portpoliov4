# Typography

## What
Inter font family with a clear size scale optimized for readability on portfolio content.

## Font Setup
- **Font**: Inter (Google Fonts)
- **Loading**: `next/font/google` with `display: 'swap'` for no FOIT
- **Variable**: `--font-inter` CSS custom property
- **Subsets**: `latin`

## Size Scale

| Element | Class | Size | Weight |
|---------|-------|------|--------|
| Hero heading | `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl` | 36-72px | `font-bold` |
| Section heading | `text-3xl sm:text-4xl` | 30-36px | `font-bold` |
| Card title | `text-xl` or `text-2xl` | 20-24px | `font-bold` |
| Body text | `text-base` or `text-lg` | 16-18px | Normal |
| Captions/labels | `text-sm` or `text-xs` | 12-14px | `font-medium` |
| Badge text | `text-xs` | 12px | `font-medium` |

## Spacing
- Headings: `tracking-tight` (-0.025em) for tighter letter-spacing
- Body: `leading-relaxed` (1.625 line-height) for comfortable reading
- Labels: `tracking-wider` (+0.1em) for uppercase label text

## Colors by Role
- **Primary** (`--text-primary`): Headings — high contrast
- **Secondary** (`--text-secondary`): Sub-headings — slightly lighter
- **Body** (`--text-body`): Main content — comfortable reading contrast
- **Muted** (`--text-muted`): Labels, captions — de-emphasized

## File Path
- Font loading: `src/app/layout.tsx`
- Body style: `<body className="font-sans antialiased">`
