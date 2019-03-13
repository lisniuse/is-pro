const is = require('../../../dist/umd/ispro.js');

describe('regexp/creditCard', () => {

  test('should return true if given value is credit card', () => {
    expect(is.creditCard(378282246310005)).toBe(true);
  });

  test('should return false if given value is not credit card', () => {
    expect(is.creditCard(123)).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.creditCard(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.creditCard(undefined)).toBe(false);
  });

});
