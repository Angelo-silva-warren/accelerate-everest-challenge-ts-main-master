import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import { IUsercontroller } from '../../interface/domain/controller/UserControllerTypes'
import { IUserCreate } from '../../interface/domain/services/UserCreateTypes'

@injectable()
class UserController implements IUsercontroller {
  userService : IUserCreate
  constructor (
    @inject('UserService') userService: IUserCreate) {
    this.userService = userService
  }

  handle = async (req: Request, res: Response) => {
    const dados = req.body

    const createUser = await this.userService.userCreate(dados)
    res.status(createUser.code).json(createUser.msg)
  }
}

export default UserController
