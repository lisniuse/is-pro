const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/finite', () => {

  test('should return true if given number is finite', () => {
    expect(is.finite(4)).toBe(true);
  });

  test('should return false if given number is not finite', () => {
    expect(is.finite(Infinity)).toBe(false);
  });

});
