class FilterComponent {
    private get nameZtoA() {
        return $("//*[@text=\"Name (Z to A)\"]");
    }

    public async clickOnNameZtoA() {
        await (await this.nameZtoA).click();
    }
}

export default new FilterComponent();