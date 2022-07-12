import IUserCreate from '../services/UserCreateTypes'
import { Request, Response } from 'express'

export default interface IUsercontroller {
  userService : IUserCreate
  handle: (req: Request, res: Response) => Promise<void>
}
