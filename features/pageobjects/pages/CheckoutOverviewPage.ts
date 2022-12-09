class CheckoutOverviewPage {

    private get finishBtn() {
        return $("//*[@text=\"FINISH\"]");
    }

    public get checkoutOverviewTitle() {
        return $("//*[@text=\"CHECKOUT: OVERVIEW\"]");
    }

    public async clickOnFinishBtn() {
        await (await this.finishBtn).click();
    }
}

export default new CheckoutOverviewPage();