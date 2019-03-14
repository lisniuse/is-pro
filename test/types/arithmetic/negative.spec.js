const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/negative', () => {

  test('should return true if given number is negative', () => {
    expect(is.negative(-3)).toBe(true);
  });

  test('should return false if given number is not negative', () => {
    expect(is.negative(2)).toBe(false);
  });

  test('is.not.negative(42) => true', () => {
    expect(is.not.negative(42)).toBe(true);
  });

  test('is.all.negative(-39, -41, -43) => true', () => {
    expect(is.all.negative(-39, -41, -43)).toBe(true);
  });
  
  test('is.any.negative(-39, 42, 44) => true', () => {
    expect(is.any.negative(-39, 42, 44)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.negative([40, 42, -43]) => false', () => {
    expect(is.all.negative([40, 42, -43])).toBe(false);
  });

});
