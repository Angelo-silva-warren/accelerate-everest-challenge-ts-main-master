import { Router } from 'express';
import UserValidation from '../middleware/UserValidation';
import UserController from './controllers/UsersController';
import ListController from './controllers/ListController';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class UserRouter {
  router = Router();
  CreateUserController: UserController;
  ListUserController: ListController;

  constructor(
    @inject('UserController') userController: UserController,
    @inject('ListController') userList: ListController,
  ) {
    this.CreateUserController = userController;
    this.ListUserController = userList;
    this.routes();
  }

  async routes(): Promise<void> {
    this.router.post(
      '/customer',
      UserValidation,
      this.CreateUserController.handle,
    );

    this.router.get('/user', this.ListUserController.list);
  }
}
