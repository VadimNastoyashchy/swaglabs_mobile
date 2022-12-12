import {Then, When} from "@wdio/cucumber-framework";
import InventoryPage from "../pageobjects/pages/InventoryPage";

When(/^I chose NAME\(Z-A\) in filter options$/, async () => {
    await InventoryPage.clickOnFilterBtn();
    await InventoryPage.filter.clickOnNameZtoA();
    await expect((await InventoryPage.productsTitle)).toBeDisplayed();
});

Then(/^products should be sorted From Z to A$/, async () => {
    await InventoryPage.checkProductItemsIsSortedFromZtoA();
});