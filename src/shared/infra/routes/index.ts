import { Router } from 'express'

import userRoutes from '@modules/users/infra/http/routes/user.routes'
import clientRoutes from '@modules/clients/infra/http/routes/Client.routes'
import providerRoutes from '@modules/providers/infra/http/routes/Provider.routes'
import orderRoutes from '@modules/orders/infra/http/routes/Order.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/clients', clientRoutes)
routes.use('/providers', providerRoutes)
routes.use('/orders', orderRoutes)

export default routes