import IUser from '../../UserTypes'

export default interface IHelper {
  emailCheck(dados: string, Mock: IUser[]): void
}
