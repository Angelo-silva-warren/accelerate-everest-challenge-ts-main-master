import IUser from '../../UserTypes'

export interface IHelper {
  emailCheck(dados: string, Mock: IUser[]): void
}
