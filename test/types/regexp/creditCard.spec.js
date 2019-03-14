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

  test('is.not.creditCard(123) => true', () => {
    expect(is.not.creditCard(123)).toBe(true);
  });

  test('is.all.creditCard(378282246310005, 123) => false', () => {
    expect(is.all.creditCard(378282246310005, 123)).toBe(false);
  });
  
  test('is.any.creditCard(378282246310005, 123) => true', () => {
    expect(is.any.creditCard(378282246310005, 123)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.creditCard([378282246310005, 123, undefined]) => false', () => {
    expect(is.all.creditCard([378282246310005, 123, undefined])).toBe(false);
  });
  
});
