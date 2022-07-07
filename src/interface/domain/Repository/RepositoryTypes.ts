import IUser from '../../UserTypes'

export interface IUserRepository {
  database : IUser[]
  create(entity: IUser): void
  readall(): IUser[]
}
