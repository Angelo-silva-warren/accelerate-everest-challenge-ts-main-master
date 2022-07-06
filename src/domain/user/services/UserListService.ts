import { inject, injectable } from 'tsyringe'
import { Ihelper } from '../../../interface/domain/helper/HelperTypes'
import { IuserRepository } from '../../../interface/domain/Repository/RepositoryTypes'
import { Iuserlist } from '../../../interface/domain/services/UserListTypes'

@injectable()
class UserList implements Iuserlist {
  userHelper : Ihelper
  userRepository : IuserRepository
  constructor (
    @inject('UserHelper')userHelper : Ihelper,
    @inject('UserRepository')userRepository : IuserRepository) {
    this.userHelper = userHelper
    this.userRepository = userRepository
  }

  CreateList () {
    const lista = this.userRepository.readall()
    return lista
  }
}

export default UserList
