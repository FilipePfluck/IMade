import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IOrderRepository from '../interfaces/IOrderRepository';

import Order from '../infra/typeorm/entities/order'
import IProviderRepository from '@modules/providers/interfaces/IProviderRepository';

interface IRequest {
    order_id: string
    provider_id: string
}

@injectable()
export default class AcceptOrder {
    constructor (
        @inject('ordersRepository')
        private orderRepository: IOrderRepository,

        @inject('providersRepository')
        private providerRepository: IProviderRepository
    ){}

    public async execute({order_id, provider_id}: IRequest){
    
        const order = await this.orderRepository.findById(order_id)

        if(!order){
            throw new AppError('order not found')
        }

        const provider = await this.providerRepository.findById(provider_id)

        if(!provider){
            throw new AppError('provider not found')
        }

        order.provider_id = provider_id
        order.status = 'accepted'

        await this.orderRepository.save(order)

        return order
    }
}