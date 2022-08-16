import IHelper from '@interface/domain/helper/HelperTypes';
import IUserValidation from '@interface/domain/helper/UserValidationTypes';
import IUser from '@interface/UserTypes';
import IUtil from '@interface/util/UtilTypes';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class Validation implements IUserValidation {
  constructor(
    @inject('Util') private util: IUtil,
    @inject('UserHelper') private userHelper: IHelper,
  ) {}

  public validate(cpf: string, email: string, database: IUser[]): void {
    this.userHelper.checkIfEquals(email, 'email', database);
    this.userHelper.checkIfEquals(cpf, 'cpf', database);
    this.util.cpfCheck(cpf);
  }
}
