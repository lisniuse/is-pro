const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/integer', () => {

  test('should return true if given number is integer', () => {
    expect(is.integer(4)).toBe(true);
  });

  test('should return false if given number is not integer', () => {
    expect(is.integer(2.2)).toBe(false);
  });

});
