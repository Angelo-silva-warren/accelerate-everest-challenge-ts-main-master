import { container } from 'tsyringe'
import UserHelper from '../domain/user/helper/UserHelper'
import UserService from '../domain/user/services/UserCreateService'
import UserList from '../domain/user/services/UserListService'
import ListController from '../presentation/controllers/ListController'
import UserController from '../presentation/controllers/UsersController'
import util from '../util/util'
import { Iutil } from '../interface/util/UtilTypes'
import { Ihelper } from '../interface/domain/helper/HelperTypes'
import { Iuserlist } from '../interface/domain/services/UserListTypes'
import { IuserCreate } from '../interface/domain/services/UserCreateTypes'
import { Iusercontroller } from '../interface/domain/controller/UserControllerTypes'
import { Ilistcontroller } from '../interface/domain/controller/ListControllerTypes'

// Router
container.registerSingleton<Ilistcontroller>(
  'ListController',
  ListController
)
container.registerSingleton<Iusercontroller>(
  'UserController',
  UserController
)
// UserControoler
container.registerSingleton<IuserCreate>(
  'UserService',
  UserService
)
// ListController
container.registerSingleton<Iuserlist>(
  'UserList',
  UserList
)
// UserListService
container.registerSingleton<Ihelper>(
  'UserHelper',
  UserHelper
)
// UserCreatService
container.registerSingleton<Iutil>(
  'Util',
  util
)
