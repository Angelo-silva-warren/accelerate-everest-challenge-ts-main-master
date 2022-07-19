import { Request, Response, NextFunction } from 'express';
import { inject, injectable } from 'tsyringe';
import IUsercontroller from '../../interface/domain/controller/UserControllerTypes';
import IUserCreate from '../../interface/domain/services/UserCreateTypes';

@injectable()
export default class UserController implements IUsercontroller {
  userService: IUserCreate;
  constructor(@inject('UserService') userService: IUserCreate) {
    this.userService = userService;
  }

  handle = (req: Request, res: Response, next: NextFunction): void => {
    try {
      const { body } = req;
      this.userService.userCreate(body);
      res.status(201).json('Usuário Criado');
    } catch (error) {
      next(error);
    }
  };
}
