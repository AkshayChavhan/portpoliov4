# Input & Textarea Components

## What
Styled form input and textarea components with label, focus glow, error state, and `forwardRef` support.

## How It Works

### Default State
- Clean border (`var(--border)`), generous padding (`px-4 py-3`)
- Card background (`var(--card-bg)`), primary text color
- Full width, rounded corners (`rounded-lg`)

### Focus State
- Border transitions to accent color
- Accent glow shadow: `0 0 0 3px rgba(99, 102, 241, 0.1)`
- Applied via `onFocus`/`onBlur` JavaScript handlers (not Tailwind, for CSS variable support)

### Error State
- Red border (`#ef4444`)
- Red glow shadow: `0 0 0 3px rgba(239, 68, 68, 0.1)`
- Error message text below input in red
- Label color shifts to red

### Textarea Specific
- `resize-y` enabled, `min-h-[120px]` default height
- Same styling as Input

## Props
| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Input label text |
| `error` | `string` | Error message (shows red state) |
| All HTML input/textarea attributes | — | Passed through via spread |

## Dark Mode
- Background, border, and text colors all use CSS variables that adapt

## File Paths
- `src/components/ui/Input.tsx`
- `src/components/ui/Textarea.tsx`
