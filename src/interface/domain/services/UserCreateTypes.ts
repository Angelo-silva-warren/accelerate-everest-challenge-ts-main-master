import IUser from '../../UserTypes';

interface serviceResponse {
  code: number;
  msg?: string;
}
export default interface IUserCreate {
  userCreate(newUser: IUser): serviceResponse;
}
