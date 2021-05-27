import FakeOrderRepository from './FakeRepositories/FakeOrderRepository'

import UpdateOrder from '../services/UpdateOrder'

import AppError from '@shared/errors/AppError'
import { uuid } from 'uuidv4'

let fakeOrderRepository: FakeOrderRepository

let updateOrder: UpdateOrder

describe('UpdateOrder', () => {
    beforeEach(() => {
        fakeOrderRepository = new FakeOrderRepository()

        updateOrder = new UpdateOrder(fakeOrderRepository)
    })

    const client_id = uuid()

    it("should be able to update the order", async () => {
        const order = await fakeOrderRepository.create({
            client_id,
            city: 'Ivoti',
            date: new Date(2021, 6, 29, 14),
            description: 'asdasdasd',
            max: 200,
            min: 120,
            status: 'pending',
            title: 'asdasd',
        })

        const updatedOrder = await updateOrder.execute({
            date: new Date(2021, 6, 29, 14),
            description: 'asdasdasdasd',
            id: order.id,
            max: 210,
            min: 120,
            status: 'complete',
            title: 'asdasd'
        })

        expect(updatedOrder.status).toBe('complete')
    })
})