const is = require('../../../dist/umd/ispro.js');

describe('regexp/ukPostCode', () => {

  test('should return true if given value is UK post code', () => {
    expect(is.ukPostCode('B184BJ')).toBe(true);
  });

  test('should return false if given value is not UK post code', () => {
    expect(is.ukPostCode('1')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.ukPostCode(null)).toBe(false);
  });
  
  test('should return false if the given value is undefined', () => {
    expect(is.ukPostCode(undefined)).toBe(false);
  });

  test('is.not.ukPostCode(\'123\') => true', () => {
    expect(is.not.ukPostCode('123')).toBe(true);
  });

  test('is.all.ukPostCode(\'B184BJ\', \'123\') => false', () => {
    expect(is.all.ukPostCode('B184BJ', '123')).toBe(false);
  });
  
  test('is.any.ukPostCode(\'B184BJ\', \'123\') => true', () => {
    expect(is.any.ukPostCode('B184BJ', '123')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.ukPostCode([\'B184BJ\', \'123\']) => false', () => {
    expect(is.all.ukPostCode(['B184BJ', '123'])).toBe(false);
  });

});
