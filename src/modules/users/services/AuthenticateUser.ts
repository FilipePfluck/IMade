import {sign} from 'jsonwebtoken'
import { injectable, inject } from 'tsyringe'

import IUsersRepository from '../interfaces/IUserRepository'
import IHashProvider from '../providers/hash/IHashProvider'
import AppError from '@shared/errors/AppError'
import authConfig from '@config/auth'
import User from '../infra/typeorm/entities/user'
import IClientRepository from '@modules/clients/interfaces/IClientRepository'

interface IRequest {
    email: string
    password: string
}

interface IResponse {
    user: User
    token: string
}

@injectable()
export default class AuthenticateUser {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,

        @inject('HashProvider')
        private hashProvider: IHashProvider,

        @inject('clientsRepository')
        private clientRepository: IClientRepository
    ){}

    public async execute({ email, password}: IRequest):Promise<IResponse>{

        const user = await this.usersRepository.findByEmail(email)
        
        if(!user){
            throw new AppError('Incorrect email/password combination', 401)
            
        }

        const matchedPassword = await this.hashProvider.compareHash(password, user.password)

        if(!matchedPassword){
            throw new AppError('Incorrect email/password combination', 401)
        }

        const { secret, expiresIn } = authConfig.jwt

        const token = sign({}, secret, {
            subject: user.id,
            expiresIn
        })

        return { user, token }
    }
}