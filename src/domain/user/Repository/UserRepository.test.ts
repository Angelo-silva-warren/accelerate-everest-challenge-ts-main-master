import IUser from '@interface/UserTypes';
import 'reflect-metadata';
import UserRepository from './UserRepository';

const repository = new UserRepository();

describe('UserRepository', () => {
  describe('readAll', () => {
    it('should return database when is call ', () => {
      expect(() => repository.readAll()).not.toThrowError();
    });
    describe('create', () => {
      it('Should return entity when is call', () => {
        const entity: IUser = {} as IUser;
        const result = repository.create(entity);
        expect(result).toBe(entity);
      });
    });
  });
});
