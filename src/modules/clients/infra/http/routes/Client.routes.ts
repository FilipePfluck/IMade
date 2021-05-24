import { Router } from 'express'

import ClientController from '../controllers/ClientController'

const clientController = new ClientController()

const clientRoutes = Router()

clientRoutes.post('/', clientController.create)
clientRoutes.get('/', clientController.index)
clientRoutes.put('/:id', clientController.update)
clientRoutes.delete('/:id', clientController.delete)

clientRoutes.get('/:id', clientController.show)

export default clientRoutes