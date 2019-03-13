const is = require('../../../dist/umd/ispro.js');

describe('regexp/socialSecurityNumber', () => {

  test('should return true if given value is socialSecurityNumber', () => {
    expect(is.socialSecurityNumber('017-90-7890')).toBe(true);
    expect(is.socialSecurityNumber('017907890')).toBe(true);
  });

  test('should return false if given value is not socialSecurityNumber', () => {
    expect(is.socialSecurityNumber('1')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.socialSecurityNumber(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.socialSecurityNumber(undefined)).toBe(false);
  });

});
