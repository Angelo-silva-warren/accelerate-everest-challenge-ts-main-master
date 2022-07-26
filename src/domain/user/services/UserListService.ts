import IHelper from '@interface/domain/helper/HelperTypes';
import IUserRepository from '@interface/domain/Repository/RepositoryTypes';
import IUserlist from '@interface/domain/services/UserListTypes';
import IUser from '@interface/UserTypes';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class UserList implements IUserlist {
  userHelper: IHelper;
  userRepository: IUserRepository;
  constructor(
    @inject('UserHelper') userHelper: IHelper,
    @inject('UserRepository') userRepository: IUserRepository,
  ) {
    this.userHelper = userHelper;
    this.userRepository = userRepository;
  }

  public listAll(): IUser[] {
    return this.userRepository.readAll();
  }
}
