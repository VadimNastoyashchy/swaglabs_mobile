import LoginPage from "../../../src/pages/LoginPage";
import Credentials from "../../../src/Credentials";
import { AccountType } from "../../../src/AccountType";
import InventoryPage from "../../../src/pages/InventoryPage";

describe("Log in tests", () => {

    it("Log in as \"problem_user\"", async () => {
        const loginPage = new LoginPage();
        const inventoryPage = new InventoryPage();

        await loginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.Problem));
        await expect(await inventoryPage.productsTitle.getText()).toEqual("PRODUCTS");
    });
});