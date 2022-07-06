import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import { Ilistcontroller } from '../../interface/domain/controller/ListControllerTypes'
import { Iuserlist } from '../../interface/domain/services/UserListTypes'

@injectable()
export default class ListController implements Ilistcontroller {
  userList : Iuserlist

  constructor (
    @inject('UserList')userList : Iuserlist) {
    this.userList = userList
  }

  list = async (req: Request, res: Response) => {
    const createList = await this.userList.CreateList()
    res.json(createList)
  }
}
