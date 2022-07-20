import { container } from 'tsyringe';
import UserHelper from '../domain/user/helper/UserHelper';
import UserService from '../domain/user/services/UserCreateService';
import UserList from '../domain/user/services/UserListService';
import ListController from '../presentation/controllers/ListController';
import UserController from '../presentation/controllers/UsersController';
import util from '../util/util';
import IUtil from '../interface/util/UtilTypes';
import IHelper from '../interface/domain/helper/HelperTypes';
import IUserlist from '../interface/domain/services/UserListTypes';
import IUserCreate from '../interface/domain/services/UserCreateTypes';
import IUsercontroller from '../interface/domain/controller/UserControllerTypes';
import IListcontroller from '../interface/domain/controller/ListControllerTypes';
import IUserRepository from '../interface/domain/Repository/RepositoryTypes';
import UserRepository from '../domain/user/Repository/UserRepository';
import IUserValidation from '../interface/domain/helper/UserValidationTypes';
import Validation from '../domain/user/helper/UserValidation';
import { MiddlewareType } from '../interface/middleware/MiddlewareTypes';
import UserValidation from '../middleware/UserValidation';

// Router
container.registerSingleton<IListcontroller>('ListController', ListController);
container.registerSingleton<IUsercontroller>('UserController', UserController);
// UserController
container.registerSingleton<IUserCreate>('UserService', UserService);
//middleware
container.register<MiddlewareType>('ValidationMiddleware', {
  useValue: UserValidation,
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
