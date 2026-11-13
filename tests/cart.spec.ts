import { test, expect } from "@playwright/test";

test("Add Backpack to Cart", async ({ page }) => {

    await page.goto("https://www.saucedemo.com");

    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    await expect(page.locator(".title"))
        .toHaveText("Products");

    await page.locator("#add-to-cart-sauce-labs-backpack").click();

    await expect(page.locator(".shopping_cart_badge"))
        .toHaveText("1");

});