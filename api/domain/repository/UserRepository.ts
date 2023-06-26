import {User} from "../entity/User";

export interface UserRepository {
    getUserByName(name: string): User | undefined;

    getUserInformation(id: string): User | undefined;
}