import { Router } from 'express';
import UserController from './controllers/UsersController';
import ListController from './controllers/ListController';
import { inject, injectable } from 'tsyringe';
import IRoutes from '../interface/RoutesTypes';
import { MiddlewareType } from '../interface/middleware/MiddlewareTypes';

@injectable()
export default class UserRouter implements IRoutes {
  router = Router();
  CreateUserController: UserController;
  ListUserController: ListController;
  UserValidation: MiddlewareType;

  constructor(
    @inject('UserController') userController: UserController,
    @inject('ListController') userList: ListController,
    @inject('ValidationMiddleware') userValidation: MiddlewareType,
  ) {
    this.UserValidation = userValidation;
    this.CreateUserController = userController;
    this.ListUserController = userList;
    this.routes();
  }

  routes(): void {
    this.router.post(
      '/customer',
      this.UserValidation,
      this.CreateUserController.handle,
    );

    this.router.get('/user', this.ListUserController.handle);
  }
}
