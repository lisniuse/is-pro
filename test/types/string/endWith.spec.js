const is = require('../../../dist/umd/ispro.js');

describe('string/endWith', () => {

  test('should return true if given string ends with substring', () => {
    expect(is.endWith('test', 't')).toBe(true);
    expect(is.endWith('test', 'st')).toBe(true);
  });

  test('should return false if given string does not end with substring', () => {
    expect(is.endWith('test', 'te')).toBe(false);
  });
  
  test('should prevent true return if endWith is not present in the string', () => {
    expect(is.endWith('id', '_id')).toBe(false);
  });

  test('is.not.endWith(\'nope not that\', \'not\') => true', () => {
    expect(is.not.endWith('nope not that', 'not')).toBe(true);
  });

});
