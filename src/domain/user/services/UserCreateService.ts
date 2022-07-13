import { inject, injectable } from 'tsyringe'
import IUserCreate from '../../../interface/domain/services/UserCreateTypes'
import IUtil from '../../../interface/util/UtilTypes'
import IHelper from '../../../interface/domain/helper/HelperTypes'
import IUser from '../../../interface/UserTypes'
import IUserRepository from '../../../interface/domain/Repository/RepositoryTypes'

@injectable()
export default class UserService implements IUserCreate {
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

  userCreate (newUser: IUser) : {
    code: number;
    msg: string;
} {
    try {
      this.util.cpfCheck(newUser.cpf)
      this.userHelper.emailCheck(newUser.email, this.userRepository.database)

      this.userRepository.create(newUser)
      return { code: 201, msg: 'usuario criado' }
    } catch (error) {
      let message = 'Unkown Error'
      if (error instanceof Error) message = error.message
      return { code: 422, msg: message }
    }
  }
}
