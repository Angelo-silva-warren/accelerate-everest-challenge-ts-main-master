import { Router } from 'express'
import UserValidation from '../middleware/UserValidation'
import UserController from './controllers/UsersController'

export default class UserRouter {
  router = Router()

  constructor () {
    this.routes()
  }

  async routes ():Promise<void> {
    this.router.post('/customer', UserValidation, UserController.create)

    this.router.get('/user', UserController.list)
  }
}
