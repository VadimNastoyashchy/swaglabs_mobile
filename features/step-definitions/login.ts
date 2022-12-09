import {Given, Then, When} from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/pages/LoginPage";
import InventoryPage from "../pageobjects/pages/InventoryPage";

Given(/^I am on the login page/, async () => {
    await expect(await LoginPage.swaglabsImg).toBeDisplayed();
    await expect(await LoginPage.logInButton).toBeDisplayed();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.logInWithCredentials(username, password);
});

Then(/^I redirected to the inventory page with title (.*)$/, async (title) => {
    await expect(InventoryPage.productsTitle.getText()).toEqual(title);
});