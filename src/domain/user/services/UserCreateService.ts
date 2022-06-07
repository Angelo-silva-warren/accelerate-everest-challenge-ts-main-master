import Mock from '../mocks/UserMock';
import Iuser from '../types/UserTypes';
import util from '../../../util/util';
import UserHelper from '../helper/UserHelper';

class UserService {
  static async UserCreate(dados: Iuser) {
    try {

      util.cpfCheck(dados.cpf)
      UserHelper.emailCheck(dados.email, Mock)

      Mock.push(dados)
      return { code: 201, msg: 'usuario criado'  };
    } catch (error) {
      // let message
      // if (error instanceof Error) message = error.message
      return { code: 422, msg: error}
    }
  }
}

export default UserService;
