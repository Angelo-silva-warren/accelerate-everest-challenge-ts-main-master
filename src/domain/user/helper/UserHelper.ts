import IHelper from '../../../interface/domain/helper/HelperTypes';
import IUser from '../../../interface/UserTypes';
import StatusError from '../../../util/StatusError';

export default class UserHelper implements IHelper {
  emailCheck(email: string, Mock: IUser[]): void {
    const emailMock: IUser[] = Object.values(Mock);
    const emailData = emailMock.map((user: IUser) => user.email);

    if (emailData.includes(email)) {
      throw new StatusError(422, 'Email Invalido');
    }
  }
}
