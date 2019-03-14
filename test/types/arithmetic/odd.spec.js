const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/odd', () => {

  test('should return true if given number is odd', () => {
    expect(is.odd(3)).toBe(true);
  });

  test('should return true if given number is negative odd', () => {
    expect(is.odd(-3)).toBe(true);
  });

  test('should return false if given number is not odd', () => {
    expect(is.odd(2)).toBe(false);
  });

  test('should return false if given number is not integer', () => {
    expect(is.odd(2.5)).toBe(false);
  });

  test('is.not.odd(42) => true', () => {
    expect(is.not.odd(42)).toBe(true);
  });

  test('is.all.odd(39, 41, 43) => true', () => {
    expect(is.all.odd(39, 41, 43)).toBe(true);
  });
  
  test('is.any.odd(39, 42, 44) => true', () => {
    expect(is.any.odd(39, 42, 44)).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.odd([40, 42, 43]) => false', () => {
    expect(is.all.odd([40, 42, 43])).toBe(false);
  });

});
