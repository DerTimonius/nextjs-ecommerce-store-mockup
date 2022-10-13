import { expect, test } from '@playwright/test';

test('test of navigation and adding items to cart', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle('StarTravelHub');
  // Go to products page and check if 10 products are shown
  await page.locator(`[data-test-id="products-link"]`).click();
  await expect(page.locator('h1')).toHaveText('Our Spaceships');
  await expect(page.locator(`[data-test-id^="product-"]`)).toHaveCount(10);
  // Check on product and at to cart
  await page.locator(`[data-test-id="product-2"]`).click();
  await expect(page).toHaveTitle('Rocinante, from The Expanse');
  await expect(page.locator(`[data-test-id="product-image"]`)).toBeVisible();
  await expect(page.locator(`[data-test-id="product-price"]`)).not.toBeEmpty();
  await expect(page.locator(`[data-test-id="product-quantity"]`)).toHaveText(
    'Quantity: 1',
  );
  await page.locator(`[data-test-id="product-add-to-cart"]`).click();
  // Go back to products page, check another products and add it to the cart twice by changing the quantity
  await page.locator(`[data-test-id="products-link"]`).click();
  await page.locator(`[data-test-id="product-5"]`).click();
  await expect(page).toHaveTitle('Serenity, from Firefly');
  await page.locator(`role=button[name="+"]`).dblclick();
  await page.locator(`[data-test-id="product-add-to-cart"]`).click();
  await expect(page.locator(`[data-test-id="cart-count"]`)).toHaveText('4');
  // Go to cart and check if there are two products inside
  await page.locator(`[data-test-id="cart-link"]`).click();
  await expect(page.locator(`[data-test-id="cart-product-2"]`)).toHaveCount(1);
  await expect(page.locator(`[data-test-id="cart-product-5"]`)).toHaveCount(1);
  await expect(
    page.locator(`[data-test-id^="cart-product-quantity-"]`),
  ).toHaveCount(2);
  // Change quantities of products
  await page
    .locator(`p:has-text("Quantity: -1+") >> role=button[name="-"]`)
    .click();
  await page.locator(`role=button[name="+"]`).dblclick();
  await expect(page.locator(`[data-test-id="cart-total"]`)).toHaveText(
    '200.000.000,00 €',
  );
  await expect(page.locator(`[data-test-id="cart-checkout"]`)).toBeVisible();
});
