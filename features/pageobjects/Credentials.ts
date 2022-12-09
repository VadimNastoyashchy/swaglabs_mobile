import {AccountType} from "./AccountType";

export default class Credentials {
    private static readonly accountInfo = {
        standard: {
            userName: "standard_user",
            password: "secret_sauce"
        },
        locked: {
            userName: "locked_out_user",
            password: "secret_sauce"
        },
        problem: {
            userName: "problem_user",
            password: "secret_sauce"
        }
    };

    public static getUserCredentials(accountType: AccountType) {
        return this.accountInfo[accountType];
    }
}