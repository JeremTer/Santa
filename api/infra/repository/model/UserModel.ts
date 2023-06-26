export class UserModel {
    constructor(username: string, uid: string) {
        this._username = username;
        this._uid = uid;
    }

    private _username: string;

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    private _uid: string;

    get uid(): string {
        return this._uid;
    }

    set uid(value: string) {
        this._uid = value;
    }
}