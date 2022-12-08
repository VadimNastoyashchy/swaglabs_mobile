import LoginPage from "../../../src/pages/LoginPage";
import InventoryPage from "../../../src/pages/InventoryPage";
import Credentials from "../../../src/Credentials";
import { AccountType } from "../../../src/AccountType";

describe("Log in tests", () => {

    it("Log in as \"standard_user\"", async () => {
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();
        await loginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.Standard));
        await expect(await inventoryPage.header.productsTitle.getText()).toEqual("PRODUCTS");
    });
});