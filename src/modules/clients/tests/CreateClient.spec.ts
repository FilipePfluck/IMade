import FakeClientRepository from './FakeRepositories/FakeClientRepository'

import CreateClient from '../services/CreateClient'

import AppError from '@shared/errors/AppError'
import { uuid } from 'uuidv4'

let fakeClientRepository: FakeClientRepository

let createClient: CreateClient

describe('CreateClient', ()=> {
    beforeEach(()=>{
        fakeClientRepository = new FakeClientRepository()

        createClient = new CreateClient(fakeClientRepository)
    })

    const user_id = uuid()

    it("should be able to create a new client", async() => {
        const client = await createClient.execute({
            user_id,
            city: 'Ivoti',
            neighborhood: 'Jardim Panorâmico',
            street: 'Lorem ipsum',
            number: 123
        })

        console.log(client)

        expect(client).toHaveProperty('id')
    })
})