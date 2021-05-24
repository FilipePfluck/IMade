import IClientRepository from '@modules/clients/interfaces/IClientRepository';
import IProviderRepository from '@modules/providers/interfaces/IProviderRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreateUserDto from '../interfaces/ICreateUserDto'

import IUserRepository from '../interfaces/IUserRepository';
import IHashProvider from '../providers/hash/IHashProvider'

@injectable()
export default class CreateUser {
    constructor (
        @inject('UsersRepository')
        private usersRepository: IUserRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,
    ){}

    public async execute({
        name, 
        email, 
        password, 
        phone_number, 
        is_provider
    }: ICreateUserDto){
        const userAlreadyExist = await this.usersRepository.findByEmail(email)

        if(userAlreadyExist){
            throw new AppError('Email already used')
        }

        const hashedPassword = await this.hashProvider.generateHash(password)

        const user = await this.usersRepository.create({
            name,
            email,
            is_provider,
            password: hashedPassword,
            phone_number
        })

        return user
    }
}