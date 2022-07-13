import IUser from '../../UserTypes'
import IHelper from '../helper/HelperTypes'

export default interface IUserlist {
  userHelper : IHelper
  listAll (): IUser[]
}
