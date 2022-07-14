import { inject, injectable } from 'tsyringe';
import IHelper from '../../../interface/domain/helper/HelperTypes';
import IUserRepository from '../../../interface/domain/Repository/RepositoryTypes';
import IUserlist from '../../../interface/domain/services/UserListTypes';
import IUser from '../../../interface/UserTypes';

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

  listAll(): IUser[] {
    const list = this.userRepository.readAll();
    return list;
  }
}
