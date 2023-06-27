export class UserProfileModel {
    constructor(userUid: string, address: string, birthdate: Date) {
        this._userUid = userUid;
        this._address = address;
        this._birthdate = birthdate;
    }

    private _userUid: string;

    get userUid(): string {
        return this._userUid;
    }

    set userUid(value: string) {
        this._userUid = value;
    }

    private _address: string;

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    private _birthdate: Date;

    get birthdate(): Date {
        return this._birthdate;
    }

    set birthdate(value: Date) {
        this._birthdate = value;
    }
}