import {join} from "path";

exports.config = {

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            transpileOnly: true,
            project: "test/tsconfig.json"
        }
    },
    //
    // ====================
    // Runner Configuration
    // ====================
    //
    port: 4723,
    specs: [],
    // Patterns to exclude.
    exclude: [],
    //
    // ============
    // Capabilities
    // ============
    //
    maxInstances: 2,
    capabilities: [
        {
            platformName: "Android",
            maxInstances: 1,
            specs: ["./test/specs/android/logIn_problem.ts"],
            "appium:avd": "Pixel_3_API_29",
            "appium:deviceName": "Pixel_3_10.0",
            "appium:platformVersion": "10.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:app": join(process.cwd(), "./app/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk"),
            "appium:appWaitActivity": "com.swaglabsmobileapp.MainActivity",
            "appium:newCommandTimeout": 240,
        },
        {
            platformName: "Android",
            maxInstances: 1,
            specs: ["./test/specs/android/logIn_standard.ts"],
            "appium:avd": "Pixel_XL_API_29",
            "appium:deviceName": "Pixel_XL_10.0",
            "appium:platformVersion": "10.0",
            "appium:orientation": "PORTRAIT",
            "appium:automationName": "UiAutomator2",
            "appium:app": join(process.cwd(), "./app/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk"),
            "appium:appWaitActivity": "com.swaglabsmobileapp.MainActivity",
            "appium:newCommandTimeout": 240,
        },
    ],
    //
    // ===================
    // Test Configurations
    // ===================
    logLevel: "info",
    bail: 0,
    baseUrl: "http://localhost",
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        [
            "appium",
            {
                args: {
                    address: "localhost",
                    port: 4723,
                },
                logPath: "./",
            },
        ],
    ],
    framework: "mocha",
    reporters: ["spec"],
    mochaOpts: {
        ui: "bdd",
        timeout: 60000,
    },
};