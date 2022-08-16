import IController from '@interface/domain/controller/IController';
import IUserlist from '@interface/domain/services/UserListTypes';
import StatusError from '@util/StatusError';
import { NextFunction, Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class ListController implements IController {
  constructor(@inject('UserList') private userList: IUserlist) {}

  public handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    try {
      const listUsers = this.userList.listAll();
      return res.json(listUsers);
    } catch (error) {
      next(new StatusError(422, `${error}`));
    }
  }
}
