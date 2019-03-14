const is = require('../../../dist/umd/ispro.js');

describe('regexp/nanpPhone', () => {

  test('should return true if given value is nanpPhone', () => {
    expect(is.nanpPhone('609-555-0175')).toBe(true);
  });

  test('should return false if given value is not nanpPhone', () => {
    expect(is.nanpPhone('1')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.nanpPhone(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.nanpPhone(undefined)).toBe(false);
  });

  test('is.not.nanpPhone(\'123\') => true', () => {
    expect(is.not.nanpPhone('123')).toBe(true);
  });

  test('is.all.nanpPhone(\'609-555-0175\', \'123\') => false', () => {
    expect(is.all.nanpPhone('609-555-0175', '123')).toBe(false);
  });
  
  test('is.any.nanpPhone(\'609-555-0175\', \'123\') => true', () => {
    expect(is.any.nanpPhone('609-555-0175', '123')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.nanpPhone([\'609-555-0175\', \'123\']) => false', () => {
    expect(is.all.nanpPhone(['609-555-0175', '123'])).toBe(false);
  });

});
