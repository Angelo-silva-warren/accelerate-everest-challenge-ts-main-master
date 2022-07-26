import { ControllerAdapterType } from '@interface/middleware/IControllerAdapter';
import { MiddlewareType } from '@interface/middleware/MiddlewareTypes';
import IRoutes from '@interface/RoutesTypes';
import { Router } from 'express';
import { inject, injectable } from 'tsyringe';
import ListController from './controllers/ListController';
import UserController from './controllers/UsersController';
@injectable()
export default class UserRouter implements IRoutes {
  router = Router();
  CreateUserController: UserController;
  ListUserController: ListController;
  UserValidation: MiddlewareType;
  controllerAdapter: ControllerAdapterType;

  constructor(
    @inject('UserController') userController: UserController,
    @inject('ListController') userList: ListController,
    @inject('ValidationMiddleware') userValidation: MiddlewareType,
    @inject('ControllerAdapter') controllerAdapter: ControllerAdapterType,
  ) {
    this.UserValidation = userValidation;
    this.controllerAdapter = controllerAdapter;
    this.CreateUserController = userController;
    this.ListUserController = userList;
    this.routes();
  }

  routes(): void {
    this.router.post(
      '/customer',
      this.UserValidation,
      this.controllerAdapter(this.CreateUserController),
    );

    this.router.get('/user', this.controllerAdapter(this.ListUserController));
  }
}
