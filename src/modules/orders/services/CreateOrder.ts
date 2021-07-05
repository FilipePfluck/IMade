import AppError from '@shared/errors/AppError';
import { isBefore, parseISO } from 'date-fns';
import { inject, injectable } from 'tsyringe';
import ICreateOrderDto from '../interfaces/ICreateOrderDto'

import IOrderRepository from '../interfaces/IOrderRepository';

@injectable()
export default class CreateOrder {
    constructor (
        @inject('ordersRepository')
        private orderRepository: IOrderRepository
    ){}

    public async execute(data: ICreateOrderDto){
        
        const { date } = data

        if(isBefore(date, Date.now())){
            throw new AppError('Past date')
        }

        const order = await this.orderRepository.create(data)

        return order
    }
}