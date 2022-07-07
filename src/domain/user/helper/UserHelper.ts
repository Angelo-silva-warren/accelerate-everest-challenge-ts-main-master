import { IHelper } from '../../../interface/domain/helper/HelperTypes'
import IUser from '../../../interface/UserTypes'

class UserHelper implements IHelper {
  emailCheck (dados: string, Mock: IUser[]) : boolean {
    const emailMock: IUser[] = Object.values(Mock)
    const emailData = emailMock.map((user : IUser) => user.email)

    if (emailData.includes(dados)) {
      throw new Error('Email Ja Cadastrado')
    }
    return true
  }
}

export default UserHelper
