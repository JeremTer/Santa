import {UserRepository} from "../../domain/repository/UserRepository";
import {User} from "../../domain/model/User";

export class UserRepositoryImpl implements UserRepository{
    getUserByName(name: string): User {
        return undefined;
    }

    getUserInformation(id: string): User {
        return undefined;
    }

}