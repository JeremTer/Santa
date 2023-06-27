import {User} from "../domain/entity/User";
import {UserRepository} from "../domain/repository/UserRepository";

export class FindUser {

    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    execute(username: string): User {
        const userByName = this.userRepository.getUserByName(username);

        if (userByName === undefined || userByName === null) {
            throw new Error(`User with name ${username} not found`)
        }

        return userByName
    }

}