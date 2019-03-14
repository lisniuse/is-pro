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

  test('is.not.socialSecurityNumber(\'123\') => true', () => {
    expect(is.not.socialSecurityNumber('123')).toBe(true);
  });

  test('is.all.socialSecurityNumber(\'017-90-7890\', \'123\') => false', () => {
    expect(is.all.socialSecurityNumber('017-90-7890', '123')).toBe(false);
  });
  
  test('is.any.socialSecurityNumber(\'017-90-7890\', \'123\') => true', () => {
    expect(is.any.socialSecurityNumber('017-90-7890', '123')).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.socialSecurityNumber([\'017-90-7890\', \'123\']) => false', () => {
    expect(is.all.socialSecurityNumber(['017-90-7890', '123'])).toBe(false);
  });

});
