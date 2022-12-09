export default class CheckoutCompletePage {

    public get checkoutCompleteTitle() {
        return $("//*[@text=\"CHECKOUT: COMPLETE!\"]");
    }
}