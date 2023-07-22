import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

test("Authentication Flow", async ({ page }) => {
  // User details
  const email = "demonslayer@gmail.com";
  const user = {
    name: faker.internet.displayName(),
    email: faker.internet.email(),
    password: "demonslayer",
  };

  // Navigate to home page and check title
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveTitle(/BTC Predictor/);

  // Navigate to sign up page
  await page.getByRole("link", { name: "Play Now" }).click();
  await page.waitForTimeout(1500);
  await page.getByRole("link", { name: "Sign up" }).click();

  // Sign up
  await page.getByLabel("name").fill(user.name);
  await page.getByLabel("email").fill(user.email);
  await page.getByLabel("password").fill(user.password);
  await page.getByRole("button", { name: "Sign Up" }).click();

  // Expect sign up success message
  await page.waitForSelector(
    'text="Sign Up Successful! Welcome to our platform."'
  );
  await page.waitForTimeout(1500);

  // Sign out
  await page.getByRole("button", { name: "sign out" }).click();

  // Expect sign out success message
  await page.waitForSelector('text="Sign out successful. Goodbye!"');
  await page.waitForTimeout(1500);

  // Navigate to sign in page
  await page.getByRole("link", { name: "Play Now" }).click();

  // Sign in
  await page.getByLabel("email").fill(email);
  await page.getByLabel("password").fill(user.password);
  await page.getByRole("button", { name: "Sign In" }).click();

  // Expect sign in success message
  await page.waitForSelector('text="Sign In Successful! Welcome back."');
  await page.waitForTimeout(1500);
});
