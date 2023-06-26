import {User} from "../../../domain/entity/User";
import {UserResponse} from "../UserResponse";

export class UserResponseMapper {

    mapUserToResponse(user: User): UserResponse {
        return new UserResponse(user.name, user.id)
    }


}