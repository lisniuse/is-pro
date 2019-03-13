const is = require('../../../dist/umd/ispro.js');

describe('presenceTruthy', () => {

  test('should return true if given value is truthy', () => {
    expect(is.truthy('test')).toBe(true);
  });

  test('should return false if given value is not truthy', () => {
    expect(is.truthy(undefined)).toBe(false);
  });
  
  test('should return false if given value is false', () => {
    expect(is.truthy(false)).toBe(false);
  });

});
