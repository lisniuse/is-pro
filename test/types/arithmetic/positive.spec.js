const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/positive', () => {

  test('should return true if given number is positive', () => {
    expect(is.positive(3)).toBe(true);
  });

  test('should return false if given number is not positive', () => {
    expect(is.positive(-2)).toBe(false);
  });

  test('is.not.positive(-42) => true', () => {
    expect(is.not.positive(-42)).toBe(true);
  });

  test('is.all.positive(39, 41, 43) => true', () => {
    expect(is.all.positive(39, 41, 43)).toBe(true);
  });

  test('is.any.positive(-39, 42, -44) => true', () => {
    expect(is.any.positive(-39, 42, -44)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.positive([40, 42, -43]) => false', () => {
    expect(is.all.positive([40, 42, -43])).toBe(false);
  });

});
