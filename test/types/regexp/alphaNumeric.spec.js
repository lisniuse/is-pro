const is = require('../../../dist/umd/ispro.js');

describe('regexp/alphaNumeric', () => {

  test('should return true if given value is alpha numeric', () => {
    expect(is.alphaNumeric(123)).toBe(true);
  });

  test('should return false if given value is not alpha numeric', () => {
    expect(is.alphaNumeric('*?')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.alphaNumeric(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.alphaNumeric(undefined)).toBe(false);
  });

  test('is.not.alphaNumeric(\'*?\') => true', () => {
    expect(is.not.alphaNumeric('*?')).toBe(true);
  });

  test('is.all.alphaNumeric(\'alphaNu3er1k\', \'*?\') => false', () => {
    expect(is.all.alphaNumeric('alphaNu3er1k', '*?')).toBe(false);
  });
  
  test('is.any.alphaNumeric(\'alphaNu3er1k\', \'*?\') => true', () => {
    expect(is.any.alphaNumeric('alphaNu3er1k', '*?')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.alphaNumeric([\'alphaNu3er1k\', \'*?\']) => false', () => {
    expect(is.all.alphaNumeric(['alphaNu3er1k', '*?'])).toBe(false);
  });

});
