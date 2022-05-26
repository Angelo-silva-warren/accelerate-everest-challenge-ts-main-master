import UserHelper from '../helper/UserHelper'
import util from '../../../util/util'
import Mock from '../mocks/UserMock'
import Iuser from '../types/UserTypes'

class UserService {
  static UserCreate (dados: Iuser) {
    const email = UserHelper.emailValidator(
      dados.email,
      dados.email_confirmation
    )
    const field = util.fieldValidator(dados)
    const number = util.numberValidator(dados.number)
    const cpf = util.cpfSize(dados.cpf)
    const cpfCheck = util.cpfCheck(dados.cpf)
    const cellphone = util.cellphoneSize(dados.cellphone)
    const emailCheck = UserHelper.emailCheck(dados.email, Mock)

    const validator: boolean[] = [
      email,
      field,
      number,
      cpf,
      cellphone,
      emailCheck,
      cpfCheck
    ]

    if (validator) {
      // let id: number = 0;
      // id = Mock.length + 1;
      // dados['id'] = id;
      Mock.push(dados)
      console.log(Mock)
    }
    return validator
  }
}

export default UserService
