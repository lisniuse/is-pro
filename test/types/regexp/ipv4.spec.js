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

  test('is.not.ipv4(\'8:::::::7\') => true', () => {
    expect(is.not.ipv4('8:::::::7')).toBe(true);
  });

  test('is.all.ipv4(\'198.12.3.142\', \'123.123.123.123\') => true', () => {
    expect(is.all.ipv4('198.12.3.142', '123.123.123.123')).toBe(true);
  });
  
  test('is.any.ipv4(\'255.255.255.255\', \'850..1.4\') => true', () => {
    expect(is.any.ipv4('255.255.255.255', '850..1.4')).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.ipv4([\'198.12.3.142\', \'1.2.3\']) => false', () => {
    expect(is.all.ipv4(['198.12.3.142', '1.2.3'])).toBe(false);
  });

});
