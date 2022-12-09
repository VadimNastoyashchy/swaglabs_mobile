import { RectReturn } from "@wdio/protocols/build/types";

interface ICoordinates {
    x: number;
    y: number;
}

const SWIPE_COORDINATES = {
    downPoint: {
        from: { x: 50, y: 85 },
        to: { x: 50, y: 15 },
    },
    upPoint: {
        from: { x: 50, y: 15 },
        to: { x: 50, y: 85 },
    },
    rightPoint: {
        from: { x: 95, y: 50 },
        to: { x: 5, y: 50 },
    },
    leftPoint: {
        from: { x: 5, y: 50 },
        to: { x: 95, y: 50 },
    },
};

export default class Swipe {

    public static async up() {
        await this.swipeOn(SWIPE_COORDINATES.upPoint.from, SWIPE_COORDINATES.upPoint.to);
    }

    public static async down() {
        await this.swipeOn(SWIPE_COORDINATES.downPoint.from, SWIPE_COORDINATES.downPoint.to);
    }

    public static async right() {
        await this.swipeOn(SWIPE_COORDINATES.rightPoint.from, SWIPE_COORDINATES.rightPoint.to);
    }

    public static async left() {
        await this.swipeOn(SWIPE_COORDINATES.leftPoint.from, SWIPE_COORDINATES.leftPoint.to,);
    }

    private static async swipeOn(from: ICoordinates, to: ICoordinates) {
        const SCREEN_SIZE = await driver.getWindowRect();
        const moveFromScreenCoordinates = this.getDeviceScreenCoordinates(SCREEN_SIZE, from);
        const moveToScreenCoordinates = this.getDeviceScreenCoordinates(SCREEN_SIZE, to);

        await this.swipe(moveFromScreenCoordinates, moveToScreenCoordinates,);
    }

    private static getDeviceScreenCoordinates(screenSize: RectReturn, coordinates: ICoordinates): ICoordinates {
        return {
            x: Math.round(screenSize.width * (coordinates.x / 100)),
            y: Math.round(screenSize.height * (coordinates.y / 100)),
        };
    }

    private static async swipe(from: ICoordinates, to: ICoordinates) {
        await driver.performActions([
            {
                type: "pointer",
                id: "finger1",
                parameters: { pointerType: "touch" },
                actions: [
                    { type: "pointerMove", duration: 0, x: from.x, y: from.y },
                    { type: "pointerDown", button: 0 },
                    { type: "pause", duration: 100 },
                    { type: "pointerMove", duration: 1000, x: to.x, y: to.y },
                    { type: "pointerUp", button: 0 },
                ],
            },
        ]);
        await driver.pause(1000);
    }
}