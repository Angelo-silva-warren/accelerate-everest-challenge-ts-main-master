import { Request, Response } from 'express'
import UserService from '../../domain/user/services/UserCreateService'
import UserList from '../../domain/user/services/UserListService'
import Mock from '../../domain/user/mocks/UserMock'

class UserController {
  static async create (req: Request, res: Response) {
    const dados = req.body

    const createUser =  await UserService.UserCreate(dados)

    res.status(createUser.code).json(createUser.msg)
  }

  static list (req: Request, res: Response) {
    const createList = UserList.CreateList(Mock)
    console.log(createList)
    res.json(createList)
  }
}

export default UserController
