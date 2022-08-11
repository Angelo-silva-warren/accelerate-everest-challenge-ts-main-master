import IUser from '@interface/UserTypes';
import 'reflect-metadata';
import container from '@di/index';
import UserRepository from '../Repository/UserRepository';
import UserList from './UserListService';

const userMock: IUser[] = [
  {
    full_name: 'angelo',
    email: 'test@gmail.com.br',
    email_confirmation: 'test@gmail.com.br',
    cpf: '08559032959',
    cellphone: '47 988066432',
    birthdate: '03/09/2002',
    email_sms: true,
    whatsapp: true,
    country: 'brasil',
    city: 'blumenau',
    postal_code: '12345678',
    address: 'rua tal',
    number: 3,
  },
];

describe('UserList', () => {
  describe('listAll', () => {
    const userList = container.resolve(UserList);
    it('should return IUser whe data is correct', () => {
      jest.spyOn(UserRepository.prototype, 'readAll').mockReturnValue(userMock);
      expect(userList.listAll()).toBe(userMock);
    });
  });
});
