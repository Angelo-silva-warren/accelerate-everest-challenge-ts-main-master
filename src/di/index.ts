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

// Router
container.registerSingleton<IListcontroller>('ListController', ListController);
container.registerSingleton<IUsercontroller>('UserController', UserController);
// UserControoler
container.registerSingleton<IUserCreate>('UserService', UserService);
// ListController
container.registerSingleton<IUserlist>('UserList', UserList);
// UserListService
container.registerSingleton<IHelper>('UserHelper', UserHelper);
// UserCreatService
container.registerSingleton<IUtil>('Util', util);
// UserRepository
container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
