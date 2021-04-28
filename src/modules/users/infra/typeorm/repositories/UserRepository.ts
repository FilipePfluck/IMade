import ICreateUserDto from "@modules/users/dtos/ICreateUserDto";
import IUserRepository from "@modules/users/repositories/IUserRepository";
import { getRepository, Repository } from "typeorm";
import User from "../entities/user";

class UsersRepository implements IUserRepository {
    private ormRepository: Repository<User>

    constructor(){
        this.ormRepository = getRepository(User)
    }

    public async create(data: ICreateUserDto){
        const user = this.ormRepository.create(data)

        await this.ormRepository.save(user)

        return user
    }
}

export default UsersRepository