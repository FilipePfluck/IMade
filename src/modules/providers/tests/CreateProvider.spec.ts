import FakeProviderRepository from './FakeRepositories/FakeProviderRepository'

import CreateProvider from '../services/CreateProvider'

import AppError from '@shared/errors/AppError'
import { uuid } from 'uuidv4'

let fakeProviderRepository: FakeProviderRepository

let createProvider: CreateProvider

describe('CreateProvider', ()=> {
    beforeEach(()=>{
        fakeProviderRepository = new FakeProviderRepository()

        createProvider = new CreateProvider(fakeProviderRepository)
    })

    it("should be able to create a new provider", async() => {
        const user_id = uuid()

        const provider = await createProvider.execute({
            city: 'Ivoti',
            score: 5,
            user_id
        })

        expect(provider).toHaveProperty('id')
    })
})