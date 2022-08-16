import IUserValidation from '@interface/domain/helper/UserValidationTypes';
import IUserRepository from '@interface/domain/Repository/RepositoryTypes';
import IUserCreate from '@interface/domain/services/UserCreateTypes';
import IUser from '@interface/UserTypes';
import { inject, injectable } from 'tsyringe';

@injectable()
export default class UserService implements IUserCreate {
  constructor(
    @inject('UserRepository') private userRepository: IUserRepository,
    @inject('Validation') private validation: IUserValidation,
  ) {}

  public userCreate(body: IUser): IUser {
    this.validation.validate(
      body.cpf,
      body.email,
      this.userRepository.database,
    );

    return this.userRepository.create(body);
  }
}
