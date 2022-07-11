import { IHelper } from '../../../interface/domain/helper/HelperTypes'
import IUser from '../../../interface/UserTypes'

export default class UserHelper implements IHelper {
  emailCheck (dados: string, Mock: IUser[]) : void {
    const emailMock: IUser[] = Object.values(Mock)
    const emailData = emailMock.map((user : IUser) => user.email)

    if (emailData.includes(dados)) {
      throw new Error('Email Ja Cadastrado')
    }
  }
}
