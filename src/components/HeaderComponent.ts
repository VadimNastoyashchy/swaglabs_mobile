
export default class HeaderComponent {

    public get productsTitle() {
        return $("//*[@text=\"PRODUCTS\"]");
    }

}