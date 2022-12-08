import { AccountType } from "../../../src/AccountType";
import Credentials from "../../../src/Credentials";
import CartPage from "../../../src/pages/CartPage";
import CheckoutCompletePage from "../../../src/pages/CheckoutCompletePage";
import CheckoutInformationPage from "../../../src/pages/CheckoutInformationPage";
import CheckoutOverviewPage from "../../../src/pages/CheckoutOverviewPage";
import InventoryPage from "../../../src/pages/InventoryPage";
import LoginPage from "../../../src/pages/LoginPage";
import Swipe from "../../../src/Swipe";

describe("Product order verification tests", () => {
    it("Product order (positive flow)", async () => {
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();
        const cartPage = new CartPage();
        const checkoutInformationPage = new CheckoutInformationPage();
        const checkoutOverviewPage = new CheckoutOverviewPage();
        const checkoutCompletePage = new CheckoutCompletePage();
        const user = {
            firstName: "Vadym",
            lastName: "Nastoiashchyi",
            zipCode: "21000"
        };

        await loginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.Standard));
        await expect((await inventoryPage.productsTitle)).toBeDisplayed();
        await inventoryPage.clickOnFirstAddToCardBtn();
        await expect(await (await inventoryPage.header.basketProductsCount).getText()).toEqual("1");
        await inventoryPage.header.clickOnBasket();
        await expect(await (await cartPage.yourCartTitle).getText()).toEqual("YOUR CART");
        await cartPage.clickOnCheckoutBtn();
        await expect(await (await checkoutInformationPage.checkoutInformationTitle).getText()).toEqual("CHECKOUT: INFORMATION");
        await checkoutInformationPage.fillUserInformation(user);
        await checkoutInformationPage.clickOnContinueBtn();
        await expect(await (await checkoutOverviewPage.checkoutOverviewTitle).getText()).toEqual("CHECKOUT: OVERVIEW");
        await Swipe.down();
        await checkoutOverviewPage.clickOnFinishBtn();
        await expect(await (await checkoutCompletePage.checkoutCompleteTitle).getText()).toEqual("CHECKOUT: COMPLETE!");
    });
});