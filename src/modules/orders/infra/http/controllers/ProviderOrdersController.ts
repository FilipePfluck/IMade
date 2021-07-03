import { Request, Response } from 'express'
import { container } from 'tsyringe'

import FindProviderOrders from '@modules/orders/services/FindAcceptedOrdersFromProvider'

export default class ProviderOrdersController {
    public async index(request: Request, response: Response){
        const { provider_id } = request.params

        const findProviderOrders = container.resolve(FindProviderOrders)

        const orders = await findProviderOrders.execute(provider_id)

        return response.json(orders)
    }
} 