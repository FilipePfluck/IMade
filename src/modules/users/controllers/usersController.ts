import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateUser from '../services/CreateUser'

export default class UsersController {
    public async create(request: Request, response: Response){
        try{
            const createUser = container.resolve(CreateUser)

            const { name, email, password, phone_number, is_provider } = request.body

            const user = createUser.execute({
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
} 