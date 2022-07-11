import { inject, injectable } from 'tsyringe'
import { IUserCreate } from '../../../interface/domain/services/UserCreateTypes'
import { IUtil } from '../../../interface/util/UtilTypes'
import { IHelper } from '../../../interface/domain/helper/HelperTypes'
import IUser from '../../../interface/UserTypes'
import { IUserRepository } from '../../../interface/domain/Repository/RepositoryTypes'

@injectable()
class UserService implements IUserCreate {
  util : IUtil
  userHelper : IHelper
  userRepository : IUserRepository

  constructor (
    @inject('Util')util : IUtil,
    @inject('UserHelper')userHelper : IHelper,
    @inject('UserRepository')userRepository : IUserRepository) {
    this.util = util
    this.userHelper = userHelper
    this.userRepository = userRepository
  }

  userCreate (dados: IUser) {
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
