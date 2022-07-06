import { injectable } from 'tsyringe'
import Iuser from '../../../interface/UserTypes'

@injectable()
export default class UserRepository {
  database : Iuser[]
  constructor () {
    this.database = []
  }

  create (entity : Iuser) : void {
    this.database.push(entity)
  }

  readall () {
    return this.database
  }
}
