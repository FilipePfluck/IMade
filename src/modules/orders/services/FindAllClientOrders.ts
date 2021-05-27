import { inject, injectable } from 'tsyringe';

import IOrderRepository from '../interfaces/IOrderRepository';

@injectable()
export default class ListOrder {
    constructor (
        @inject('ordersRepository')
        private orderRepository: IOrderRepository
    ){}

    public async execute(id: string){
        const orders = await this.orderRepository.findClientOrder(id)
    
        const pendingOrders = orders.filter(order => !order.provider_id)

        return pendingOrders
    }
}