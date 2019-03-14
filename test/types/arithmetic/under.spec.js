const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/under', () => {

  test('should return true if given number is under maximum value', () => {
    expect(is.under(11, 12)).toBe(true);
  });

  test('should return false if given number is not under maximum value', () => {
    expect(is.under(12, 11)).toBe(false);
  });

  test('is.not.under(42, 30) => true', () => {
    expect(is.not.under(42, 30)).toBe(true);
  });

});
