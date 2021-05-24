import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateProvider from '@modules/providers/services/CreateProvider'
import ListProvider from '@modules/providers/services/ListProvider'
import ShowProvider from '@modules/providers/services/ShowProvider'
import UpdateProvider from '@modules/providers/services/UpdateProvider'
import DeleteProvider from '@modules/providers/services/DeleteProvider'

export default class ProviderController {
    public async create(request: Request, response: Response){
        try{
            const createProvider = container.resolve(CreateProvider)

            const data = request.body

            const provider = await createProvider.execute(data)

            return response.json(provider)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async index(request: Request, response: Response){
        try{
            const listProvider = container.resolve(ListProvider) 
            
            const providers = await listProvider.execute()

            return response.json(providers)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async show(request: Request, response: Response) {
        try{
            const {id} = request.params

            const showProvider = container.resolve(ShowProvider)
            
            const provider = await showProvider.execute({id})

            return response.json(provider)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async update(request: Request, response: Response) { 
        try{
            const {id} = request.params
            const data = request.body

            const updateProvider = container.resolve(UpdateProvider)

            const provider = updateProvider.execute({
                id,
                ...data
            })

            return response.json(provider)
        }catch(error){
            return response.status(404).json(error.message)
        }
    }

    public async delete(request: Request, response: Response) {
        try{
            const {id} = request.params

            const deleteProvider = container.resolve(DeleteProvider)
            
            await deleteProvider.execute({id})

            return response.status(204).send()
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }
} 