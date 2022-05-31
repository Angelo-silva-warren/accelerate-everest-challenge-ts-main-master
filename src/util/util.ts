import Iuser from '../domain/user/types/UserTypes'

class util {

  static cpfCheck (dados: string) {
    const cpfClean: string = dados.replace(/\.|-/g, '')

    const test = cpfClean[0]
    for (let i = 1; i < cpfClean.length; i++) {
      if (cpfClean[i] !== test) {
        break
      } else if (i === cpfClean.length - 1) {
        return false
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
    if (firstDigit !== confirmationDigits[0]) return false
    cpfArray.push(firstDigit)
    if (calcDigit(0) !== confirmationDigits[1]) return false

    return true
  }
}

export default util
