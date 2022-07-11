import { injectable } from 'tsyringe'
import IUser from '../../../interface/UserTypes'

@injectable()
export default class UserRepository {
  database : IUser[]
  constructor () {
    this.database = []
  }

  create (entity : IUser) : void {
    this.database.push(entity)
  }

  readAll () {
    return this.database
  }
}
