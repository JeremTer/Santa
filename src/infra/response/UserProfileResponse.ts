export class UserProfileResponse {
    readonly userUid: string;
    readonly address: string;
    readonly birthdate: string;

    constructor(userUid: string, address: string, birthdate: string) {
        this.userUid = userUid;
        this.address = address;
        this.birthdate = birthdate;
    }
}