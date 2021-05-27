import { inject, injectable } from 'tsyringe';

import IOrderRepository from '../interfaces/IOrderRepository';

@injectable()
export default class ListOrder {
    constructor (
        @inject('ordersRepository')
        private orderRepository: IOrderRepository
    ){}

    public async execute(){
        const orders = await this.orderRepository.find()

        return orders
    }
}