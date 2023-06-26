import {User} from "../../../domain/model/User";
import {UserResponse} from "../UserResponse";

export class UserResponseMapper {

    mapUserToResponse(user: User): UserResponse {
        return new UserResponse(user.name, user.id)
    }


}