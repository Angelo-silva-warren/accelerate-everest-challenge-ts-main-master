import IUtil from '../../../interface/util/UtilTypes';
import IHelper from '../../../interface/domain/helper/HelperTypes';
import IUser from '../../../interface/UserTypes';
import { inject, injectable } from 'tsyringe';
import IUserValidation from '../../../interface/domain/helper/UserValidationTypes';

@injectable()
export default class Validation implements IUserValidation {
  userHelper: IHelper;
  util: IUtil;

  constructor(
    @inject('Util') util: IUtil,
    @inject('UserHelper') userHelper: IHelper,
  ) {
    this.util = util;
    this.userHelper = userHelper;
  }

  validate(cpf: string, email: string, database: IUser[]): void {
    this.userHelper.checkIfEquals(email, 'email', database);
    this.userHelper.checkIfEquals(cpf, 'cpf', database);
    this.util.cpfCheck(cpf);
  }
}
