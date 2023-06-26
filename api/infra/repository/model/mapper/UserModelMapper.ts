import {UserModel} from "../UserModel";
import {User} from "../../../../domain/entity/User";
import {UserProfileModel} from "../UserProfileModel";


export class UserModelMapper {

    mapUserModelToUser(userModel: UserModel): User {
        return new User(userModel.uid, userModel.username)
    }

    mapUserProfileModelToUser(userProfileModel: UserProfileModel): User {
        return new User(userProfileModel.userUid, "", userProfileModel.address, userProfileModel.birthdate)
    }


}