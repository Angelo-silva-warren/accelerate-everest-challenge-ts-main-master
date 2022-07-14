import IUser from '../../UserTypes';

export default interface IHelper {
  emailCheck(email: string, Mock: IUser[]): void;
}
