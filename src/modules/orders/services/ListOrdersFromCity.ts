import { inject, injectable } from 'tsyringe';
import { isAfter } from 'date-fns'

import IOrderRepository from '../interfaces/IOrderRepository';

@injectable()
export default class ListOrder {
    constructor (
        @inject('ordersRepository')
        private orderRepository: IOrderRepository
    ){}

    public async execute(city: string){
        console.log(city)
        const orders = await this.orderRepository.findByCity(city)
        console.log(orders)

        const ordersFromCity = orders.filter(order => {
            const compareDate = new Date(order.date)

            const isNotPastDate = isAfter(compareDate, Date.now())

            return !order.provider_id && isNotPastDate
        })

        return ordersFromCity
    }
}