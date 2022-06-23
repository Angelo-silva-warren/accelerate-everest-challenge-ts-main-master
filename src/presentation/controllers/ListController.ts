import { Request, Response } from 'express'
import UserList from '../../domain/user/services/UserListService'
import Mock from '../../domain/user/mocks/UserMock'
import { inject, injectable } from 'tsyringe'

@injectable()
export default class ListController {
  userList : UserList

  constructor (
    @inject('UserList')userList : UserList) {
    this.userList = userList
  }

  list = async (req: Request, res: Response) => {
    const createList = this.userList.CreateList(Mock)
    res.json(createList)
  }
}
