import IController from '@interface/domain/controller/IController';
import IUserCreate from '@interface/domain/services/UserCreateTypes';
import StatusError from '@util/StatusError';
import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class UserController implements IController {
  constructor(@inject('UserService') private userService: IUserCreate) {}

  public handle(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    try {
      const { body } = req;
      const newUser = this.userService.userCreate(body);
      return res.status(201).json(newUser);
    } catch (error) {
      next(new StatusError(422, `${error}`));
    }
  }
}
