const is = require('../../../dist/umd/ispro.js');

describe('regexp/ipv6', () => {

  test('should return true if given value is a valid IPv6 address', () => {
    expect(is.ipv6('2001:DB8:0:0:1::1')).toBe(true);
  });

  test('should return false if given value is not a valid IPv6 address', () => {
    expect(is.ipv6('985.12.3.4')).toBe(false);
  });
  
  test('should return false if the given value is null', () => {
    expect(is.ipv6(null)).toBe(false);
  });
  
  test('should return false if the given value is undefined', () => {
    expect(is.ipv6(undefined)).toBe(false);
  });

});
