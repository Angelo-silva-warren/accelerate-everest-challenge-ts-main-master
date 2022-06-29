import Iuser from '../../UserTypes'
import { Ihelper } from '../helper/HelperTypes'

export interface Iuserlist {
  userHelper : Ihelper
  CreateList(Mock: Iuser[]): object[]
}
