import { Router } from 'express'

import OrderController from '../controllers/OrderController'
import ClientOrdersController from '../controllers/ClientOrdersController'
import ProviderController from '../controllers/ProviderOrdersController'
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'

const orderController = new OrderController()
const clientOrdersController = new ClientOrdersController()
const providerController = new ProviderController()

const orderRoutes = Router()

orderRoutes.post('/', ensureAuthenticated, orderController.create)
orderRoutes.get('/', ensureAuthenticated, orderController.index)
orderRoutes.put('/:id', ensureAuthenticated, orderController.update)
orderRoutes.delete('/:id', ensureAuthenticated, orderController.delete)

orderRoutes.get('/:id', ensureAuthenticated, orderController.show)

orderRoutes.get('/pending/client/:client_id', ensureAuthenticated, clientOrdersController.index)
orderRoutes.get('/accepted/client/:client_id', ensureAuthenticated, clientOrdersController.listAcceptedOrders)
orderRoutes.get('/accepted/provider/:provider_id', ensureAuthenticated, providerController.index)

orderRoutes.patch('/acceptOrder', ensureAuthenticated, orderController.acceptOrder)

export default orderRoutes