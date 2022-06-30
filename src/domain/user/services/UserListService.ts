import { inject, injectable } from 'tsyringe'
import { Ihelper } from '../../../interface/domain/helper/HelperTypes'
import { Iuserlist } from '../../../interface/domain/services/UserListTypes'
import Iuser from '../../../interface/UserTypes'

@injectable()
class UserList implements Iuserlist {
  userHelper : Ihelper
  constructor (
    @inject('UserHelper')userHelper : Ihelper) {
    this.userHelper = userHelper
  }

  CreateList (Mock: Iuser[]) {
    const lista = this.userHelper.list(Mock)
    return lista
  }
}

export default UserList
