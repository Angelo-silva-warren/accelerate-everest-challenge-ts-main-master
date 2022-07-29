import IUser from '@interface/UserTypes';
import 'reflect-metadata';
import UserRepository from './UserRepository';

const repository = new UserRepository();

describe('UserRepository', () => {
  describe('readAll', () => {
    it('should return database when is call ', () => {
      expect(() => repository.readAll()).not.toThrowError();
    });
    describe('create', () => {
      it('Should return entity when is call', () => {
        const entity: IUser = {
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
        };
        const result = repository.create(entity);
        expect(result).toBe(entity);
      });
    });
  });
});
