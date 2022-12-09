import { Then } from "@wdio/cucumber-framework";
import InventoryPage from "../pageobjects/pages/InventoryPage";

Then(/^I redirected to the inventory page with title (.*)$/, async (title) => {
    await expect(await InventoryPage.productsTitle.getText()).toEqual(title);
});