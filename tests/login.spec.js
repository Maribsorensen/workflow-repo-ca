import { test, expect } from "@playwright/test";

test.describe("login", () => {
  test("user can successfully log in with valid credentials", async ({
    page,
  }) => {
    await page.goto("/login"); // Navigates to login page

    await page.locator('input[name="email"]').fill(process.env.TEST_USER_EMAIL); // Finds and fills the email field in the login form with saved env email
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD); // Finds and fills the password field in the login form with saved env password

    await page.getByRole("button", { name: "Login" }).click(); // Clicks login button

    await expect(page.getByRole("button", { name: "Logout" })).toBeVisible(); // Finds the logout button to check that the login was successful
  });

  test("user sees an error message when using invalid credentials", async ({
    page,
  }) => {
    await page.goto("/login"); //Navigates to login page

    await page.locator('input[name="email"]').fill("wrongemail@gmail.com"); // Finds and fills the email field in the login form with a wrong email
    await page
      .locator('input[name="password"]')
      .fill(process.env.TEST_USER_PASSWORD); // Finds and fills the password field in the login form with saved env password

    await page.getByRole("button", { name: "Login" }).click(); // Clicks login button

    await expect(page.locator("#message-container")).toContainText(
      "Please enter a noroff.no or stud.noroff.no email address.",
    ); // Checks the page for a wrong email indicator
  });
});
