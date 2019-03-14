const is = require('../../../dist/umd/ispro.js');

describe('string/lowerCase', () => {

  test('should return true if given string is lowerCase', () => {
    expect(is.lowerCase('test')).toBe(true);
  });

  test('should return false if given string is not lowerCase', () => {
    expect(is.lowerCase('TEST')).toBe(false);
  });

  test('is.not.lowerCase(\'Nope\') => true', () => {
    expect(is.not.lowerCase('Nope')).toBe(true);
  });

  test('is.all.lowerCase(\'yeap\', \'NOPE\') => false', () => {
    expect(is.all.lowerCase('yeap', 'NOPE')).toBe(false);
  });
  
  test('is.any.lowerCase(\'yeap\', \'NOPE\') => true', () => {
    expect(is.any.lowerCase('yeap', 'NOPE')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.lowerCase([\'yeap\', \'all lowercase\']) => true', () => {
    expect(is.all.lowerCase(['yeap', 'all lowercase'])).toBe(true);
  });

});
