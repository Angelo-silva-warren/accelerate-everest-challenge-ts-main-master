import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import { Iusercontroller } from '../../domain/user/interface/domain/controller/UserControllerTypes'
import { IuserCreate } from '../../domain/user/interface/domain/services/UserCreateTypes'

@injectable()
class UserController implements Iusercontroller {
  userService : IuserCreate
  constructor (
    @inject('UserService') userService: IuserCreate) {
    this.userService = userService
  }

  handle = async (req: Request, res: Response) => {
    const dados = req.body

    const createUser = await this.userService.UserCreate(dados)
    res.status(createUser.code).json(createUser.msg)
  }
}

export default UserController
