export class User {
    private _id: string;
    private _name: string;
    private _address?: string;
    private _birthdate?: Date;


    constructor(id: string, name?: string, address?: string, birthdate?: Date) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._birthdate = birthdate;
    }

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
