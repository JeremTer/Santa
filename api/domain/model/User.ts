export class User {
    private _id: string;
    private _name: string;
    private _address?: string;
    private _birthdate?: Date;

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get address(): string {
        return this._address;
    }

    get birthdate(): Date {
        return this._birthdate;
    }
}
