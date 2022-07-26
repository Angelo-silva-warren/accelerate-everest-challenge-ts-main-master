import IUserRepository from '@interface/domain/Repository/RepositoryTypes';
import IUser from '@interface/UserTypes';
import { injectable } from 'tsyringe';

@injectable()
export default class UserRepository implements IUserRepository {
  database: IUser[];
  constructor() {
    this.database = [];
  }

  create(entity: IUser): IUser {
    this.database.push(entity);
    return entity;
  }

  readAll() {
    return this.database;
  }
}
