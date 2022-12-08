import ICredentials from "../interfaces/ICredentials";

export default class LoginPage {

    private get inputEmail() {
        return $("~test-Username");
    }

    private get inputPassword() {
        return $("~test-Password");
    }

    private get logInButton() {
        return $("//*[@text=\"LOGIN\"]");
    }

    private async enterEmail(userName: string) {
        await this.inputEmail.setValue(userName);
    }

    private async enterPassword(userPassword: string) {
        await this.inputPassword.setValue(userPassword);
    }

    private async clickOnLogInButton() {
        await this.logInButton.click();
    }

    public async logInWithCredentials({ userName, password }: ICredentials) {
        await this.enterEmail(userName);
        await this.enterPassword(password);
        await this.clickOnLogInButton();
    }
}