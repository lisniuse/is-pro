const is = require('../../../dist/umd/ispro.js');

describe('regexp/ipv4', () => {

  test('should return true if given value is a valid IPv4 address', () => {
    expect(is.ipv4('198.12.3.142')).toBe(true);
  });

  test('should return false if given value is not a valid IPv4 address', () => {
    expect(is.ipv4('985.12.3.4')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.ipv4(null)).toBe(false);
  });
  
  test('should return false if the given value is undefined', () => {
    expect(is.ipv4(undefined)).toBe(false);
  });

});
