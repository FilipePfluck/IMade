import FakeClientRepository from './FakeRepositories/FakeClientRepository'

import UpdateClient from '../services/UpdateClient'

import AppError from '@shared/errors/AppError'
import { uuid } from 'uuidv4'

let fakeClientRepository: FakeClientRepository

let updateClient: UpdateClient

describe('UpdateClient', () => {
    beforeEach(() => {
        fakeClientRepository = new FakeClientRepository()

        updateClient = new UpdateClient(fakeClientRepository)
    })

    const user_id = uuid()

    it("should be able to update the client", async () => {
        const client = await fakeClientRepository.create({
            user_id,
            city: 'Ivoti',
            neighborhood: 'Jardim Panorâmico',
            street: 'Lorem ipsum',
            number: 123
        })

        const updatedClient = await updateClient.execute({
            id: client.id,
            city: 'Ivoti',
            neighborhood: 'Jardim Panorâmico',
            street: 'Lorem ipsum',
            number: 124,
        })

        expect(updatedClient.number).toBe(124)
    })
})