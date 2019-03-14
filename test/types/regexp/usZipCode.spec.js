const is = require('../../../dist/umd/ispro.js');

describe('regexp/usZipCode', () => {

  test('should return true if given value is US zip code', () => {
    expect(is.usZipCode('02201-1020')).toBe(true);
  });

  test('should return false if given value is not US zip code', () => {
    expect(is.usZipCode('1')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.usZipCode(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.usZipCode(undefined)).toBe(false);
  });

  test('is.not.usZipCode(\'123\') => true', () => {
    expect(is.not.usZipCode('123')).toBe(true);
  });
  
  test('is.all.usZipCode(\'02201-1020\', \'123\') => false', () => {
    expect(is.all.usZipCode('02201-1020', '123')).toBe(false);
  });

  test('is.any.usZipCode(\'02201-1020\', \'123\') => true', () => {
    expect(is.any.usZipCode('02201-1020', '123')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.usZipCode([\'02201-1020\', \'123\']) => false', () => {
    expect(is.all.usZipCode(['02201-1020', '123'])).toBe(false);
  });

});
