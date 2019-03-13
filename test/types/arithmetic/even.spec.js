const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/even', () => {

  test('should return true if given number is even', () => {
    expect(is.even(2)).toBe(true);
  });

  test('should return false if given number is not even', () => {
    expect(is.even(3)).toBe(false);
  });
  
  test('should return false if given number is not integer', () => {
    expect(is.even(2.5)).toBe(false);
  });

});
