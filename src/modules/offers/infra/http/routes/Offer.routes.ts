import { Router } from 'express'

import OfferController from '../controllers/OfferController'

const offerController = new OfferController()

const offerRoutes = Router()

offerRoutes.post('/', offerController.create)
offerRoutes.get('/', offerController.index)
offerRoutes.put('/:id', offerController.update)
offerRoutes.delete('/:id', offerController.delete)

offerRoutes.get('/:id', offerController.show)

offerRoutes.get('/order/:order_id', offerController.listOrdersOffers)
offerRoutes.get('/pending/provider/:provider_id', offerController.listProviderOffers)

export default offerRoutes