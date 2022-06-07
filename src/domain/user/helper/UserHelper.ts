import Iuser from '../types/UserTypes';

class UserHelper {
  static emailCheck(dados: string, Mock: Iuser[]) {
    const emailMock: Iuser[] = Object.values(Mock);
    const lista = emailMock.map((item) => item.email);

    lista.forEach((lista) => {
      if (lista !== dados) {
        return true;
      } else {
        throw new Error("Email Ja Cadastrado");
      }
    });
    return true;
  }

  static list(mock: Iuser[]) {
    const mocks: Iuser[] = Object.values(mock);
    const listaEmail = mocks.map((item) => item.email);
    const listaName = mocks.map((item) => item.full_name);
    const listArray: object[] = [];

    for (let i = 0; i < mocks.length; i++) {
      const objeto: object = {
        name: listaName[i],
        email: listaEmail[i],
      };
      listArray.push(objeto);
    }
    return listArray;
  }
}

export default UserHelper;
