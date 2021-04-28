import { Router } from 'express'

import UsersController from '../controllers/usersController'

const userController = new UsersController()

const userRoutes = Router()

userRoutes.post('/', userController.create)

export default userRoutes