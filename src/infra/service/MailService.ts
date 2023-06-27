import nodemailer from 'nodemailer';

export class MailService {
    private static instance: MailService;
    private transporter: nodemailer.Transporter;

    constructor() {
        //todo dotenv
        this.transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'tony.yost76@ethereal.email',
                pass: '6DcEgyqWECJNb3xDYp'
            }
        });
    }

    static getInstance() {
        if (!MailService.instance) {
            MailService.instance = new MailService();
        }
        return MailService.instance;
    }

    public async sendMail(
        content: string
    ) {
        return await this.transporter
            .sendMail({
                from: `do_not_reply@northpole.com`,
                to: 'santa@northpole.com',
                subject: 'Gifts',
                text: content
            });
    }


}