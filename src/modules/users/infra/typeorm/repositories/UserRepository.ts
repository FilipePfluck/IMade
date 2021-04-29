import ICreateUserDto from "@modules/users/interfaces/ICreateUserDto";
import IUserRepository from "@modules/users/interfaces/IUserRepository";
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

    public async find(){
        const users = await this.ormRepository.find()

        return users
    }

    public async findById(id: string){
        const user = await this.ormRepository.findOne(id)

        return user
    }

    public async findByEmail(email: string){
        const user = await this.ormRepository.findOne({
            where: {
                email
            }
        })

        return user
    }

    public async save(data: User){
        const user = await this.ormRepository.save(data)

        return user
    }
}

export default UsersRepository