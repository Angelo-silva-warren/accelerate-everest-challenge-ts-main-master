import Mock from '../mocks/UserMock'
import Iuser from '../types/UserTypes'
import util from '../../../util/util'
import UserHelper from '../helper/UserHelper'
import { inject, injectable } from 'tsyringe'

@injectable()
class UserService {
  util : util
  userHelper : UserHelper

  constructor (
    @inject('Util')util : util,
    @inject('UserHelper')userHelper : UserHelper) {
    this.util = util
    this.userHelper = userHelper
  }

  async UserCreate (dados: Iuser) {
    try {
      this.util.cpfCheck(dados.cpf)
      this.userHelper.emailCheck(dados.email, Mock)

      Mock.push(dados)
      return { code: 201, msg: 'usuario criado' }
    } catch (error) {
      let message = 'Unkown Error'
      if (error instanceof Error) message = error.message
      return { code: 422, msg: message }
    }
  }
}

export default UserService
