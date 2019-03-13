const is = require('../../../dist/umd/ispro.js');

describe('regexp/affirmative', () => {

  test('should return true if given value is affirmative', () => {
    expect(is.affirmative('yes')).toBe(true);
  });

  test('should return false if given value is not affirmative', () => {
    expect(is.affirmative('no')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.affirmative(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.affirmative(undefined)).toBe(false);
  });

});
