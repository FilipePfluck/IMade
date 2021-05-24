import { Router } from 'express'

import userRoutes from '@modules/users/infra/http/routes/user.routes'
import clientRoutes from '@modules/clients/infra/http/routes/Client.routes'
import providerRoutes from '@modules/providers/infra/http/routes/Provider.routes'

const routes = Router()

routes.use('/users', userRoutes)
routes.use('/clients', clientRoutes)
routes.use('/providers', providerRoutes)

export default routes