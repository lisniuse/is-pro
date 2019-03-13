const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/negative', () => {

  test('should return true if given number is negative', () => {
    expect(is.negative(-3)).toBe(true);
  });

  test('should return false if given number is not negative', () => {
    expect(is.negative(2)).toBe(false);
  });

});
