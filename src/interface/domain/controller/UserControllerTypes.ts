import { IuserCreate } from '../services/UserCreateTypes'
import { Request, Response } from 'express'

export interface Iusercontroller {
  userService : IuserCreate
  handle: (req: Request, res: Response) => Promise<void>
}
