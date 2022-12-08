import IUserInformation from "../interfaces/IUserInformation";

export default class CheckoutInformationPage {

    private get firstNameField() {
        return $("~test-First Name");
    }

    private get lastNameField() {
        return $("~test-Last Name");
    }

    private get zipField() {
        return $("~test-Zip/Postal Code");
    }

    private get continueBtn() {
        return $("//*[@text=\"CONTINUE\"]");
    }

    public get checkoutInformationTitle() {
        return $("//*[@text=\"CHECKOUT: INFORMATION\"]");
    }

    public async fillUserInformation({ firstName, lastName, zipCode }: IUserInformation) {
        await (await this.firstNameField).setValue(firstName);
        await (await this.lastNameField).setValue(lastName);
        await (await this.zipField).setValue(zipCode);
    }

    public async clickOnContinueBtn() {
        await (await this.continueBtn).click();
    }
}