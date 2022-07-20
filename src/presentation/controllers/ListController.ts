import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import IController from '../../interface/domain/controller/IController';
import IUserlist from '../../interface/domain/services/UserListTypes';

@injectable()
export default class ListController implements IController {
  userList: IUserlist;

  constructor(@inject('UserList') userList: IUserlist) {
    this.userList = userList;
  }

  handle(req: Request, res: Response, next: NextFunction): void {
    try {
      const listUsers = this.userList.listAll();
      res.json(listUsers);
    } catch (error) {
      next(error);
    }
  }
}
