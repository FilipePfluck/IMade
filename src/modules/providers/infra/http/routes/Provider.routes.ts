import { Router } from 'express'

import ProviderController from '../controllers/ProviderController'
import ProviderScoreController from '../controllers/ProviderScoreController'

const providerController = new ProviderController()
const providerScoreController = new ProviderScoreController()

const providerRoutes = Router()

providerRoutes.post('/', providerController.create)
providerRoutes.get('/', providerController.index)
providerRoutes.put('/:id', providerController.update)
providerRoutes.delete('/:id', providerController.delete)

providerRoutes.get('/:id', providerController.show)

providerRoutes.patch('/score/:id', providerScoreController.update)

export default providerRoutes