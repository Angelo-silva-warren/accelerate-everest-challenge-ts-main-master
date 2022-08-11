import IUserRepository from '@interface/domain/Repository/RepositoryTypes';
import IUserlist from '@interface/domain/services/UserListTypes';
import IUser from '@interface/UserTypes';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class UserList implements IUserlist {
  userRepository: IUserRepository;
  constructor(@inject('UserRepository') userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public listAll(): IUser[] {
    return this.userRepository.readAll();
  }
}
