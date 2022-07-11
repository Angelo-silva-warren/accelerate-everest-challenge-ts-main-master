import IUser from '../../UserTypes'
import { IUtil } from '../../util/UtilTypes'
import { IHelper } from '../helper/HelperTypes'

interface serviceResponse{
  code: number;
  msg?: string;
}
export interface IUserCreate {
  util : IUtil
  userHelper : IHelper

  userCreate(dados: IUser): serviceResponse
}
