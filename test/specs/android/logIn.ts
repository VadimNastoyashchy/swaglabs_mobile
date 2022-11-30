import Credentials from "../../../src/Credentials";
import {AccountType} from "../../../src/AccountType";
import {LoginPage} from "../../../src/pages/LoginPage";

describe("Log in tests", () => {

    it("Log in as \"standard_user\"", async () => {
        await LoginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.Standard));
        const headerText = await $("//android.view.ViewGroup[@content-desc=\"test-Cart drop zone\"]/android.view.ViewGroup/android.widget.TextView");
        await expect( await headerText.getText()).toEqual("PRODUCTS");
    });
});