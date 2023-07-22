import { test, expect } from "@playwright/test";

test("Game Flow", async ({ page }) => {
  // User details
  const email = "demonslayer@gmail.com";
  const password = "demonslayer";

  // Navigate to home page and check title
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveTitle(/BTC Predictor/);

  // Sign in
  await page.getByRole("link", { name: "Play Now" }).click();
  await page.waitForTimeout(1500);
  await page.getByLabel("email").fill(email);
  await page.getByLabel("password").fill(password);
  await page.getByRole("button", { name: "Sign In" }).click();

  // Expect sign in success message
  await page.waitForSelector('text="Sign In Successful! Welcome back."');
  await page.waitForTimeout(1500);

  // Play the game
  // Open info modal and read instructions
  await page.getByRole("button", { name: "Open game instructions" }).click();
  await page.waitForTimeout(1500);

  // Check the instructions in the modal
  const instructionText = await page
    .locator("h1#modal-modal-title")
    .textContent();
  expect(instructionText).toContain("How to Play BTC Predictor:");
  await page.waitForTimeout(1500);

  // Close the modal
  await page.getByRole("button", { name: "Close game instructions" }).click();
  await page.waitForTimeout(1500);

  // Make a guess (up)
  await page.getByRole("button", { name: "Guess Up" }).click();
  // Wait for some time (assuming 27 seconds is the time for a guess to be validated)
  await page.waitForTimeout(58000);

  // Check Bitcoin price
  const btcPriceElement = await page.waitForSelector("#bitcoin-price");
  const btcPrice = await btcPriceElement.textContent();

  // Make another guess (down)
  await page.getByRole("button", { name: "Guess Down" }).click();
  // Wait for some time (assuming 27 seconds is the time for a guess to be validated)
  await page.waitForTimeout(58000);

  // Check Bitcoin price again
  const newBtcPrice = await btcPriceElement.textContent();

  // Ensure the price changes as expected
  expect(newBtcPrice).not.toBe(btcPrice);
  await page.waitForTimeout(1500);

  // Log out
  await page.getByRole("button", { name: "sign out" }).click();

  // Expect sign out success message
  await page.waitForSelector('text="Sign out successful. Goodbye!"');
  await page.waitForTimeout(1500);
});
