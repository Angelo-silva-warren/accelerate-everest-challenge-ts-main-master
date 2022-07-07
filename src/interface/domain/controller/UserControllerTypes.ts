import { IUserCreate } from '../services/UserCreateTypes'
import { Request, Response } from 'express'

export interface IUsercontroller {
  userService : IUserCreate
  handle: (req: Request, res: Response) => Promise<void>
}
