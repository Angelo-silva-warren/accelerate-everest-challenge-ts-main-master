import util from './util';

const util_instance = new util();
describe('Util', () => {
  describe('calcDigit', () => {
    it('Should result 0 when calculating 123456789', () => {
      const result = util_instance.calcDigit([1, 2, 3, 4, 5, 6, 7, 8, 9]);

      expect(result).toBe(0);
    });
  });
  describe('cpfCheck', () => {
    it('should not throw error when validating cpf 123.456.789.09 ', () => {
      util_instance.cpfCheck('12345678909');
      expect(() => util_instance.cpfCheck('123.456.789.09')).not.toThrow();
    });
    it('Should throw error when validating cpf 123.456.789.08 ', () => {
      expect(() => util_instance.cpfCheck('12345678908')).toThrow();
    });
    it('Should throw error when to try clean string', () => {
      expect(() => util_instance.cpfCheck('11111111111')).toThrow();
    });
  });
});
