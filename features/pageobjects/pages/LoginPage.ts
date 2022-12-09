class LoginPage {

    private get inputEmail() {
        return $("~test-Username");
    }

    private get inputPassword() {
        return $("~test-Password");
    }

    public get logInButton() {
        return $("//*[@text=\"LOGIN\"]");
    }

    public get swaglabsImg() {
        return $("//android.widget.ScrollView[@content-desc='test-Login']/android.view.ViewGroup/android.widget.ImageView[1]");
    }

    private async enterEmail(userName: string) {
        await this.inputEmail.setValue(userName);
    }

    private async enterPassword(userPassword: string) {
        await this.inputPassword.setValue(userPassword);
    }

    private async clickOnLogInButton() {
        await (await this.logInButton).click();
    }

    public async logInWithCredentials(userName: string, password: string) {
        await this.enterEmail(userName);
        await this.enterPassword(password);
        await this.clickOnLogInButton();
    }
}

export default new LoginPage();