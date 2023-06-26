import {User} from "../domain/entity/User";
import {UserRepository} from "../domain/repository/UserRepository";

export class GetUserInformations {

    private userRepository: UserRepository

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    execute(userId: string): User {
        const userInformation = this.userRepository.getUserInformation(userId);

        if (userInformation === undefined || userInformation === null) {
            throw new Error(`User with id ${userId} not found`)
        }

        return userInformation
    }

}