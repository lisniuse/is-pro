const is = require('../../../dist/umd/ispro.js');

describe('string/capitalized', () => {

  test('should return true if given string is capitalized', () => {
    expect(is.capitalized('Test')).toBe(true);
  });

  test('should return false if given string is not capitalized', () => {
    expect(is.capitalized('test')).toBe(false);
  });

  test('should return true if words are capitalized', () => {
    expect(is.capitalized('Test Is Good')).toBe(true);
    expect(is.capitalized('Test   Is   Good')).toBe(true);
  });

  test('should return false if words are not capitalized', () => {
    expect(is.capitalized('Test is good')).toBe(false);
  });

});
