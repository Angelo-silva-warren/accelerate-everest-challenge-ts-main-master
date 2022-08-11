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

  public userCreate(body: IUser): IUser {
    this.validation.validate(
      body.cpf,
      body.email,
      this.userRepository.database,
    );

    return this.userRepository.create(body);
  }
}
