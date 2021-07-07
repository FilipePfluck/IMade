import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated'
import { Router } from 'express'

import OfferController from '../controllers/OfferController'

const offerController = new OfferController()

const offerRoutes = Router()

offerRoutes.post('/', /* ensureAuthenticated, */ offerController.create)
offerRoutes.get('/', /* ensureAuthenticated, */ offerController.index)
offerRoutes.put('/:id', /* ensureAuthenticated, */ offerController.update)
offerRoutes.delete('/:id', /* ensureAuthenticated, */ offerController.delete)

offerRoutes.get('/:id', /* ensureAuthenticated, */ offerController.show)

offerRoutes.get('/order/:order_id', /* ensureAuthenticated, */ offerController.listOrdersOffers)
offerRoutes.get('/pending/provider/:provider_id', /* ensureAuthenticated, */ offerController.listProviderOffers)

export default offerRoutes