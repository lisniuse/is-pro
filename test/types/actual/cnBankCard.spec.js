const is = require('../../../dist/umd/ispro.js');

describe('actual/cnBankCard', () => {

  test('should return true if given a right BankCardNumber', () => {
    expect(is.cnBankCard('6214837838319709')).toBe(true);
  });

  test('should return false if given a wrong BankCardNumber', () => {
    expect(is.cnBankCard('123456')).toBe(false);
  });

});
