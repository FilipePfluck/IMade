import { injectable, inject } from 'tsyringe'

import AppError from '@shared/errors/AppError'
import IOrderRepository from '../interfaces/IOrderRepository';

import Order from '../infra/typeorm/entities/order'

interface IRequest {
    id: string,
}

@injectable()
export default class DeleteOrder {
    constructor (
        @inject('ordersRepository')
        private orderRepository: IOrderRepository
    ){}

    public async execute({ id }: IRequest){
        await this.orderRepository.delete(id)
    }
}