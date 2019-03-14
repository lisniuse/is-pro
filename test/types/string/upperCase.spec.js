const is = require('../../../dist/umd/ispro.js');

describe('string/upperCase', () => {

  test('should return true if given string is uppercase', () => {
    expect(is.upperCase('TEST')).toBe(true);
  });

  test('should return false if given string is not uppercase', () => {
    expect(is.upperCase('test')).toBe(false);
  });

  test('is.not.upperCase(\'Nope\') => true', () => {
    expect(is.not.upperCase('Nope')).toBe(true);
  });

  test('is.all.upperCase(\'YEAP\', \'nope\') => false', () => {
    expect(is.all.upperCase('YEAP', 'nope')).toBe(false);
  });
  
  test('is.any.upperCase(\'YEAP\', \'nope\') => true', () => {
    expect(is.any.upperCase('YEAP', 'nope')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.upperCase([\'YEAP\', \'ALL UPPERCASE\']) => true', () => {
    expect(is.all.upperCase(['YEAP', 'ALL UPPERCASE'])).toBe(true);
  });

});
