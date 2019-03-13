const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/infinite', () => {

  test('should return true if given number is infinite', () => {
    expect(is.infinite(Infinity)).toBe(true);
  });

  test('should return false if given number is not infinite', () => {
    expect(is.infinite(1)).toBe(false);
    expect(is.infinite(NaN)).toBe(false);
  });

});
