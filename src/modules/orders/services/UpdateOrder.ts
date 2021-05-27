import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IOrderRepository from '../interfaces/IOrderRepository';

import Order from '../infra/typeorm/entities/order'

interface IRequest {
    id: string
    title: string,
    description: string,
    min: number,
    max: number,
    date: Date,
    status: string
}

@injectable()
export default class UpdateOrder {
    constructor (
        @inject('ordersRepository')
        private orderRepository: IOrderRepository
    ){}

    public async execute({id, date, title, status,min, max,description}: IRequest){
    
        const order = await this.orderRepository.findById(id)

        if(!order){
            throw new AppError('user not found')
        }

        order.date = date
        order.title = title
        order.status = status
        order.min = min
        order.max = max
        order.description = description

        await this.orderRepository.save(order)

        return order
    }
}