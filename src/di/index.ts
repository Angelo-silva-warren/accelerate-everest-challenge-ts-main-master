import { container } from 'tsyringe'
import UserHelper from '../domain/user/helper/UserHelper'
import UserService from '../domain/user/services/UserCreateService'
import UserList from '../domain/user/services/UserListService'
import ListController from '../presentation/controllers/ListController'
import UserController from '../presentation/controllers/UsersController'
import util from '../util/util'

// Router
container.registerSingleton<ListController>(
  'ListController',
  ListController
)
container.registerSingleton<UserController>(
  'UserController',
  UserController
)
// UserControoler
container.registerSingleton<UserService>(
  'UserService',
  UserService
)
// ListController
container.registerSingleton<UserList>(
  'UserList',
  UserList
)
// UserListService
container.registerSingleton<UserHelper>(
  'UserHelper',
  UserHelper
)
// UserCreatService
container.registerSingleton<util>(
  'Util',
  util
)
