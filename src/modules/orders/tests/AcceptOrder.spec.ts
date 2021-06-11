import FakeProviderRepository from '@modules/providers/tests/FakeRepositories/FakeProviderRepository'
import FakeOrderRepository from './FakeRepositories/FakeOrderRepository'

import AcceptOrder from '../services/AcceptOrder'

import AppError from '@shared/errors/AppError'
import { uuid } from 'uuidv4'

let fakeOrderRepository: FakeOrderRepository
let fakeProviderRepository: FakeProviderRepository

let acceptOrder: AcceptOrder

describe('UpdateOrder', () => {
    beforeEach(() => {
        fakeOrderRepository = new FakeOrderRepository()
        fakeProviderRepository = new FakeProviderRepository()

        acceptOrder = new AcceptOrder(fakeOrderRepository, fakeProviderRepository)
    })

    const client_id = uuid()

    it("should be able to accept an order", async () => {
        const user_id = uuid()

        const provider = await fakeProviderRepository.create({
            city: 'Ivoti',
            user_id,
            avaliations: 0,
            score: 0
        })

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

        const updatedOrder = await acceptOrder.execute({
            order_id: order.id,
            provider_id: provider.id
        })

        expect(updatedOrder.provider_id).toBe(provider.id)
    })

    it('should not be able to accept an non existing order', async () => {
        const user_id = uuid()
        const order_id = uuid()

        const provider = await fakeProviderRepository.create({
            city: 'Ivoti',
            user_id,
            avaliations: 0,
            score: 0
        })

        await expect(acceptOrder.execute({
            order_id,
            provider_id: provider.id
        })).rejects.toBeInstanceOf(AppError)
    })

    it('should not be able to accept an order with a non existing provider', async () => {
        const provider_id = uuid()

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

        await expect(acceptOrder.execute({
            order_id: order.id,
            provider_id
        })).rejects.toBeInstanceOf(AppError)
    })
})