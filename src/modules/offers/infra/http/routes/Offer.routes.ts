import { Router } from 'express'

import OfferController from '../controllers/OfferController'

const offerController = new OfferController()

const offerRoutes = Router()

offerRoutes.post('/', offerController.create)
offerRoutes.get('/', offerController.index)
offerRoutes.put('/:id', offerController.update)
offerRoutes.delete('/:id', offerController.delete)

offerRoutes.get('/:id', offerController.show)

export default offerRoutes