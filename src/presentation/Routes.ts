import { Router } from 'express'
import UserValidation from '../middleware/UserValidation'
import UserController from './controllers/UsersController'

const router = Router()

router.post('/customer', UserValidation , UserController.create)

router.get('/user', UserController.list)

export { router }
