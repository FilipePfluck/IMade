import { container } from 'tsyringe'

import '@modules/users/providers'

import IUserRepository from '@modules/users/interfaces/IUserRepository'
import UserRepository from '@modules/users/infra/typeorm/repositories/UserRepository'

import IClientRepository from '@modules/clients/interfaces/IClientRepository'
import ClientRepository from '@modules/clients/infra/typeorm/repositories/ClientRepository'

import IProviderRepository from '@modules/providers/interfaces/IProviderRepository'
import ProviderRepository from '@modules/providers/infra/typeorm/repositories/ProviderRepository'

import IOrderRepository from '@modules/orders/interfaces/IOrderRepository'
import OrderRepository from '@modules/orders/infra/typeorm/repositories/OrderRepository'

import IOfferRepository from '@modules/offers/interfaces/IOfferRepository'
import OfferRepository from '@modules/offers/infra/typeorm/repositories/OfferRepository'

container.registerSingleton<IUserRepository>(
    'UsersRepository',
    UserRepository
)

container.registerSingleton<IClientRepository>(
    'clientsRepository',
    ClientRepository
)

container.registerSingleton<IProviderRepository>(
    'providersRepository',
    ProviderRepository
)

container.registerSingleton<IOrderRepository>(
    'ordersRepository',
    OrderRepository
)

container.registerSingleton<IOfferRepository>(
    'offersRepository',
    OfferRepository
)