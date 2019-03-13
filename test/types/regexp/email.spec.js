const is = require('../../../dist/umd/ispro.js');

describe('regexp/email', () => {

  test('should return true if given value is email', () => {
    expect(is.email('test@test.com')).toBe(true);
  });

  test('should return false if given value is not email', () => {
    expect(is.email('test@test')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.email(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.email(undefined)).toBe(false);
  });

});
