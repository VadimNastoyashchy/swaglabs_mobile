describe("My Login Demo", () => {
    beforeEach(async () => {
        await $("~open menu").click();
        await $('//*[@text="Log In"]').click();
    });

    it("should not login with invalid credentials", async () => {

    });
});