const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/odd', () => {

  test('should return true if given number is odd', () => {
    expect(is.odd(3)).toBe(true);
  });

  test('should return true if given number is negative odd', () => {
    expect(is.odd(-3)).toBe(true);
  });

  test('should return false if given number is not odd', () => {
    expect(is.odd(2)).toBe(false);
  });

  test('should return false if given number is not integer', () => {
    expect(is.odd(2.5)).toBe(false);
  });

});
