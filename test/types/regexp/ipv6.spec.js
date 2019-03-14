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

  test('is.not.ipv6(\'8:::::::7\') => true', () => {
    expect(is.not.ipv6('8:::::::7')).toBe(true);
  });

  test('is.all.ipv6(\'2001:DB8:0:0:1::1\', \'1:50:198:2::1:2:8\') => true', () => {
    expect(is.all.ipv6('2001:DB8:0:0:1::1', '1:50:198:2::1:2:8')).toBe(true);
  });
  
  test('is.any.ipv6(\'255.255.255.255\', \'2001:DB8:0:0:1::1\') => true', () => {
    expect(is.any.ipv6('255.255.255.255', '2001:DB8:0:0:1::1')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.ipv6([\'2001:DB8:0:0:1::1\', \'1.2.3\']) => false', () => {
    expect(is.all.ipv6(['2001:DB8:0:0:1::1', '1.2.3'])).toBe(false);
  });

});
