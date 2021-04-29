import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { classToClass } from 'class-transformer'

import CreateUser from '@modules/users/services/CreateUser'
import ListUsers from '@modules/users/services/ListUsers'
import ShowUser from '@modules/users/services/ShowUser'
import UpdateUser from '@modules/users/services/UpdateProfile'

export default class UsersController {
    public async create(request: Request, response: Response){
        try{
            const createUser = container.resolve(CreateUser)

            const { name, email, password, phone_number, is_provider } = request.body

            const user = await createUser.execute({
                name,
                email,
                is_provider,
                password,
                phone_number
            })

            return response.json(user)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async index(request: Request, response: Response){
        try{
            const listUsers = container.resolve(ListUsers) 
            
            const users = await listUsers.execute()

            return response.json(classToClass(users))
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async show(request: Request, response: Response) {
        try{
            const {user_id} = request.params

            const showUser = container.resolve(ShowUser)
            
            const user = await showUser.execute({user_id})

            return response.json(user)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async update(request: Request, response: Response) { 
        try{
            const {user_id} = request.params
            const { email, name, old_password, password } = request.body

            const updateUser = container.resolve(UpdateUser)

            const user = updateUser.execute({
                user_id,
                email,
                name,
                old_password,
                password
            })

            return response.json(user)
        }catch(error){
            return response.status(404).json(error.message)
        }
    }
} 