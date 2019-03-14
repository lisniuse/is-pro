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

  test('is.not.ip(\'8:::::::7\') => true', () => {
    expect(is.not.ip('8:::::::7')).toBe(true);
  });

  test('is.all.ip(\'0:1::4:ff5:54:987:C\', \'123.123.123.123\') => true', () => {
    expect(is.all.ip('0:1::4:ff5:54:987:C', '123.123.123.123')).toBe(true);
  });
  
  test('is.any.ip(\'123.8.4.3\', \'0.0.0.0\') => true', () => {
    expect(is.any.ip('123.8.4.3', '0.0.0.0')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.ip([\'123.123.23.12\', \'A:B:C:D:E:F:0:0\']) => true', () => {
    expect(is.all.ip(['123.123.23.12', 'A:B:C:D:E:F:0:0'])).toBe(true);
  });
  
});
