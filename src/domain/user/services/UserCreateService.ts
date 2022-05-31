import UserHelper from '../helper/UserHelper'
import util from '../../../util/util'
import Mock from '../mocks/UserMock'
import Iuser from '../types/UserTypes'
import UserSchema from '../helper/JoiHelper'
import { userInfo } from 'os'

class UserService {
  static async UserCreate (dados: Iuser) {
    try {
      const newUser = await UserSchema.validateAsync(dados)
      Mock.push(newUser)
      return { code: 201, msg: {message : "usuario criado"}}
    } catch (error) {
      return { code: 422, msg : error}
    }
  }
}

export default UserService
