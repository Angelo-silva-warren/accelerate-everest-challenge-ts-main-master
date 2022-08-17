import IUser from '@interface/UserTypes';
import UserHelper from './UserHelper';

const helper = new UserHelper();
describe('UserHelper', () => {
  describe('checkIfEquals', () => {
    it('should not throw error when test@gmail.com.br exist in database', () => {
      expect(() => helper.checkIfEquals('test@gmail.com.br', 'email', [])).not
        .toThrow;
    });
    it('should throw error when test@gmail.com.br exist in database', () => {
      const mock: IUser = {
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
      expect(() =>
        helper.checkIfEquals('test@gmail.com.br', 'email', [mock]),
      ).toThrow();
    });
  });
});
