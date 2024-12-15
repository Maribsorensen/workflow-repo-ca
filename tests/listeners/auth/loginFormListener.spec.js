import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD);

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible();
  });

  test("user sees an error message when using invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login");

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL);
    await page.locator('input[name="password"]').fill("njdkjfdsnfkjn");

    await page.getByRole("button", { name: "Login" }).click();

    await expect(page.locator("#message-container")).toContainText(
      "Invalid email or password",
    );
  });
});
