export class UserResponse {
    readonly username: string;
    readonly uid: string;

    constructor(username: string, uid: string) {
        this.username = username;
        this.uid = uid;
    }
}