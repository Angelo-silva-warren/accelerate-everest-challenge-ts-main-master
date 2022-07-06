import { Ihelper } from '../../../interface/domain/helper/HelperTypes'
import Iuser from '../../../interface/UserTypes'

class UserHelper implements Ihelper {
  emailCheck (dados: string, Mock: Iuser[]) : boolean {
    const emailMock: Iuser[] = Object.values(Mock)
    // this.repository.getFilter('email')
    const lista = emailMock.map((item) => item.email)

    lista.forEach((lista) => {
      if (lista !== dados) {
        return true
      } else {
        throw new Error('Email Ja Cadastrado')
      }
    })
    return true
  }
}

export default UserHelper
