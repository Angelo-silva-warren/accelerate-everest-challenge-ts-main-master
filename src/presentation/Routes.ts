import { Router } from 'express';
import UserController from './controllers/UsersController';
import ListController from './controllers/ListController';
import { inject, injectable } from 'tsyringe';
import IRoutes from '../interface/RoutesTypes';
import { MiddlewareType } from '../interface/middleware/MiddlewareTypes';
import { ControllerAdapterType } from '../interface/middleware/IControllerAdapter';
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
