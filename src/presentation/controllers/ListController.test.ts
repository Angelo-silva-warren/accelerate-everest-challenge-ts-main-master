import 'reflect-metadata';
import container from '@di/index';
import ListController from './ListController';
import { Request, Response } from 'express';
import IUser from '@interface/UserTypes';
import UserList from '@domain/user/services/UserListService';
import StatusError from '@util/StatusError';

const userMock: IUser[] = [{} as IUser];
describe('ListController', () => {
  const req = {
    body: userMock,
  };

  const res = {
    status: jest.fn(),
    json: jest.fn(),
  };
  const next = jest.fn();
  describe('handle', () => {
    const listController = container.resolve(ListController);
    it('Should list', () => {
      jest.spyOn(UserList.prototype, 'listAll').mockReturnValue(userMock);
      listController.handle(
        req as unknown as Request,
        res as unknown as Response,
        next,
      );
      expect(res.json).toBeCalled();
    });
    it('Should throw error', () => {
      const error = new Error();
      jest.spyOn(UserList.prototype, 'listAll').mockImplementation(() => {
        throw error;
      });
      listController.handle(
        req as unknown as Request,
        res as unknown as Response,
        next,
      );
      expect(next).toBeCalledWith(new StatusError(422, `${error}`));
    });
  });
});
