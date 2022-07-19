import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import IListcontroller from '../../interface/domain/controller/ListControllerTypes';
import IUserlist from '../../interface/domain/services/UserListTypes';

@injectable()
export default class ListController implements IListcontroller {
  userList: IUserlist;

  constructor(@inject('UserList') userList: IUserlist) {
    this.userList = userList;
  }

  list = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const listUsers = this.userList.listAll();
      res.json(listUsers);
    } catch (err) {
      next(err);
    }
  };
}
