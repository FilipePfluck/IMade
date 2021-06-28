import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateOffer from '@modules/offers/services/CreateOffer'
import ListOffer from '@modules/offers/services/ListOffer'
import ShowOffer from '@modules/offers/services/ShowOffer'
import UpdateOffer from '@modules/offers/services/UpdateOffer'
import DeleteOffer from '@modules/offers/services/DeleteOffer'
import ListProviderOffers from '@modules/offers/services/ListProviderOffers'
import ListOrderOffers from '@modules/offers/services/ListOrderOffers'

export default class OfferController {
    public async create(request: Request, response: Response){
        try{
            const createOffer = container.resolve(CreateOffer)

            const data = request.body

            const offer = await createOffer.execute(data)

            return response.json(offer)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async index(request: Request, response: Response){
        try{
            const listOffer = container.resolve(ListOffer) 
            
            const offers = await listOffer.execute()

            return response.json(offers)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async show(request: Request, response: Response) {
        try{
            const {id} = request.params

            const showOffer = container.resolve(ShowOffer)
            
            const offer = await showOffer.execute({id})

            return response.json(offer)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async update(request: Request, response: Response) { 
        try{
            const {id} = request.params
            const data = request.body

            const updateOffer = container.resolve(UpdateOffer)

            const offer = updateOffer.execute({
                id,
                ...data
            })

            return response.json(offer)
        }catch(error){
            return response.status(404).json(error.message)
        }
    }

    public async delete(request: Request, response: Response) {
        try{
            const {id} = request.params

            const deleteOffer = container.resolve(DeleteOffer)
            
            await deleteOffer.execute({id})

            return response.status(204).send()
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }
} 