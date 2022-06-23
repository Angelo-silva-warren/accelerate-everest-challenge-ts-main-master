import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import UserService from '../../domain/user/services/UserCreateService'

@injectable()
class UserController {
  userService : UserService
  constructor (
    @inject('UserService') userService: UserService) {
    this.userService = userService
  }

  handle = async (req: Request, res: Response) => {
    const dados = req.body

    const createUser = await this.userService.UserCreate(dados)
    res.status(createUser.code).json(createUser.msg)
  }
}

export default UserController
