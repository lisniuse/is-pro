const is = require('../../../dist/umd/ispro.js');

describe('actual/cnIdCode', () => {

  test('should return true if given a right idcode', () => {
    expect(is.cnIdCode('130421197502013675')).toBe(true);
  });

  test('should return false if given a wrong idcode', () => {
    expect(is.cnIdCode('123456')).toBe(false);
  });

});
