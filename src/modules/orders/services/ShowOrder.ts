import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IOrderRepository from '../interfaces/IOrderRepository';

import Order from '../infra/typeorm/entities/order'

interface IRequest {
    id: string,
}

@injectable()
export default class ShowOrder {
    constructor (
        @inject('ordersRepository')
        private orderRepository: IOrderRepository
    ){}

    public async execute({ id }: IRequest):Promise<Order>{
        const order = await this.orderRepository.findById(id)

        if(!order){
            throw new AppError('Order does not exists')
        }

        return order
    }
}