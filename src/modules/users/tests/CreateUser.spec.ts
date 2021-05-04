import FakeUsersRepository from './FakeRepositories/FakeUserRepository'
import FakeHashProvider from '../providers/hash/fakeHashProvider'

import CreateUser from '../services/CreateUser'

import AppError from '@shared/errors/AppError'

let fakeUsersRepository: FakeUsersRepository
let fakeHashProvider: FakeHashProvider
let createUser: CreateUser

describe('CreateUser', ()=> {
    beforeEach(()=>{
        fakeUsersRepository = new FakeUsersRepository()
        fakeHashProvider = new FakeHashProvider()

        createUser = new CreateUser(fakeUsersRepository, fakeHashProvider)
    })

    it("should be able to create a new user", async() => {
        const user = await createUser.execute({
            name: "Filipe",
            email: "adasd@gmasdias.com",
            password: "123456",
            is_provider: true,
            phone_number: '123123123'
        })

        expect(user).toHaveProperty('id')
    })

    it("shouldn't be able to create two users with the same email", async() => {
        const user = await createUser.execute({
            name: "Filipe",
            email: "adasd@gmasdias.com",
            password: "123456",
            is_provider: true,
            phone_number: '123123123'
        })

        await expect(createUser.execute({
            name: "Filipe",
            email: "adasd@gmasdias.com",
            password: "123456",
            is_provider: true,
            phone_number: '123123123'
        })).rejects.toBeInstanceOf(AppError)
    })
})