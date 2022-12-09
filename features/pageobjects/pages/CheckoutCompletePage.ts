class CheckoutCompletePage {

    public get checkoutCompleteTitle() {
        return $("//*[@text=\"CHECKOUT: COMPLETE!\"]");
    }
}

export default new CheckoutCompletePage();