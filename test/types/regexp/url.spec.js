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

});
