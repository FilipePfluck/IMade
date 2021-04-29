import { Router } from 'express'

import UsersController from '../controllers/usersController'

const userController = new UsersController()

const userRoutes = Router()

userRoutes.post('/', userController.create)
userRoutes.get('/', userController.index)
userRoutes.put('/', userController.update)

userRoutes.get('/:id', userController.show)

export default userRoutes