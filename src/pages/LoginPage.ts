import ICredentials from "../interfaces/ICredentials";

class Login {

    private get inputEmail() {
        return $("~test-Username");
    }

    private get inputPassword() {
        return $("~test-Password");
    }

    private get logInButton() {
        return $("//android.view.ViewGroup[@content-desc=\"test-LOGIN\"]/android.widget.TextView");
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

    public async logInWithCredentials(credentials: ICredentials): Promise<void> {
        const {userName, password} = credentials;
        await this.enterEmail(userName);
        await this.enterPassword(password);
        await this.clickOnLogInButton();
    }
}

export const LoginPage = new Login();