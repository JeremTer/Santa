export class User {
    private _id: string;
    private _name: string | undefined = "";

    get name(): string {
        return <string>this._name;
    }

    set name(value: string) {
        this._name = value;
    }


    constructor(id: string, name?: string, address?: string, birthdate?: Date) {
        this._id = id;
        this._name = name;
        this._address = address;
        this._birthdate = birthdate;
    }

    get id(): string {
        return this._id;
    }

    private _address: string | undefined = "";

    get address(): string {
        return <string>this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    private _birthdate: Date | undefined;

    get birthdate(): Date {
        return <Date>this._birthdate;
    }

    set birthdate(value: Date) {
        this._birthdate = value;
    }

    set id(value: string) {
        this._id = value;
    }
}
