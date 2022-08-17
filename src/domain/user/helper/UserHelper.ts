import IHelper from '@interface/domain/helper/HelperTypes';
import IUser from '@interface/UserTypes';
import StatusError from '@util/StatusError';

export default class UserHelper implements IHelper {
  public checkIfEquals(
    field: string,
    fieldName: keyof IUser,
    database: IUser[],
  ): void {
    const userArray: IUser[] = Object.values(database);
    userArray.map((user: IUser) => {
      if (user[fieldName] === field) {
        throw new StatusError(422, `${fieldName} ${field} já existe`);
      }
    });
  }
}
