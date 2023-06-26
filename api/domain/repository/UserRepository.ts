import {User} from "../model/User";

export interface UserRepository {
    getUserByName(name: string): User;
    getUserInformation(id: string): User;
}