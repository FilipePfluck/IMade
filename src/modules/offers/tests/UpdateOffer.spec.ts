import FakeOfferRepository from './FakeRepositories/FakeOfferRepository'

import UpdateOffer from '../services/UpdateOffer'

import AppError from '@shared/errors/AppError'
import { uuid } from 'uuidv4'

let fakeOfferRepository: FakeOfferRepository

let updateOffer: UpdateOffer

describe('UpdateOffer', () => {
    beforeEach(() => {
        fakeOfferRepository = new FakeOfferRepository()

        updateOffer = new UpdateOffer(fakeOfferRepository)
    })

    it("should be able to update the offer", async () => {
        const order_id = uuid()
        const provider_id = uuid()

        const offer = await fakeOfferRepository.create({
            order_id,
            provider_id,
            price: 100,
            comment: 'Aadsasdasd'
        })

        const updatedOffer = await updateOffer.execute({
            id: offer.id,
            price: 120,
            comment: 'asdasdasd'
        })

        expect(updatedOffer.comment).toBe('asdasdasd')
        expect(updatedOffer.price).toBe(120)
    })
})