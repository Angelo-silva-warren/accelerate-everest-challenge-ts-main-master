import Iuser from '../domain/user/types/UserTypes'

class util {
  static numberValidator (dados: number) {
    if (!isNaN(dados)) {
      return true
    } else {
      throw new Error('O campo Number so recebe numeros')
    }
  }

  static fieldValidator (dados: Iuser) {
    const dataValues: Iuser[] = Object.values(dados)
    const dataParameters: string[] = Object.keys(dados)
    let i = 0

    while (i < dataValues.length) {
      if (!dataValues[i]) {
        if (
          dataParameters[i] !== 'whatsapp' &&
          dataParameters[i] !== 'email_sms'
        ) {
          throw new Error(`Campo ${dataParameters[i]} está vazio`)
        }
      }
      i++
    }
    return true
  }

  static cpfCheck (dados: string) {
    const cpfClean: string = dados.replace(/\.|-/g, '')

    const test = cpfClean[0]
    for (let i = 1; i < cpfClean.length; i++) {
      if (cpfClean[i] !== test) {
        break
      } else if (i === cpfClean.length - 1) {
        throw new Error('Cpf invalido')
      }
    }

    let cpfArray = Array.from(cpfClean, Number)
    const confirmationDigits = cpfArray.slice(-2)
    cpfArray = cpfArray.slice(0, -2)
    function calcDigit (start = 1) {
      let result: number | undefined =
        cpfArray.reduce(
          (
            previousValue: number,
            currentValue: number,
            currentIndex: number
          ) => {
            const totalSum =
              previousValue + currentValue * (currentIndex + start)
            return totalSum
          },
          0
        ) % 11
      if (result >= 10) {
        const resultString = Array.from(result.toString(), Number)
        result = resultString.pop()
      }
      return result
    }

    const firstDigit = calcDigit()
    if (firstDigit !== confirmationDigits[0]) throw new Error('Cpf invalido')
    cpfArray.push(firstDigit)
    if (calcDigit(0) !== confirmationDigits[1]) throw new Error('Cpf invalido')

    return true
  }
}

export default util
