import { Router } from 'express'

import ProviderController from '../controllers/ProviderController'

const providerController = new ProviderController()

const providerRoutes = Router()

providerRoutes.post('/', providerController.create)
providerRoutes.get('/', providerController.index)
providerRoutes.put('/:id', providerController.update)
providerRoutes.delete('/:id', providerController.delete)

providerRoutes.get('/:id', providerController.show)

export default providerRoutes