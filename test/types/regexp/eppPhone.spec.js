const is = require('../../../dist/umd/ispro.js');

describe('regexp/eppPhone', () => {

  test('should return true if given value is eppPhone', () => {
    expect(is.eppPhone('+90.2322456789')).toBe(true);
  });

  test('should return false if given value is not eppPhone', () => {
    expect(is.eppPhone('1')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.eppPhone(null)).toBe(false);
  });
  
  test('should return false if the given value is undefined', () => {
    expect(is.eppPhone(undefined)).toBe(false);
  });

  test('is.not.eppPhone(\'123\') => true', () => {
    expect(is.not.eppPhone('123')).toBe(true);
  });

  test('is.all.eppPhone(\'+90.2322456789\', \'123\') => false', () => {
    expect(is.all.eppPhone('+90.2322456789', '123')).toBe(false);
  });
  
  test('is.any.eppPhone(\'+90.2322456789\', \'123\') => true', () => {
    expect(is.any.eppPhone('+90.2322456789', '123')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.eppPhone([\'+90.2322456789\', \'123\']) => false', () => {
    expect(is.all.eppPhone(['+90.2322456789', '123'])).toBe(false);
  });

});
