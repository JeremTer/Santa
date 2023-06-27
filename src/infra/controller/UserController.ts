import {UserResponse} from "../response/UserResponse";
import {ReminderRequest} from "../request/ReminderRequest";
import {UserProfileResponse} from "../response/UserProfileResponse";
import {FindUser} from "../../usecase/FindUser";
import {GetUserInformations} from "../../usecase/GetUserInformations";
import {UserResponseMapper} from "../response/mapper/UserResponseMapper";
import {UserProfileResponseMapper} from "../response/mapper/UserProfileResponseMapper";
import {UserRepositoryImpl} from "../repository/UserRepositoryImpl";
import {UserModelMapper} from "../repository/model/mapper/UserModelMapper";
import {RequestHandler} from "express";
import {RemindUser} from "../../usecase/RemindUser";
import {MailService} from "../service/MailService";

//todo dependency injection
const userModelMapper = new UserModelMapper()
const userRepository = new UserRepositoryImpl(userModelMapper)
const findUser = new FindUser(userRepository)
const getUserInformations = new GetUserInformations(userRepository)
const mailService = new MailService();
const remindUser = new RemindUser(mailService);
const userResponseMapper = new UserResponseMapper()
const userProfileResponseMapper = new UserProfileResponseMapper()

export const getUserByName: RequestHandler = ((req, res) => {
    const username = req.params.username;
    try {
        const user = findUser.execute(username);
        if (!user) {
            return res.status(404).send('User not found')
        }
        const userResponse: UserResponse = userResponseMapper.mapUserToResponse(user)

        res.json(userResponse)
    } catch (e: any) {
        return res.status(404).send(e.message)
    }

})

export const getUserProfile: RequestHandler = ((req, res) => {
    const userId: string = req.params.userId

    try {
        const user = getUserInformations.execute(userId);

        if (!user) {
            return res.status(404).send('User not found')
        }

        const userProfileResponse: UserProfileResponse = userProfileResponseMapper.mapUserToProfileResponse(user)

        res.json(userProfileResponse)
    } catch (e: any) {
        return res.status(404).send(e.message)
    }

})


export const sendReminder: RequestHandler = (async (req, res) => {

    try {
        //const request = (req.body as { userRequest: ReminderRequest });
        await remindUser.execute(req.body.username,
            req.body.address,
            req.body.gifts);

        res.json({message: 'Reminder sent !'});
    } catch (e: any) {
        return res.status(500).send(e.message)
    }

})


