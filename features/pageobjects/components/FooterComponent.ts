class FooterComponent {

    private readonly footerContainerLocator = "//android.widget.ScrollView[@content-desc=\"test-PRODUCTS\"]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup";

    private get twitterLink() {
        return $(`${this.footerContainerLocator}/android.widget.TextView[1]`);
    }

    private get facebookLink() {
        return $(`${this.footerContainerLocator}/android.widget.TextView[2]`);
    }

    private get googlePlusLink() {
        return $(`${this.footerContainerLocator}/android.widget.TextView[3]`);
    }

    private get linkedinLink() {
        return $(`${this.footerContainerLocator}/android.widget.TextView[4]`);
    }

    public get container() {
        return $(this.footerContainerLocator);
    }

    public get corpInfoTitle() {
        return $("//*[@text=\"© 2022 Sauce Labs. All Rights Reserved.\"]");
    }

    public get corpInfoSubTitle() {
        return $("//*[@text=\"Terms of Service | Privacy Policy\"]");
    }

    public async checkFooterLinkIsDisplayed() {
        await expect(await this.twitterLink).toBeDisplayed();
        await expect(await this.facebookLink).toBeDisplayed();
        await expect(await this.googlePlusLink).toBeDisplayed();
        await expect(await this.linkedinLink).toBeDisplayed();
    }
}

export default new FooterComponent();