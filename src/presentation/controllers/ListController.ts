import { Request, Response } from 'express'
import Mock from '../../domain/user/mocks/UserMock'
import { inject, injectable } from 'tsyringe'
import { Iuserlist } from '../../domain/user/interface/domain/services/UserListTypes'
import { Ilistcontroller } from '../../domain/user/interface/domain/controller/ListControllerTypes'

@injectable()
export default class ListController implements Ilistcontroller {
  userList : Iuserlist

  constructor (
    @inject('UserList')userList : Iuserlist) {
    this.userList = userList
  }

  list = async (req: Request, res: Response) => {
    const createList = this.userList.CreateList(Mock)
    res.json(createList)
  }
}
