const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/positive', () => {

  test('should return true if given number is positive', () => {
    expect(is.positive(3)).toBe(true);
  });

  test('should return false if given number is not positive', () => {
    expect(is.positive(-2)).toBe(false);
  });

});
