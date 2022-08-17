import 'reflect-metadata';
import container from '@di/index';
import UserController from './UsersController';
import { Request, Response } from 'express';
import IUser from '@interface/UserTypes';
import UserService from '@domain/user/services/UserCreateService';

const userMock: IUser = {} as IUser;

describe('UserController', () => {
  jest.spyOn(UserService.prototype, 'userCreate').mockReturnValue(userMock);
  const req = {
    body: userMock,
  };
  const res = {
    status: jest.fn(),
    json: jest.fn(),
  };
  const next = jest.fn();
  describe('handle', () => {
    const userController = container.resolve(UserController);
    it('should return response when every', () => {
      userController.handle(
        req as unknown as Request,
        res as unknown as Response,
        next,
      );
      expect(res.status).toBeCalled();
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });
});
