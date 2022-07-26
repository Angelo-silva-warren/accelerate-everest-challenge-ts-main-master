import IUser from '@interface/UserTypes';

export default interface IUserRepository {
  database: IUser[];
  create(entity: IUser): IUser;
  readAll(): IUser[];
}
