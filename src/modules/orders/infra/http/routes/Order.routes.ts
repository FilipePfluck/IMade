import { Router } from 'express'

import OrderController from '../controllers/OrderController'
import ClientOrdersController from '../controllers/ClientOrdersController'

const orderController = new OrderController()
const clientOrdersController = new ClientOrdersController()

const orderRoutes = Router()

orderRoutes.post('/', orderController.create)
orderRoutes.get('/', orderController.index)
orderRoutes.put('/:id', orderController.update)
orderRoutes.delete('/:id', orderController.delete)

orderRoutes.get('/:id', orderController.show)

orderRoutes.get('/pending/:client_id', clientOrdersController.index)
orderRoutes.get('/byCity', orderController.findFromCity)

export default orderRoutes