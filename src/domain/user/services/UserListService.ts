import { inject, injectable } from 'tsyringe'
import UserHelper from '../helper/UserHelper'
import Iuser from '../types/UserTypes'

@injectable()
class UserList {
  userHelper : UserHelper
  constructor (
    @inject('UserHelper')userHelper : UserHelper) {
    this.userHelper = userHelper
  }

  CreateList (Mock: Iuser[]) {
    const lista = this.userHelper.list(Mock)
    return lista
  }
}

export default UserList
