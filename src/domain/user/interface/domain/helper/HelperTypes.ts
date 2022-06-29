import Iuser from '../../UserTypes'

export interface Ihelper {
  emailCheck(dados: string, Mock: Iuser[]): boolean
  list(mock: Iuser[]): object[]
}
