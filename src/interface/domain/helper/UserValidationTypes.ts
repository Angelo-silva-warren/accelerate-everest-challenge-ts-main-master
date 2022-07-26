import IUser from '@interface/UserTypes';

export default interface IUserValidation {
  validate(cpf: string, email: string, mock: IUser[]): void;
}
