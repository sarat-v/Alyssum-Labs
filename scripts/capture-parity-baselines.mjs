/**
 * One-shot visual parity capture for alyssumlabs.com
 * Run from site/: node scripts/capture-parity-baselines.mjs
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, webkit } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, "..");
const OUT_DIR = path.join(SITE_ROOT, "qa", "baselines");
const BASE_URL = process.env.PARITY_BASE_URL ?? "https://alyssumlabs.com";

const VIEWPORTS = [
  {
    id: "desktop",
    context: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 },
  },
  {
    id: "mobile",
    context: {
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
    },
  },
];

const SHOTS = [
  { id: "01-home-hero", path: "/", prepare: async (page) => page.evaluate(() => window.scrollTo(0, 0)) },
  {
    id: "02-home-sectors",
    path: "/",
    prepare: async (page) => {
      const heading = page.getByRole("heading", { name: "Two sectors. One intelligence core." });
      await heading.scrollIntoViewIfNeeded();
      await page.waitForTimeout(400);
    },
  },
  {
    id: "03-home-header-scrolled",
    path: "/",
    prepare: async (page) => {
      await page.evaluate(() => window.scrollTo(0, 180));
      await page.waitForTimeout(300);
    },
  },
  { id: "04-what-we-do", path: "/what-we-do", prepare: async (page) => page.evaluate(() => window.scrollTo(0, 0)) },
  { id: "05-contact", path: "/contact", prepare: async (page) => page.evaluate(() => window.scrollTo(0, 0)) },
];

const BROWSERS = [
  { id: "chrome", launcher: chromium, channel: "chromium" },
  { id: "safari", launcher: webkit },
];

async function dismissCookies(page) {
  const reject = page.getByRole("button", { name: "Reject non-essential" });
  const accept = page.getByRole("button", { name: "Accept all" });

  if (await reject.isVisible({ timeout: 2500 }).catch(() => false)) {
    await reject.click();
    await page.waitForTimeout(300);
    return;
  }

  if (await accept.isVisible({ timeout: 1000 }).catch(() => false)) {
    await accept.click();
    await page.waitForTimeout(300);
  }
}

async function capture() {
  await mkdir(OUT_DIR, { recursive: true });
  const manifest = [];

  for (const browserDef of BROWSERS) {
    const browser = await browserDef.launcher.launch({ headless: true });

    for (const viewport of VIEWPORTS) {
      const dir = path.join(OUT_DIR, `${browserDef.id}-${viewport.id}`);
      await mkdir(dir, { recursive: true });

      const context = await browser.newContext(viewport.context);
      const page = await context.newPage();

      for (const shot of SHOTS) {
        const url = `${BASE_URL}${shot.path}?parity=${shot.id}`;
        await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
        await dismissCookies(page);
        await page.waitForTimeout(500);
        await shot.prepare(page);

        const filename = `${shot.id}.png`;
        const filepath = path.join(dir, filename);
        await page.screenshot({ path: filepath, fullPage: false });
        manifest.push({
          browser: browserDef.id,
          viewport: viewport.id,
          shot: shot.id,
          file: path.relative(SITE_ROOT, filepath),
          url: `${BASE_URL}${shot.path}`,
        });
      }

      await context.close();
    }

    await browser.close();
  }

  await writeFile(
    path.join(SITE_ROOT, "qa", "PARITY_MANIFEST.json"),
    `${JSON.stringify({ capturedAt: new Date().toISOString(), baseUrl: BASE_URL, items: manifest }, null, 2)}\n`,
  );
}

capture()
  .then(() => {
    console.log(`Saved baselines to ${OUT_DIR}`);
    console.log("Open qa/PARITY_CHECK.md for comparison steps.");
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
