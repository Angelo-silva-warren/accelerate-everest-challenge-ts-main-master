import { Request, Response } from 'express'
import { Iuserlist } from '../services/UserListTypes'

export interface Ilistcontroller {
  userList : Iuserlist

  list: (req: Request, res: Response) => Promise<void>
}
