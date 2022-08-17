import 'reflect-metadata';
import util from '@util/util';
import UserHelper from './UserHelper';
import Validation from './UserValidation';

const util_instance = new util();
const userHelper = new UserHelper();
const validate = new Validation(util_instance, userHelper);

describe('validate', () => {
  describe('validate', () => {
    it('Should not throw error when verify x in database', () => {
      jest.spyOn(util.prototype, 'cpfCheck').mockReturnValueOnce();
      jest.spyOn(UserHelper.prototype, 'checkIfEquals').mockReturnValueOnce();
      expect(() => validate.validate('', '', [])).not.toThrowError();
    });
  });
});
