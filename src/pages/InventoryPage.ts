import HeaderComponent from "../components/HeaderComponent";

export default class InventoryPage {

    public header = new HeaderComponent();

    private get addToCartBtn() {
        return $$("//*[@text=\"ADD TO CART\"]");
    }

    public get productsTitle() {
        return $("//*[@text=\"PRODUCTS\"]");
    }

    public async clickOnFirstAddToCardBtn() {
        await (await this.addToCartBtn[0]).click();
    }
}