# Vercel Deployment

## What
Zero-config deployment to Vercel with automatic builds on push.

## Setup Steps

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com) → New Project
   - Import `AkshayChavhan/portpoliov4` from GitHub
   - Framework: Next.js (auto-detected)

2. **Build Settings**
   - Build command: `next build` (default)
   - Output directory: `.next` (default)
   - Install command: `npm install` (default)
   - Node.js version: 22.x

3. **Environment Variables**
   - `NEXT_PUBLIC_FORMSPREE_ID` — Formspree form endpoint (if moved from constants)
   - No other env vars needed for basic deployment

4. **Custom Domain** (optional)
   - Settings → Domains → Add your domain
   - Follow DNS configuration instructions

## Build Configuration
- Framework: Next.js 16 with Turbopack
- Output: Static pages (SSG) for `/` and `/_not-found`
- No server-side rendering needed — fully static site

## After Deployment
- Verify all sections render at production URL
- Test theme toggle persistence
- Test contact form (needs Formspree ID configured)
- Run Lighthouse audit targeting 90+ on all metrics

## File Path
- Next.js config: `next.config.ts`
- Package scripts: `package.json` (`build`, `start`)
