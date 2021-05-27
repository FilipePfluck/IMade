import { Request, Response } from 'express'
import { container } from 'tsyringe'

import ListOrder from '@modules/orders/services/ListOrder'
import FindClientOrders from '@modules/orders/services/FindAllClientOrders'

export default class ClientOrdersController {
    public async index(request: Request, response: Response){
        try{
            const { client_id } = request.params

            const findClientOrders = container.resolve(FindClientOrders) 
            
            const orders = await findClientOrders.execute(client_id)

            return response.json(orders)
        }catch(error){
            return response.status(404).json({error: error.message})
        }
    }
} 