import HeaderComponent from "../components/HeaderComponent";
import FilterComponent from "../components/FilterComponent";

class InventoryPage {

    public header = HeaderComponent;
    public filter = FilterComponent;

    private get addToCartBtn() {
        return $$("//*[@text=\"ADD TO CART\"]");
    }

    private get productItemTitles() {
        return $$("//android.widget.TextView[@content-desc=\"test-Item title\"]");
    }

    private get filterBtn() {
        return $("//android.view.ViewGroup[@content-desc=\"test-Modal Selector Button\"]");
    }

    public get productsTitle() {
        return $("//*[@text=\"PRODUCTS\"]");
    }

    public async clickOnFirstAddToCardBtn() {
        await (await this.addToCartBtn[0]).click();
    }

    public async clickOnFilterBtn() {
        await (await this.filterBtn).click();
    }

    public async checkProductItemsIsSortedFromZtoA() {
        const firstProductTitle = await (await this.productItemTitles[0]).getText();
        const secondProductTitle = await (await this.productItemTitles[1]).getText();
        await expect(firstProductTitle.charCodeAt(0)).toBeGreaterThan(secondProductTitle.charCodeAt(0));
    }
}

export default new InventoryPage();