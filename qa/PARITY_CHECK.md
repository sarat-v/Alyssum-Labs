# Pixel parity check — alyssumlabs.com

One-time visual QA across **Chrome** and **Safari** at fixed viewports.

## 1. Capture baselines (automated)

From the `site/` folder:

```bash
npm install -D playwright
npx playwright install chromium webkit
node scripts/capture-parity-baselines.mjs
```

This writes PNGs to `qa/baselines/`:

| Folder | Browser engine | Viewport |
|--------|----------------|----------|
| `chrome-desktop/` | Chromium | 1440 × 900 |
| `chrome-mobile/` | Chromium | 390 × 844 @3x |
| `safari-desktop/` | WebKit (Safari engine) | 1440 × 900 |
| `safari-mobile/` | WebKit (Safari engine) | 390 × 844 @3x |

Each folder contains 5 shots:

1. `01-home-hero` — top of homepage
2. `02-home-sectors` — sector carousel section
3. `03-home-header-scrolled` — homepage with frosted header visible
4. `04-what-we-do` — What We Do page top
5. `05-contact` — Contact page top

## 2. Compare Chrome vs Safari

Open matching pairs side by side (Preview on Mac works well):

```
qa/baselines/chrome-desktop/01-home-hero.png
qa/baselines/safari-desktop/01-home-hero.png
```

Repeat for all 5 shots × 2 viewports (10 comparisons total).

### Pass criteria

- **Layout:** text blocks, cards, nav, and buttons align within ~2px
- **No dark bands:** no grey/black vertical stripes on hero or sector cards
- **Hero waves:** same general position (text left, waves right); minor tone difference OK
- **Sector carousel:** second card peek visible; no overlay band on card edge
- **Header:** active nav pill visible; blur acceptable if slightly softer in Safari

### Known acceptable deltas

- SVG wave saturation / blur intensity (Safari vs Chrome)
- `backdrop-blur` softness on header and cards
- Font weight (Instrument Serif slightly heavier in Safari)
- Scroll-reveal fade timing (not visible in static screenshots)

## 3. Compare to your real devices (optional)

Playwright WebKit ≈ Safari, but iPhone Safari can differ slightly on:

- URL bar resize (`min-h-screen` jump)
- Native momentum scroll feel (not visible in screenshots)

On iPhone: open `https://alyssumlabs.com` and compare mentally to `safari-mobile/*.png`.

On Mac Safari: compare to `safari-desktop/*.png`.

## 4. Re-run after design changes

```bash
npm run parity:capture
npm run parity:compare
```

Diff old vs new folders, or inspect `qa/diffs/` (red = pixels that differ).

## 5. Latest run (2026-06-16)

Chrome (Chromium) vs Safari (WebKit) on production `https://alyssumlabs.com`:

| Viewport | Section | Diff | Status |
|----------|---------|------|--------|
| Desktop | Home hero | 0.99% | Pass |
| Desktop | Home sectors | 2.35% | Minor |
| Desktop | Home header scrolled | 0.99% | Pass |
| Desktop | What We Do | 0.36% | Pass |
| Desktop | Contact | 0.73% | Pass |
| Mobile | Home hero | 2.24% | Minor |
| Mobile | Home sectors | 1.38% | Minor |
| Mobile | Home header scrolled | 2.30% | Minor |
| Mobile | What We Do | 0.98% | Pass |
| Mobile | Contact | 4.03% | Minor |

**Interpretation:** All shots are under 5% pixel difference. Minor deltas are concentrated in hero wave SVG rendering and backdrop blur — not layout shifts. No shots flagged for review.

Full JSON: `qa/PARITY_REPORT.json`
