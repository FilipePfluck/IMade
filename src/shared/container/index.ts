import { container } from 'tsyringe'

import '@modules/users/providers'

import IUserRepository from '@modules/users/interfaces/IUserRepository'
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository'

container.registerSingleton<IUserRepository>(
    'UsersRepository',
    UserRepository
)