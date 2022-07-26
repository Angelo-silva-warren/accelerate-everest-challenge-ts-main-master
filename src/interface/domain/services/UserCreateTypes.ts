import IUser from '@interface/UserTypes';

export default interface IUserCreate {
  userCreate(newUser: IUser): IUser;
}
