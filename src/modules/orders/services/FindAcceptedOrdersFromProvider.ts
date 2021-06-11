import { inject, injectable } from 'tsyringe';
import { isAfter } from 'date-fns'

import IOrderRepository from '../interfaces/IOrderRepository';

@injectable()
export default class FindAcceptedOrdersFromClient {
    constructor (
        @inject('ordersRepository')
        private orderRepository: IOrderRepository
    ){}

    public async execute(id: string){
        const orders = await this.orderRepository.findProviderOrder(id)

        const providerOrders = orders.filter(order => {
            const compareDate = new Date(order.date)

            const isNotPastDate = isAfter(compareDate, Date.now())

            return isNotPastDate
        })

        return providerOrders
    }
}