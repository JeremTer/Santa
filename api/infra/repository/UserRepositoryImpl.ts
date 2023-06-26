import {UserRepository} from "../../domain/repository/UserRepository";
import {User} from "../../domain/entity/User";
import {UserModel} from "./model/UserModel";
import * as fs from 'fs';
import {UserModelMapper} from "./model/mapper/UserModelMapper";
import {UserProfileModel} from "./model/UserProfileModel";

export class UserRepositoryImpl implements UserRepository {

    private userMapper: UserModelMapper

    constructor(userMapper: UserModelMapper) {
        this.userMapper = userMapper;
    }

    getUserByName(name: string): User | undefined {
        let userModels: UserModel[] = []
        //todo file reader here
        const jsonUsers = fs.readFileSync('../../resources/users.json', 'utf-8');
        (<any>Object).assign(userModels, JSON.parse(jsonUsers))

        const userModel = userModels.filter(user => user.username === name).pop()
        if (!userModel) return undefined

        return this.userMapper.mapUserModelToUser(userModel);
    }

    getUserInformation(id: string): User | undefined {
        let userProfileModels: UserProfileModel[] = []
        //todo file reader here
        const jsonUsers = fs.readFileSync('../../resources/userProfiles.json', 'utf-8');
        (<any>Object).assign(userProfileModels, JSON.parse(jsonUsers))

        const userProfileModel = userProfileModels.filter(user => user.userUid === id).pop()
        if (!userProfileModel) return undefined

        return this.userMapper.mapUserProfileModelToUser(userProfileModel);
    }

}