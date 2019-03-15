const is = require('../../../dist/umd/ispro.js');

describe('actual/cnTelNum', () => {

  test('should return true if given a right cnTelNum', () => {
    expect(is.cnTelNum('010-1234567')).toBe(true);
  });

  test('should return false if given a wrong cnTelNum', () => {
    expect(is.cnTelNum('123456')).toBe(false);
  });

});
