import { Ihelper } from '../interface/domain/helper/HelperTypes'
import Iuser from '../interface/UserTypes'

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

  list (mock: Iuser[]): object[] {
    const mocks: Iuser[] = Object.values(mock)
    const listaEmail = mocks.map((item) => item.email)
    const listaName = mocks.map((item) => item.full_name)
    const listArray: object[] = []

    for (let i = 0; i < mocks.length; i++) {
      const objeto: object = {
        name: listaName[i],
        email: listaEmail[i]
      }
      listArray.push(objeto)
    }
    return listArray
  }
}

export default UserHelper
