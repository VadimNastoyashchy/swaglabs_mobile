import { Given } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/pages/LoginPage";

Given(/^I am on the login page/, async () => {
    await expect(await LoginPage.swaglabsImg).toBeDisplayed();
    await expect(await LoginPage.logInButton).toBeDisplayed();
});