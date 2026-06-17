/**
 * Diff Chrome vs Safari baseline PNGs.
 * Run from site/: node scripts/compare-parity-baselines.mjs
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PNG } from "pngjs";
import pixelmatch from "pixelmatch";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, "..");
const BASELINES = path.join(SITE_ROOT, "qa", "baselines");
const DIFFS = path.join(SITE_ROOT, "qa", "diffs");

const SHOTS = [
  "01-home-hero",
  "02-home-sectors",
  "03-home-header-scrolled",
  "04-what-we-do",
  "05-contact",
];

const VIEWPORTS = ["desktop", "mobile"];

function loadPng(filepath) {
  return PNG.sync.read(readFile(filepath));
}

async function comparePair(viewport, shot) {
  const chromePath = path.join(BASELINES, `chrome-${viewport}`, `${shot}.png`);
  const safariPath = path.join(BASELINES, `safari-${viewport}`, `${shot}.png`);

  const [chromeBuf, safariBuf] = await Promise.all([readFile(chromePath), readFile(safariPath)]);
  const img1 = PNG.sync.read(chromeBuf);
  const img2 = PNG.sync.read(safariBuf);

  const width = Math.min(img1.width, img2.width);
  const height = Math.min(img1.height, img2.height);

  const a = new PNG({ width, height });
  const b = new PNG({ width, height });
  const diff = new PNG({ width, height });

  PNG.bitblt(img1, a, 0, 0, width, height, 0, 0);
  PNG.bitblt(img2, b, 0, 0, width, height, 0, 0);

  const mismatched = pixelmatch(a.data, b.data, diff.data, width, height, {
    threshold: 0.12,
    includeAA: true,
  });

  const total = width * height;
  const mismatchPct = ((mismatched / total) * 100).toFixed(2);

  const diffDir = path.join(DIFFS, viewport);
  await mkdir(diffDir, { recursive: true });
  const diffPath = path.join(diffDir, `${shot}.png`);
  await writeFile(diffPath, PNG.sync.write(diff));

  return {
    viewport,
    shot,
    width,
    height,
    mismatchedPixels: mismatched,
    mismatchPercent: Number(mismatchPct),
    diffFile: path.relative(SITE_ROOT, diffPath),
    status: Number(mismatchPct) < 1 ? "pass" : Number(mismatchPct) < 5 ? "minor" : "review",
  };
}

async function main() {
  const results = [];

  for (const viewport of VIEWPORTS) {
    for (const shot of SHOTS) {
      results.push(await comparePair(viewport, shot));
    }
  }

  const report = {
    comparedAt: new Date().toISOString(),
    threshold: "<1% pass, 1–5% minor, >5% review",
    results,
  };

  await writeFile(
    path.join(SITE_ROOT, "qa", "PARITY_REPORT.json"),
    `${JSON.stringify(report, null, 2)}\n`,
  );

  console.log("\nChrome vs Safari pixel diff (Playwright engines)\n");
  console.log("Viewport | Shot                      | Diff %  | Status");
  console.log("---------|---------------------------|---------|--------");
  for (const row of results) {
    console.log(
      `${row.viewport.padEnd(8)} | ${row.shot.padEnd(25)} | ${String(row.mismatchPercent).padStart(6)}% | ${row.status}`,
    );
  }
  console.log(`\nDiff images: qa/diffs/{desktop,mobile}/`);
  console.log("Full report: qa/PARITY_REPORT.json\n");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
