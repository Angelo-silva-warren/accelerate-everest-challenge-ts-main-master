import IUser from '../../UserTypes'

export default interface IUserRepository {
  database : IUser[]
  create(entity: IUser): void
  readAll(): IUser[]
}
