import { Request, Response } from 'express';
import { inject, injectable } from 'tsyringe';
import IUsercontroller from '../../interface/domain/controller/UserControllerTypes';
import IUserCreate from '../../interface/domain/services/UserCreateTypes';

@injectable()
export default class UserController implements IUsercontroller {
  userService: IUserCreate;
  constructor(@inject('UserService') userService: IUserCreate) {
    this.userService = userService;
  }

  handle = (req: Request, res: Response): void => {
    const { body } = req;

    const createUser = this.userService.userCreate(body);
    res.status(createUser.code).json(createUser.msg);
  };
}
