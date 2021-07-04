import { Router } from 'express'

import userRoutes from '@modules/users/infra/http/routes/user.routes'
import clientRoutes from '@modules/clients/infra/http/routes/Client.routes'
import providerRoutes from '@modules/providers/infra/http/routes/Provider.routes'
import orderRoutes from '@modules/orders/infra/http/routes/Order.routes'
import offerRoutes from '@modules/offers/infra/http/routes/Offer.routes'
import sessionRoutes from '@modules/users/infra/http/routes/sessions.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/clients', clientRoutes)
routes.use('/providers', providerRoutes)
routes.use('/orders', orderRoutes)
routes.use('/offers', offerRoutes)
routes.use('/sessions', sessionRoutes)

export default routes