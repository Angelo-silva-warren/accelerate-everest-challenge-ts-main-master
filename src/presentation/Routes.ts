import { Router } from 'express'
import UserValidation from '../middleware/UserValidation'
import UserController from './controllers/UsersController'
import ListController from './controllers/ListController'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class UserRouter {
  router = Router()
  userController : UserController
  userList : ListController

  constructor (
    @inject('UserController') userController : UserController,
    @inject('ListController') userList : ListController) {
    this.userController = userController
    this.userList = userList
    this.routes()
  }

  async routes ():Promise<void> {
    this.router.post('/customer', UserValidation, this.userController.handle)

    this.router.get('/user', this.userList.list)
  }
}
