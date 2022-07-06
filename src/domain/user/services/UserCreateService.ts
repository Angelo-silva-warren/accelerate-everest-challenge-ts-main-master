import { inject, injectable } from 'tsyringe'
import { IuserCreate } from '../../../interface/domain/services/UserCreateTypes'
import { Iutil } from '../../../interface/util/UtilTypes'
import { Ihelper } from '../../../interface/domain/helper/HelperTypes'
import Iuser from '../../../interface/UserTypes'
import { IuserRepository } from '../../../interface/domain/Repository/RepositoryTypes'

@injectable()
class UserService implements IuserCreate {
  util : Iutil
  userHelper : Ihelper
  userRepository : IuserRepository

  constructor (
    @inject('Util')util : Iutil,
    @inject('UserHelper')userHelper : Ihelper,
    @inject('UserRepository')userRepository : IuserRepository) {
    this.util = util
    this.userHelper = userHelper
    this.userRepository = userRepository
  }

  UserCreate (dados: Iuser) {
    try {
      this.util.cpfCheck(dados.cpf)
      this.userHelper.emailCheck(dados.email, this.userRepository.database)

      this.userRepository.create(dados)
      return { code: 201, msg: 'usuario criado' }
    } catch (error) {
      let message = 'Unkown Error'
      if (error instanceof Error) message = error.message
      return { code: 422, msg: message }
    }
  }
}

export default UserService
