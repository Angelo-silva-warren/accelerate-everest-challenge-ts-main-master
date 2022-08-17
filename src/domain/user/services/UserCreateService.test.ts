import 'reflect-metadata';
import UserService from './UserCreateService';
import Validation from '../helper/UserValidation';
import UserRepository from '../Repository/UserRepository';
import IUser from '@interface/UserTypes';
import container from '@di/index';

const userMock: IUser = {} as IUser;
beforeAll(() => {
  userMock.cpf = '123.456.789-09';
  userMock.email = 'test@test.com.br';
});

describe('UserService', () => {
  describe('UserCreate', () => {
    const userService = container.resolve(UserService);
    const spyRepository = jest
      .spyOn(UserRepository.prototype, 'create')
      .mockReturnValue(userMock);
    it('should return new user when every data is correct', () => {
      const spyValidation = jest
        .spyOn(Validation.prototype, 'validate')
        .mockReturnValue();

      expect(userService.userCreate(userMock)).toBe(userMock);
      expect(spyValidation).toBeCalledWith(userMock.cpf, userMock.email, []);
      expect(spyRepository).toBeCalledWith(userMock);
    });
    it('should throw error when validate failed', async () => {
      const mockError = new Error('Some Error');
      jest.spyOn(Validation.prototype, 'validate').mockImplementation(() => {
        throw mockError;
      });
      try {
        await userService.userCreate(userMock);
      } catch (error) {
        expect(error).toBe(mockError);
      }
    });
  });
});
