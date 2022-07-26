import IController from '@interface/domain/controller/IController';
import IUserCreate from '@interface/domain/services/UserCreateTypes';
import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class UserController implements IController {
  userService: IUserCreate;
  constructor(@inject('UserService') userService: IUserCreate) {
    this.userService = userService;
  }

  public handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    try {
      const { body } = req;
      const newUser = this.userService.userCreate(body);
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }
}
