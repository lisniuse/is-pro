const is = require('../../../dist/umd/ispro.js');

describe('regexp/ip', () => {

  test('should return true if given value is a valid IP address', () => {
    expect(is.ip('2001:DB8:0:0:1::1')).toBe(true);
  });

  test('should return false if given value is not a valid IP address', () => {
    expect(is.ip('985.12.3.4')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.ip(null)).toBe(false);
  });
  
  test('should return false if the given value is undefined', () => {
    expect(is.ip(undefined)).toBe(false);
  });

});
