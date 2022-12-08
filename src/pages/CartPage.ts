
export default class CartPage {

    private get checkoutBtn() {
        return $("//*[@text=\"CHECKOUT\"]");
    }

    public get yourCartTitle() {
        return $("//*[@text=\"YOUR CART\"]");
    }

    public async clickOnCheckoutBtn() {
        await (await this.checkoutBtn).click();
    }
}