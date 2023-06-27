export class ReminderRequest {
    readonly username: string;
    readonly address: string;
    readonly gifts: string;

    constructor(username: string, address: string, gifts: string) {
        this.username = username;
        this.address = address;
        this.gifts = gifts;
    }


}