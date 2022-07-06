import Iuser from '../../UserTypes'

export interface IuserRepository {
  database : Iuser[]
  create(entity: Iuser): void
  readall(): Iuser[]
}
