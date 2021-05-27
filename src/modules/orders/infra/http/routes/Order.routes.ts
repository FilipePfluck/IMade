import { Router } from 'express'

import OrderController from '../controllers/OrderController'

const orderController = new OrderController()

const orderRoutes = Router()

orderRoutes.post('/', orderController.create)
orderRoutes.get('/', orderController.index)
orderRoutes.put('/:id', orderController.update)
orderRoutes.delete('/:id', orderController.delete)

orderRoutes.get('/:id', orderController.show)

export default orderRoutes