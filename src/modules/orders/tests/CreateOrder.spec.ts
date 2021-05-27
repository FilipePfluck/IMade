import FakeOrderRepository from './FakeRepositories/FakeOrderRepository'

import CreateOrder from '../services/CreateOrder'

import AppError from '@shared/errors/AppError'
import { uuid } from 'uuidv4'

let fakeOrderRepository: FakeOrderRepository

let createOrder: CreateOrder

describe('CreateOrder', ()=> {
    beforeEach(()=>{
        fakeOrderRepository = new FakeOrderRepository()

        createOrder = new CreateOrder(fakeOrderRepository)
    })

    const client_id = uuid()

    it("should be able to create a new order", async() => {
        const order = await createOrder.execute({
            client_id,
            city: 'Ivoti',
            date: new Date(2021, 6, 29, 14),
            description: 'asdasdasd',
            max: 200,
            min: 120,
            status: 'pending',
            title: 'asdasd',
        })

        expect(order).toHaveProperty('id')
    })

    it("should not be able to create an order in a past date", async () => {
        jest.spyOn(Date, 'now').mockImplementationOnce(()=>{
            return new Date(2021, 4, 10, 12).getTime()
        })

        await expect(createOrder.execute({
            date: new Date(2021, 4, 8, 10),
            client_id,
            city: 'Ivoti',
            description: 'asdasdasd',
            max: 200,
            min: 120,
            status: 'pending',
            title: 'asdasd',
        })).rejects.toBeInstanceOf(AppError)
    })
})