import IUser from '../../UserTypes';

export default interface IHelper {
  checkIfEquals(field: string, fieldName: keyof IUser, database: IUser[]): void;
}
