import { Router } from 'express'

import OrderController from '../controllers/OrderController'
import ClientOrdersController from '../controllers/ClientOrdersController'
import ProviderController from '../controllers/ProviderOrdersController'

const orderController = new OrderController()
const clientOrdersController = new ClientOrdersController()
const providerController = new ProviderController()

const orderRoutes = Router()

orderRoutes.post('/', orderController.create)
orderRoutes.get('/', orderController.index)
orderRoutes.put('/:id', orderController.update)
orderRoutes.delete('/:id', orderController.delete)

orderRoutes.get('/:id', orderController.show)

orderRoutes.get('/pending/client/:client_id', clientOrdersController.index)
orderRoutes.get('/accepted/client/:client_id', clientOrdersController.listAcceptedOrders)
orderRoutes.get('/accepted/provider/:provider_id', providerController.index)

orderRoutes.patch('/acceptOrder', orderController.acceptOrder)

export default orderRoutes