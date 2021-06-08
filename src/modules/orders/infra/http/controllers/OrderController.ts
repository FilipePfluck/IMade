import { Request, Response } from 'express'
import { container } from 'tsyringe'

import CreateOrder from '@modules/orders/services/CreateOrder'
import ListOrder from '@modules/orders/services/ListOrder'
import ShowOrder from '@modules/orders/services/ShowOrder'
import UpdateOrder from '@modules/orders/services/UpdateOrder'
import DeleteOrder from '@modules/orders/services/DeleteOrder'
import ListOrdersFromCity from '@modules/orders/services/ListOrdersFromCity'

export default class OrderController {
    public async create(request: Request, response: Response){
        const createOrder = container.resolve(CreateOrder)

        const data = request.body

        const order = await createOrder.execute({...data, status: "pending"})

        return response.json(order)
    }

    public async index(request: Request, response: Response){
        const {city} = request.query as {city: string | undefined}

        const listOrdersFromCity = container.resolve(ListOrdersFromCity)
        const listOrder = container.resolve(ListOrder) 
        
        if(city){
            const orders = await listOrdersFromCity.execute(city)

            return response.json(orders)
        }else{
            const orders = await listOrder.execute()

            return response.json(orders)   
        }
    }

    public async show(request: Request, response: Response) {
        const {id} = request.params

        const showOrder = container.resolve(ShowOrder)
            
        const order = await showOrder.execute({id})

        return response.json(order)
    }

    public async update(request: Request, response: Response) { 
        const {id} = request.params
        const data = request.body

        const updateOrder = container.resolve(UpdateOrder)

        const order = updateOrder.execute({
            id,
            ...data
        })

        return response.json(order)
    }

    public async delete(request: Request, response: Response) {
        const {id} = request.params

        const deleteOrder = container.resolve(DeleteOrder)
            
        await deleteOrder.execute({id})

        return response.status(204).send()
    }

    public async findFromCity (request: Request, response: Response) { 
        console.log('asdasd')

        const {city} = request.query as {city: string}

        const listOrdersFromCity = container.resolve(ListOrdersFromCity)

        const orders = listOrdersFromCity.execute(city)

        return response.json(orders)
    }
} 