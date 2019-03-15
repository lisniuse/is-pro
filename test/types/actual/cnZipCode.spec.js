const is = require('../../../dist/umd/ispro.js');

describe('actual/cnZipCode', () => {

  test('should return true if given a right cnZipCode', () => {
    expect(is.cnZipCode('100000')).toBe(true);
  });

  test('should return false if given a wrong cnZipCode', () => {
    expect(is.cnZipCode(1222)).toBe(false);
  });

});
