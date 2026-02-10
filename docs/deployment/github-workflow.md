# GitHub Workflow

## What
Git workflow for version control and collaboration.

## Repository
- **URL**: `https://github.com/AkshayChavhan/portpoliov4.git`
- **Branch**: `main` (primary development branch)

## Commit Convention
Each feature committed separately with descriptive messages following the pattern:
```
feat: add [component/feature name]

Brief description of what was added and why.

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>
```

### Commit Types
- `feat:` — New feature or component
- `fix:` — Bug fix or type error resolution
- `docs:` — Documentation changes
- `chore:` — Maintenance tasks (config, deps)

## Commit History
The project was built incrementally with ~40 separate commits:
1. Project scaffold and dependencies
2. Design system (CSS variables, themes)
3. Types, constants, data, animations
4. UI components (one per commit)
5. Creative features (cursor, tilt, magnetic, etc.)
6. Layout (navbar, footer)
7. Page sections (8 sections)
8. Page assembly and 404
9. ESLint configuration
10. Documentation

## Commands
```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Run ESLint with auto-fix
```

## Push to Remote
```bash
git remote add origin https://github.com/AkshayChavhan/portpoliov4.git
git push -u origin main
```
