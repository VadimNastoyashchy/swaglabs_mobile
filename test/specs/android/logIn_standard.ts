import Credentials from "../../../src/Credentials";
import {AccountType} from "../../../src/AccountType";
import {LoginPage} from "../../../src/pages/LoginPage";

describe("Log in tests", () => {

    it("Log in as \"standard_user\"", async () => {
        await LoginPage.logInWithCredentials(Credentials.getUserCredentials(AccountType.Standard));
        const headerText = await $("//*[@text=\"PRODUCTS\"]");
        await expect(await headerText.getText()).toEqual("PRODUCTS");
    });
});