const is = require('../../../dist/umd/ispro.js');

describe('string/lowerCase', () => {

  test('should return true if given string is lowerCase', () => {
    expect(is.lowerCase('test')).toBe(true);
  });

  test('should return false if given string is not lowerCase', () => {
    expect(is.lowerCase('TEST')).toBe(false);
  });

});
