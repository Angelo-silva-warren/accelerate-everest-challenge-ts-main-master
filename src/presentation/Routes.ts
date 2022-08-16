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

  constructor(
    @inject('UserController') private userController: UserController,
    @inject('ListController') private userList: ListController,
    @inject('ValidationMiddleware') private userValidation: MiddlewareType,
    @inject('ControllerAdapter')
    private controllerAdapter: ControllerAdapterType,
  ) {
    this.routes();
  }

  routes(): void {
    this.router.post(
      '/customer',
      this.userValidation,
      this.controllerAdapter(this.userList),
    );

    this.router.get('/user', this.controllerAdapter(this.userController));
  }
}
