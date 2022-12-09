import HeaderComponent from "../components/HeaderComponent";

class InventoryPage {

    public header = HeaderComponent;

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

export default new InventoryPage();