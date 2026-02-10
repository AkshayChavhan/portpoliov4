# Color System

## What
A comprehensive design token system using CSS custom properties for seamless light/dark mode switching.

## Color Tokens

### Light Mode
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#ffffff` | Main page background |
| `--bg-secondary` | `#f8fafc` | Alternating section backgrounds |
| `--bg-tertiary` | `#f1f5f9` | Nested elements |
| `--text-primary` | `#0f172a` | Headings |
| `--text-secondary` | `#1e293b` | Sub-headings |
| `--text-body` | `#475569` | Body text |
| `--text-muted` | `#94a3b8` | Labels, captions |
| `--accent` | `#6366f1` | CTAs, highlights (indigo-500) |
| `--accent-hover` | `#4f46e5` | Hover states |
| `--accent-light` | `#eef2ff` | Badge backgrounds |
| `--border` | `#e2e8f0` | Card borders, dividers |
| `--card-bg` | `#ffffff` | Card backgrounds |
| `--nav-bg` | `rgba(255,255,255,0.8)` | Navbar backdrop |

### Dark Mode
| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | `#0f172a` | Main page background |
| `--bg-secondary` | `#1e293b` | Alternating section backgrounds |
| `--bg-tertiary` | `#334155` | Nested elements |
| `--text-primary` | `#f1f5f9` | Headings |
| `--text-secondary` | `#e2e8f0` | Sub-headings |
| `--text-body` | `#cbd5e1` | Body text |
| `--text-muted` | `#64748b` | Labels, captions |
| `--accent` | `#818cf8` | CTAs (indigo-400) |
| `--accent-hover` | `#6366f1` | Hover states |
| `--accent-light` | `#1e1b4b` | Badge backgrounds (indigo-950) |
| `--border` | `#334155` | Card borders |
| `--card-bg` | `#1e293b` | Card backgrounds |
| `--nav-bg` | `rgba(15,23,42,0.8)` | Navbar backdrop |

## Why Indigo?
- Professional and modern without being generic (unlike plain blue)
- Excellent contrast in both light and dark modes
- Works well as both accent color and gradient component
- Aligns with tech/developer aesthetic

## Implementation
All tokens defined in `globals.css` under `:root` and `.dark` selectors. Components reference tokens via inline styles: `style={{ color: 'var(--text-primary)' }}`.

## File Path
`src/app/globals.css`
