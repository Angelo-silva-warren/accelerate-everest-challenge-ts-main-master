import { Request, Response } from 'express'
import { IUserlist } from '../services/UserListTypes'

export default interface IListcontroller {
  userList : IUserlist

  list: (req: Request, res: Response) => Promise<void>
}
