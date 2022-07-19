import IUser from '../../UserTypes';

export default interface IUserValidation {
  validate(cpf: string, email: string, mock: IUser[]): Promise<void>;
}
