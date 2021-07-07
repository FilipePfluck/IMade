import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import { Router } from 'express'

import ProviderController from '../controllers/ProviderController'
import ProviderScoreController from '../controllers/ProviderScoreController'

const providerController = new ProviderController()
const providerScoreController = new ProviderScoreController()

const providerRoutes = Router()

providerRoutes.post('/', providerController.create)
providerRoutes.get('/', providerController.index)
providerRoutes.put('/:id', /* ensureAuthenticated, */ providerController.update)
providerRoutes.delete('/:id', /* ensureAuthenticated, */ providerController.delete)

providerRoutes.get('/:id', /* ensureAuthenticated, */ providerController.show)

providerRoutes.patch('/score/:id', /* ensureAuthenticated, */ providerScoreController.update)

export default providerRoutes