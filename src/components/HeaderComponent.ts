
export default class HeaderComponent {

    private readonly basketLocator = "//android.view.ViewGroup[@content-desc='test-Cart']/android.view.ViewGroup/";

    private get basketImg() {
        return $(`${this.basketLocator}android.widget.ImageView`);
    }

    public get basketProductsCount() {
        return $(`${this.basketLocator}android.widget.TextView`);
    }

    public async clickOnBasket() {
        await (await this.basketImg).click();
    }
}