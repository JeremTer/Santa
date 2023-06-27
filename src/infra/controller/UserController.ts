import {UserResponse} from "../response/UserResponse";
import {UserProfileResponse} from "../response/UserProfileResponse";
import {FindUser} from "../../service/FindUser";
import {GetUserInformations} from "../../service/GetUserInformations";
import {UserResponseMapper} from "../response/mapper/UserResponseMapper";
import {UserProfileResponseMapper} from "../response/mapper/UserProfileResponseMapper";
import {UserRepositoryImpl} from "../repository/UserRepositoryImpl";
import {UserModelMapper} from "../repository/model/mapper/UserModelMapper";
import {RequestHandler} from "express";

//todo dependency injection
const userModelMapper = new UserModelMapper()
const userRepository = new UserRepositoryImpl(userModelMapper)
const findUser = new FindUser(userRepository)
const getUserInformations = new GetUserInformations(userRepository)
const userResponseMapper = new UserResponseMapper()
const userProfileResponseMapper = new UserProfileResponseMapper()

// constructor(findUser: FindUser, getUserInformations: GetUserInformations, userResponseMapper: UserResponseMapper, userProfileResponseMapper: UserProfileResponseMapper) {
//     this.findUser = findUser;
//     this.getUserInformations = getUserInformations;
//     this.userResponseMapper = userResponseMapper;
//     this.userProfileResponseMapper = userProfileResponseMapper;
// }

export const getUserByName: RequestHandler = ((req, res) => {
    const username = req.params.username;
    const user = findUser.execute(username);

    if (!user) { //todo exception handling
        return res.status(404).send('User not found')
    }
    const userResponse: UserResponse = userResponseMapper.mapUserToResponse(user)

    res.json(userResponse)
})

export const getUserProfile: RequestHandler = ((req, res) => {
    const userId: string = req.params.userId
    const user = getUserInformations.execute(userId);

    if (!user) {//todo exception handling
        return res.status(404).send('User not found')
    }

    const userProfileResponse: UserProfileResponse = userProfileResponseMapper.mapUserToProfileResponse(user)

    res.json(userProfileResponse)
})

// module.exports = {
//     getUserProfile,
//     getUserByName
// }

