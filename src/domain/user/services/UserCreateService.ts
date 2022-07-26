import IUserValidation from '@interface/domain/helper/UserValidationTypes';
import IUserRepository from '@interface/domain/Repository/RepositoryTypes';
import IUserCreate from '@interface/domain/services/UserCreateTypes';
import IUser from '@interface/UserTypes';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class UserService implements IUserCreate {
  userRepository: IUserRepository;
  validation: IUserValidation;

  constructor(
    @inject('UserRepository') userRepository: IUserRepository,
    @inject('Validation') validation: IUserValidation,
  ) {
    this.userRepository = userRepository;
    this.validation = validation;
  }

  userCreate(newUser: IUser): void {
    this.validation.validate(
      newUser.cpf,
      newUser.email,
      this.userRepository.database,
    );
    this.userRepository.create(newUser);
  }
}
