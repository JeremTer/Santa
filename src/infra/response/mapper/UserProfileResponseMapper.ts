import {User} from "../../../domain/entity/User";
import {UserProfileResponse} from "../UserProfileResponse";

export class UserProfileResponseMapper {

    mapUserToProfileResponse(user: User): UserProfileResponse {
        return new UserProfileResponse(user.id, user.address, user.birthdate.toLocaleString())
    }


}