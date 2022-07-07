import { inject, injectable } from 'tsyringe'
import { IHelper } from '../../../interface/domain/helper/HelperTypes'
import { IUserRepository } from '../../../interface/domain/Repository/RepositoryTypes'
import { IUserlist } from '../../../interface/domain/services/UserListTypes'

@injectable()
class UserList implements IUserlist {
  userHelper : IHelper
  userRepository : IUserRepository
  constructor (
    @inject('UserHelper')userHelper : IHelper,
    @inject('UserRepository')userRepository : IUserRepository) {
    this.userHelper = userHelper
    this.userRepository = userRepository
  }

  CreateList () {
    const lista = this.userRepository.readall()
    return lista
  }
}

export default UserList
