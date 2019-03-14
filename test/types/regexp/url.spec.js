const is = require('../../../dist/umd/ispro.js');

describe('regexp/url', () => {

  test('should return true if given value is url', () => {
    expect(is.url('http://www.test.com')).toBe(true);
  });

  test('should return false if given value is not url', () => {
    expect(is.url(1)).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.url(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.url(undefined)).toBe(false);
  });

  test('is.not.url(true) => true', () => {
    expect(is.not.url(true)).toBe(true);
  });

  test('is.all.url(\'http://www.test.com\', \'foo\') => false', () => {
    expect(is.all.url('http://www.test.com', 'foo')).toBe(false);
  });

  test('is.any.url(\'http://www.test.com\', true) => true', () => {
    expect(is.any.url('http://www.test.com', true)).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.url([\'http://www.test.com\', \'foo\', undefined]) => false', () => {
    expect(is.all.url(['http://www.test.com', 'foo', undefined])).toBe(false);
  });

});
