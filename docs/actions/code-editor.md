# Code Editor

## What
An interactive code editor in the hero section with typewriter effect, syntax highlighting, line numbers, and blinking cursor.

## How It Works

### Typewriter Effect
1. `codeEditorContent` string from `lib/data.ts` contains the code to type
2. `useEffect` + `setInterval` at 35ms per character
3. `charIndex` state increments until full string is displayed
4. After completion, cursor blinks for 3s then restarts from beginning (loop)

### Syntax Highlighting
Custom `tokenize()` function splits each line into colored segments:
- **Keywords** (`const`, `export`, `default`): Purple text
- **Strings** (quoted text): Green text
- **Comments** (`//`): Gray text
- **Property names** (before `:`): Blue text
- **Brackets/punctuation**: Muted text
- **Boolean values** (`true`, `false`): Orange text

### Editor Chrome
- Dark rounded window (`rounded-xl`)
- Title bar with traffic light dots (red/yellow/green circles)
- Filename: `akshay.config.ts`
- Line numbers on the left in muted color
- Background: `var(--code-bg)` (dark regardless of theme)

### Blinking Cursor
- Green block cursor (`w-2 h-5 bg-green-400`) at current typing position
- CSS animation: `opacity` toggles between 0 and 1

## Content
```typescript
// akshay.config.ts
const developer = {
  name: "Akshay Chavhan",
  role: "Full-Stack Developer",
  location: "Pune, India",
  skills: ["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "AI/LLMs"],
  experience: "3+ years",
  available: true,
  passion: "Building apps that drive real results"
};
export default developer;
```

## Responsive
- Desktop: Shown in right column of hero grid
- Mobile: Shown below hero text content

## File Path
`src/components/ui/CodeEditor.tsx`
