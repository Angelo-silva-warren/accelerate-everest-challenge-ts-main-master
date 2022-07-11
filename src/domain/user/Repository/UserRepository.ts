import { injectable } from 'tsyringe'
import { IUserRepository } from '../../../interface/domain/Repository/RepositoryTypes'
import IUser from '../../../interface/UserTypes'

@injectable()
export default class UserRepository implements IUserRepository {
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
