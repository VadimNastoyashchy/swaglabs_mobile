import {Given, Then, When} from "@wdio/cucumber-framework";
import Credentials from "../pageobjects/Credentials";
import {AccountType} from "../pageobjects/AccountType";
import LoginPage from "../pageobjects/pages/LoginPage";
import InventoryPage from "../pageobjects/pages/InventoryPage";
import CartPage from "../pageobjects/pages/CartPage";
import CheckoutInformationPage from "../pageobjects/pages/CheckoutInformationPage";
import CheckoutOverviewPage from "../pageobjects/pages/CheckoutOverviewPage";
import Swipe from "../pageobjects/Swipe";
import CheckoutCompletePage from "../pageobjects/pages/CheckoutCompletePage";

Given(/^I am logged in the app/, async () => {
    const {userName, password} = Credentials.getUserCredentials(AccountType.Standard);
    await LoginPage.logInWithCredentials(userName, password);
    await expect((await InventoryPage.productsTitle)).toBeDisplayed();
});

When(/^I want to add one product into the basket/, async () => {
    await InventoryPage.clickOnFirstAddToCardBtn();
    await expect(await (await InventoryPage.header.basketProductsCount).getText()).toEqual("1");
});

When(/^I complete first order step/, async () => {
    await InventoryPage.header.clickOnBasket();
    await expect(await (await CartPage.yourCartTitle).getText()).toEqual("YOUR CART");
});

When(/^I fill (\w+) and (\w+) and (\w+) on the second order step/, async (firstName, lastName, zipCode) => {
    await CartPage.clickOnCheckoutBtn();
    await expect(await (await CheckoutInformationPage.checkoutInformationTitle).getText()).toEqual("CHECKOUT: INFORMATION");
    await CheckoutInformationPage.fillUserInformation(firstName, lastName, zipCode);
    await CheckoutInformationPage.clickOnContinueBtn();
    await expect(await (await CheckoutOverviewPage.checkoutOverviewTitle).getText()).toEqual("CHECKOUT: OVERVIEW");
    await Swipe.down();
});

Then(/^I click on the finnish button on the third order step/, async () => {
    await CheckoutOverviewPage.clickOnFinishBtn();
});

Then(/^I will see page title (.*)/, async (title) => {
    await expect(await (await CheckoutCompletePage.checkoutCompleteTitle).getText()).toEqual(title);
});