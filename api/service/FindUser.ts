import {User} from "../domain/model/User";
import {UserRepository} from "../domain/repository/UserRepository";

export class FindUser {

    private userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
    }

    execute(username: string): User {
        return this.userRepository.getUserByName(username)
    }

}