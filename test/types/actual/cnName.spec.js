const is = require('../../../dist/umd/ispro.js');

describe('actual/cnName', () => {

  test('should return true if given a right cnName', () => {
    expect(is.cnName('马云')).toBe(true);
  });

  test('should return false if given a wrong cnName', () => {
    expect(is.cnName('123456')).toBe(false);
  });

});
