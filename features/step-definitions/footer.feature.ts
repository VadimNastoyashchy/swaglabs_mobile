import {Then, When} from "@wdio/cucumber-framework";
import Swipe from "../pageobjects/Swipe";
import InventoryPage from "../pageobjects/pages/InventoryPage";

When(/^I scroll to the app footer$/, async () => {
    await Swipe.down();
    await Swipe.down();
});

Then(/^App footer is displayed$/, async () => {
    await expect(await InventoryPage.footer.container).toBeDisplayed();
});

Then(/^I will see footer social media links$/, async () => {
    await InventoryPage.footer.checkFooterLinkIsDisplayed();
});

Then(/^I will see footer corporation information title (.*) and subtitle (.*)$/, async (title, subTitle) => {
    await expect(await (await InventoryPage.footer.corpInfoTitle).getText()).toEqual(title);
    await expect(await (await InventoryPage.footer.corpInfoSubTitle).getText()).toEqual(subTitle);
});