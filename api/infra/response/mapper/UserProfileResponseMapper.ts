import {User} from "../../../domain/model/User";
import {UserResponse} from "../UserResponse";
import {UserProfileResponse} from "../UserProfileResponse";

export class UserProfileResponseMapper {

    mapUserToProfileResponse(user: User): UserProfileResponse {
        return new UserProfileResponse(user.id, user.address, user.birthdate.toDateString())
    }


}