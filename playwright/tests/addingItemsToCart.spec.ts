import { expect, test } from '@playwright/test';

test('test of navigation and adding items to cart', async ({ page }) => {
  await page.goto('http://localhost:3000');

  await expect(page).toHaveTitle('StarTravelHub');
  // Go to products page and check if 10 products are shown
  await page.locator(`[data-test-id="products-link"]`).click();
  await expect(page.locator('h1')).toHaveText('Our Spaceships');
  await expect(page.locator(`.product`)).toHaveCount(10);
  // Check on product and at to cart
  await page.locator(`role=heading[name="Rocinante"]`).click();
  await expect(page).toHaveTitle('Rocinante, from The Expanse');
  await page.locator(`[data-test-id="product-add-to-cart"]`).click();
  // Go back to products page, check another products and add it to the cart twice by changing the quantity
  await page.locator(`a:has-text('Our Spaceships')`).click();
  await page.locator(`role=heading[name="Serenity"]`).click();
  await expect(page).toHaveTitle('Serenity, from Firefly');
  await page.locator(`role=button[name="+"]`).dblclick();
  await page.locator(`[data-test-id="product-add-to-cart"]`).click();
  // Go to cart and check if there are two products inside
  await expect(page.locator(`[data-test-id="cart-count"]`)).toHaveText('4');
  await page.locator(`[data-test-id="cart-link"]`).click();
  await expect(page.locator(`.item`)).toHaveCount(2);
  // Change quantities of products
  await page
    .locator(`p:has-text("Quantity: -1+") >> role=button[name="-"]`)
    .click();
  await page.locator(`role=button[name="+"]`).dblclick();
  expect(page.locator(`[data-test-id="cart-total"]`)).toHaveText(
    '200.000.000,00 €',
  );
});
