import { boolean } from 'joi'
import Iuser from '../types/UserTypes'

class UserHelper {

  static emailCheck (dados: string, Mock: Iuser[]) {
    const emailMock: Iuser[] = Object.values(Mock)
    const lista = emailMock.map((item) => item.email)
    let result : boolean = true

    lista.forEach((lista) => {
      if (lista !== dados) {
        result = true
      } else {
        result =  false
        return
      }
    })
    return result
  }

  static list (mock: Iuser[]) {
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
