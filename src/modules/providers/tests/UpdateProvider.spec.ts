import FakeProviderRepository from './FakeRepositories/FakeProviderRepository'

import UpdateProvider from '../services/UpdateProvider'

import AppError from '@shared/errors/AppError'
import { uuid } from 'uuidv4'

let fakeProviderRepository: FakeProviderRepository

let updateProvider: UpdateProvider

describe('UpdateProvider', () => {
    beforeEach(() => {
        fakeProviderRepository = new FakeProviderRepository()

        updateProvider = new UpdateProvider(fakeProviderRepository)
    })

    it("should be able to update the provider", async () => {
        const user_id = uuid()

        const provider = await fakeProviderRepository.create({
            user_id,
            city: 'Ivoti',
            score: 0,
            avaliations: 0
        })

        const updatedProvider = await updateProvider.execute({
            id: provider.id,
            city: 'Dois Irmãos',
            score: 4.2
        })

        expect(updatedProvider.city).toBe('Dois Irmãos')
        expect(updatedProvider.score).toBe(4.2)
    })
})