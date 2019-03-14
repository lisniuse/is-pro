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

  test('is.not.email(\'foo\') => true', () => {
    expect(is.not.email('foo')).toBe(true);
  });

  test('is.all.email(\'test@test.com\', \'foo\') => false', () => {
    expect(is.all.email('test@test.com', 'foo')).toBe(false);
  });
  
  test('is.any.email(\'test@test.com\', \'foo\') => true', () => {
    expect(is.any.email('test@test.com', 'foo')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.email(\'test@test.com\', \'foo\', undefined) => false', () => {
    expect(is.all.email('test@test.com', 'foo', undefined)).toBe(false);
  });

});
