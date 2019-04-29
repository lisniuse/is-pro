const is = require('../../../dist/umd/ispro.js');

describe('actual/password', () => {

  test('should return true if given a right password', () => {
    expect(is.password('abcd1234567890')).toBe(true);
  });

  test('should return false if given a wrong password', () => {
    expect(is.password('abcd')).toBe(false);
  });

  test('should return false if given a wrong password', () => {
    expect(is.password('')).toBe(false);
  });

});
