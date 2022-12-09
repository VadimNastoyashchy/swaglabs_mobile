import { When } from "@wdio/cucumber-framework";
import LoginPage from "../pageobjects/pages/LoginPage";

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.logInWithCredentials(username, password);
});