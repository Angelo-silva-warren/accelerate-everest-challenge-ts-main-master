import Mock from '../mocks/UserMock';
import Iuser from '../types/UserTypes';
import UserSchema from '../helper/JoiHelper';

class UserService {
  static async UserCreate(dados: Iuser) {
    try {
      const newUser = await UserSchema.validateAsync(dados);
      Mock.push(newUser);
      return { code: 201, msg: { message: 'usuario criado' } };
    } catch (error) {
      return { code: 422, msg: error };
    }
  }
}

export default UserService;
