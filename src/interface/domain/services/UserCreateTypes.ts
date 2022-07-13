import IUser from '../../UserTypes'
import IUtil from '../../util/UtilTypes'
import IHelper from '../helper/HelperTypes'

interface serviceResponse{
  code: number;
  msg?: string;
}
export default interface IUserCreate {
  util : IUtil
  userHelper : IHelper

  userCreate(newUser: IUser): serviceResponse
}
