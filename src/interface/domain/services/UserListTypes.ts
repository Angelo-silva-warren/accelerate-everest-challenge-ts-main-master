import IUser from '../../UserTypes'
import { IHelper } from '../helper/HelperTypes'

export interface IUserlist {
  userHelper : IHelper
  createList(): IUser[]
}
