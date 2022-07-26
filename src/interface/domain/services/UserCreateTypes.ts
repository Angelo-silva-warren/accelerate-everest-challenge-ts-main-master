import IUser from '@interface/UserTypes';

interface serviceResponse {
  code: number;
  msg?: string;
}
export default interface IUserCreate {
  userCreate(newUser: IUser): void;
}
