import { test, expect } from "@playwright/test";

const WIDTHS = [
  { name: "desktop", width: 1440 },
  { name: "tablet", width: 768 },
  { name: "mobile", width: 390 },
  { name: "narrow", width: 320 },
];

test.describe("Portfolio page", () => {
  test.beforeEach(async ({ page }) => {
    const errors = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });
    page.on("pageerror", (err) => errors.push(err.message));
    await page.goto("/");
    page.attachErrors = errors;
  });

  for (const { name, width } of WIDTHS) {
    test(`has no horizontal overflow at ${name} (${width}px)`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }

  test("loads with no console or page errors", async ({ page }) => {
    expect(page.attachErrors).toEqual([]);
  });

  test("all sections exist and nav anchors scroll to them", async ({ page }) => {
    for (const id of ["about", "skills", "projects", "contact"]) {
      await page.locator(`nav a[href="#${id}"]`).click();
      await expect(page.locator(`#${id}`)).toBeInViewport();
      expect(await page.locator(`#${id}`).textContent()).not.toBe("");
    }
  });

  test("shows three project cards linking to the right repositories", async ({ page }) => {
    const links = await page
      .locator('a[href^="https://github.com/andresbetov"]')
      .evaluateAll((els) => els.map((el) => el.getAttribute("href")));
    expect(links).toHaveLength(3);
  });

  test("primary button has a hover state", async ({ page }) => {
    const button = page.locator("button:has-text('View Projects'), a:has-text('View Projects')").first();
    await button.hover();
    await page.waitForTimeout(300);
    const before = await button.evaluate((el) => getComputedStyle(el).backgroundColor);
    await page.mouse.move(0, 0);
    await page.waitForTimeout(300);
    const after = await button.evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(before).not.toBe(after);
  });

  for (const { name, width } of [
    { name: "desktop", width: 1440 },
    { name: "mobile", width: 390 },
  ]) {
    test(`captures a full-page ${name} screenshot`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.screenshot({
        path: `/tmp/opencode/portfolio-${name}.png`,
        fullPage: true,
      });
    });
  }
});
