import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateClient from '@modules/clients/services/CreateClient'
import ListClient from '@modules/clients/services/ListClient'
import ShowClient from '@modules/clients/services/ShowClient'
import UpdateClient from '@modules/clients/services/UpdateClient'
import DeleteClient from '@modules/clients/services/DeleteClient'

export default class ClientController {
    public async create(request: Request, response: Response){
        try{
            const createClient = container.resolve(CreateClient)

            const data = request.body

            const client = await createClient.execute(data)

            return response.json(client)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async index(request: Request, response: Response){
        try{
            const listClient = container.resolve(ListClient) 
            
            const clients = await listClient.execute()

            return response.json(clients)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async show(request: Request, response: Response) {
        try{
            const {id} = request.params

            const showClient = container.resolve(ShowClient)
            
            const client = await showClient.execute({id})

            return response.json(client)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async update(request: Request, response: Response) { 
        try{
            const {id} = request.params
            const data = request.body

            const updateClient = container.resolve(UpdateClient)

            const client = updateClient.execute({
                id,
                ...data
            })

            return response.json(client)
        }catch(error){
            return response.status(404).json(error.message)
        }
    }

    public async delete(request: Request, response: Response) {
        try{
            const {id} = request.params

            const deleteClient = container.resolve(DeleteClient)
            
            await deleteClient.execute({id})

            return response.status(204).send()
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }
} 