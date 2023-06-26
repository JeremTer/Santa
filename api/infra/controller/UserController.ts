import {UserResponse} from "../response/UserResponse";
import {UserProfileResponse} from "../response/UserProfileResponse";
import {FindUser} from "../../service/FindUser";
import {GetUserInformations} from "../../service/GetUserInformations";
import {UserResponseMapper} from "../response/mapper/UserResponseMapper";
import {UserProfileResponseMapper} from "../response/mapper/UserProfileResponseMapper";

export class UserController {

    private findUser: FindUser
    private getUserInformations: GetUserInformations
    private userResponseMapper: UserResponseMapper
    private userProfileResponseMapper: UserProfileResponseMapper

    constructor(findUser: FindUser, getUserInformations: GetUserInformations, userResponseMapper: UserResponseMapper, userProfileResponseMapper: UserProfileResponseMapper) {
        this.findUser = findUser;
        this.getUserInformations = getUserInformations;
        this.userResponseMapper = userResponseMapper;
        this.userProfileResponseMapper = userProfileResponseMapper;
    }

    getUserByName = ((req, res) => {
        const username = req.params.username;
        const user = this.findUser.execute(username);

        if (!user) { //todo exception handling
            return res.status(404).send('User not found')
        }
        const userResponse: UserResponse = this.userResponseMapper.mapUserToResponse(user)

        res.json(userResponse)
    })

    getUserProfile = ((req, res) => {
        const userId: string = req.params.userId
        const user = this.getUserInformations.execute(userId);

        if (!user) {//todo exception handling
            return res.status(404).send('User not found')
        }

        const userProfileResponse: UserProfileResponse = this.userProfileResponseMapper.mapUserToProfileResponse(user)

        res.json(userProfileResponse)
    })


}