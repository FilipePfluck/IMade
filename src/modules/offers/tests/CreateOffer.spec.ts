import FakeOfferRepository from './FakeRepositories/FakeOfferRepository'

import CreateOffer from '../services/CreateOffer'

import AppError from '@shared/errors/AppError'
import { uuid } from 'uuidv4'

let fakeOfferRepository: FakeOfferRepository

let createOffer: CreateOffer

describe('CreateOffer', ()=> {
    beforeEach(()=>{
        fakeOfferRepository = new FakeOfferRepository()

        createOffer = new CreateOffer(fakeOfferRepository)
    })


    it("should be able to create a new offer", async() => {
        const order_id = uuid()
        const provider_id = uuid()

        const offer = await createOffer.execute({
            order_id,
            provider_id,
            price: 100,
            comment: 'Aasdasdasd'
        })

        expect(offer).toHaveProperty('id')
    })
})