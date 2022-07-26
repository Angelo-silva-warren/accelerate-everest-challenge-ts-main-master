import IUtil from '@interface/util/UtilTypes';
import StatusError from './StatusError';

export default class util implements IUtil {
  public cpfCheck(cpf: string): void {
    const cpfClean: string = cpf.replace(/\.|-/g, '');

    const test = cpfClean[0];
    for (let i = 1; i < cpfClean.length; i++) {
      if (cpfClean[i] !== test) {
        break;
      } else if (i === cpfClean.length - 1) {
        throw new StatusError(422, 'CPF Invalido');
      }
    }

    let cpfArray = Array.from(cpfClean, Number);
    const confirmationDigits = cpfArray.slice(-2);
    cpfArray = cpfArray.slice(0, -2);
    function calcDigit(start = 1) {
      let result: number | undefined =
        cpfArray.reduce(
          (
            previousValue: number,
            currentValue: number,
            currentIndex: number,
          ) => {
            const totalSum =
              previousValue + currentValue * (currentIndex + start);
            return totalSum;
          },
          0,
        ) % 11;
      if (result >= 10) {
        const resultString = Array.from(result.toString(), Number);
        result = resultString.pop();
      }
      return result;
    }

    const firstDigit = calcDigit();
    if (firstDigit !== confirmationDigits[0])
      throw new StatusError(422, 'CPF Invalido');
    cpfArray.push(firstDigit);
    if (calcDigit(0) !== confirmationDigits[1])
      throw new StatusError(422, 'CPF Invalido');
  }
}
