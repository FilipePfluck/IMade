import { inject, injectable } from 'tsyringe';
import ICreateUserDto from '../interfaces/ICreateUserDto'

import IUserRepository from '../interfaces/IUserRepository';

@injectable()
export default class ListUsers {
    constructor (
        @inject('UsersRepository')
        private usersRepository: IUserRepository
    ){}

    public async execute(){
        const users = await this.usersRepository.find()

        console.log(users)

        return users
    }
}