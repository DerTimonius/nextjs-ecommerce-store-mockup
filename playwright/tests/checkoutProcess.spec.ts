import { expect, test } from '@playwright/test';

test('checkout flow and thank you page', async ({ page }) => {
  await page.goto('http://localhost:3000/checkout');

  await expect(page).toHaveTitle('Checkout');

  await page.locator(`[data-test-id="checkout-first-name"]`).fill('Sherlock');
  await page.locator(`[data-test-id="checkout-last-name"]`).fill('Holmes');
  await page
    .locator(`[data-test-id="checkout-email"]`)
    .fill('someone@gmail.com');
  await page
    .locator(`[data-test-id="checkout-address"]`)
    .fill('221b Baker Street');
  await page.locator(`[data-test-id="checkout-city"]`).fill('London');
  await page.locator(`[data-test-id="checkout-postal-code"]`).fill('NW1 6XE');
  await page
    .locator(`[data-test-id="checkout-country"]`)
    .fill('United Kingdom');
  await page
    .locator(`[data-test-id="checkout-credit-card"]`)
    .fill('4242424242424242');
  await page.locator(`[data-test-id="checkout-confirm-order"]`).click();
  await expect(page).toHaveTitle('Checkout');
  await page.locator(`[data-test-id="checkout-expiration-date"]`).fill('11/24');
  await page.locator(`[data-test-id="checkout-security-code"]`).fill('123');
  await page.locator(`[data-test-id="checkout-confirm-order"]`).click();
  await expect(page).toHaveTitle('Thank you for your order');
});
