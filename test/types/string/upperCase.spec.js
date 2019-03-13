const is = require('../../../dist/umd/ispro.js');

describe('string/upperCase', () => {

  test('should return true if given string is uppercase', () => {
    expect(is.upperCase('TEST')).toBe(true);
  });

  test('should return false if given string is not uppercase', () => {
    expect(is.upperCase('test')).toBe(false);
  });

});
