import UserHelper from '@domain/user/helper/UserHelper';
import Validation from '@domain/user/helper/UserValidation';
import UserRepository from '@domain/user/Repository/UserRepository';
import UserService from '@domain/user/services/UserCreateService';
import UserList from '@domain/user/services/UserListService';
import ListController from '@presentation/controllers/ListController';
import UserController from '@presentation/controllers/UsersController';
import util from '@util/util';
import IController from '@interface/domain/controller/IController';
import IHelper from '@interface/domain/helper/HelperTypes';
import IUserValidation from '@interface/domain/helper/UserValidationTypes';
import IUserRepository from '@interface/domain/Repository/RepositoryTypes';
import IUserCreate from '@interface/domain/services/UserCreateTypes';
import IUserlist from '@interface/domain/services/UserListTypes';
import { ControllerAdapterType } from '@interface/middleware/IControllerAdapter';
import { MiddlewareType } from '@interface/middleware/MiddlewareTypes';
import IUtil from '@interface/util/UtilTypes';
import controllerAdapter from '@middleware/global/controllerAdapter';
import UserValidation from '@middleware/UserValidation';
import { container } from 'tsyringe';

// Router
container.registerSingleton<IController>('ListController', ListController);
container.registerSingleton<IController>('UserController', UserController);
// UserController
container.registerSingleton<IUserCreate>('UserService', UserService);
//middleware
container.register<MiddlewareType>('ValidationMiddleware', {
  useValue: UserValidation,
});
container.register<ControllerAdapterType>('ControllerAdapter', {
  useValue: controllerAdapter,
});
// ListController
container.registerSingleton<IUserlist>('UserList', UserList);
// UserListService
container.registerSingleton<IHelper>('UserHelper', UserHelper);
// UserCreatService
container.registerSingleton<IUtil>('Util', util);
container.registerSingleton<IUserValidation>('Validation', Validation);
// UserRepository
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
