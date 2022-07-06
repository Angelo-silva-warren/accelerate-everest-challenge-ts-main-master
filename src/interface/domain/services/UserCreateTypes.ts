import Iuser from '../../UserTypes'
import { Iutil } from '../../util/UtilTypes'
import { Ihelper } from '../helper/HelperTypes'

interface serviceResponse{
  code: number;
  msg?: string;
}
export interface IuserCreate {
  util : Iutil
  userHelper : Ihelper

  UserCreate(dados: Iuser): serviceResponse
}
