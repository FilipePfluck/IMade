import { inject, injectable } from 'tsyringe';
import ICreateUserDto from '../dtos/ICreateUserDto'

import IUserRepository from '../repositories/IUserRepository';

@injectable()
export default class CreateUser {
    constructor (
        @inject('UsersRepository')
        private usersRepository: IUserRepository
    ){}

    public async execute({
        name, 
        email, 
        password, 
        phone_number, 
        is_provider
    }: ICreateUserDto){
        const user = await this.usersRepository.create({
            name,
            email,
            is_provider,
            password,
            phone_number
        })

        return user
    }
}