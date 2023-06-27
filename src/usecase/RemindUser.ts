import {UserRepository} from "../domain/repository/UserRepository";
import {MailService} from "../infra/service/MailService";

export class RemindUser {

    private mailService: MailService;

    constructor(mailService: MailService) {
        this.mailService = mailService;
    }

    async execute(username: string, address: string, gifts: string): Promise<void> {
        const mailService = MailService.getInstance();
        await mailService.sendMail(`${username}\n${address}\n${gifts}`);
    }

}