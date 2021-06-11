import { Request, Response } from 'express'
import { container } from 'tsyringe'

import FindClientOrders from '@modules/orders/services/FindAllClientOrders'
import FindAcceptedOrdersFromClient from '@modules/orders/services/FindAcceptedOrdersFromClient'

export default class ClientOrdersController {
    public async index(request: Request, response: Response){
        const { client_id } = request.params

        const findClientOrders = container.resolve(FindClientOrders) 
            
        const orders = await findClientOrders.execute(client_id)

        return response.json(orders)
    }

    public async listAcceptedOrders(request: Request, response: Response){
        const { client_id } = request.params

        const findAcceptedOrders = container.resolve(FindAcceptedOrdersFromClient) 
            
        const orders = await findAcceptedOrders.execute(client_id)

        return response.json(orders)
    }
} 