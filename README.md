# Alyssum Labs Website

Next.js implementation of the Alyssum Labs marketing site.

**Plan docs (parent folder):**
- `../ALabs_Website_Content_Plan.md`
- `../ALabs_Website_Design_Plan.md`

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3001](http://localhost:3001).

## Live site

**Production:** https://alyssum-labs.vercel.app

## Imagery (`public/images/`)

| File | Used on |
|------|---------|
| `hero-core.png` | Home hero, About visual, pillar bento, OG image |
| `life-sciences.png` | Sector panel, LS capability cards, Why bands |
| `financial-markets.png` | Home sector panel — Financial Markets |
| `private-equity.png` | What We Do FM banner, capability cards, Why bands |
| `pipeline-sequence.png` | What We Do — Life Sciences pipeline |
| `portrait.png` | About — leadership (interim; replace with real photo) |
| `governance-texture.png` | Why Alyssum Labs band |

Legacy SVG placeholders remain in `public/images/placeholders/` if needed.

## Interim assets (replace when ready)

| Asset | Path |
|-------|------|
| Logo wordmark | `public/logo.svg` |

All copy lives in `src/lib/content.ts`.

## Status

- Phase 1 scaffold: all 6 pages, design tokens, hero motion, bento pillars, sector panels
- Contact form: client-side demo only (no email backend yet)
- Scroll sequence: placeholder block on What We Do (Life Sciences)
