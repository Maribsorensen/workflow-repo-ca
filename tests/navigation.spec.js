import { test, expect } from "@playwright/test";

test.describe("navigation to venue", () => {
  test("Navigates to the home page", async ({ page }) => {
    await page.goto("/"); // Navigates to root index
  });

  test("Checks for venue to load", async ({ page }) => {
    await page.goto("/");
    await page.waitForSelector("#venue-container"); // Waits for venue containers
  });

  test("Clicks the first venue", async ({ page }) => {
    await page.goto("/");
    await page.click("#venue-container > a:first-child"); // Clicks venue container
  });

  test("Verifies that the venue details page contains updated heading venue details in the heading", async ({
    page,
  }) => {
    await page.goto("/");
    await page.click("#venue-container > a:first-child");
    const heading = page.locator("h1"); // Finds the h1 on the venue page
    await expect(heading).toHaveText(/Venue details: .+/i, { timeout: 5000 }); // Waits for venue details is loaded
  });
});
