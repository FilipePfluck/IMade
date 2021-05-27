import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateOrder from '@modules/orders/services/CreateOrder'
import ListOrder from '@modules/orders/services/ListOrder'
import ShowOrder from '@modules/orders/services/ShowOrder'
import UpdateOrder from '@modules/orders/services/UpdateOrder'
import DeleteOrder from '@modules/orders/services/DeleteOrder'

export default class OrderController {
    public async create(request: Request, response: Response){
        try{
            const createOrder = container.resolve(CreateOrder)

            const data = request.body

            const order = await createOrder.execute({...data, status: "pending"})

            return response.json(order)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async index(request: Request, response: Response){
        try{
            const listOrder = container.resolve(ListOrder) 
            
            const orders = await listOrder.execute()

            return response.json(orders)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async show(request: Request, response: Response) {
        try{
            const {id} = request.params

            const showOrder = container.resolve(ShowOrder)
            
            const order = await showOrder.execute({id})

            return response.json(order)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }

    public async update(request: Request, response: Response) { 
        try{
            const {id} = request.params
            const data = request.body

            const updateOrder = container.resolve(UpdateOrder)

            const order = updateOrder.execute({
                id,
                ...data
            })

            return response.json(order)
        }catch(error){
            return response.status(404).json(error.message)
        }
    }

    public async delete(request: Request, response: Response) {
        try{
            const {id} = request.params

            const deleteOrder = container.resolve(DeleteOrder)
            
            await deleteOrder.execute({id})

            return response.status(204).send()
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }
} 