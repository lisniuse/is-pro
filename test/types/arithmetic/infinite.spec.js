const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/infinite', () => {

  test('should return true if given number is infinite', () => {
    expect(is.infinite(Infinity)).toBe(true);
  });

  test('should return false if given number is not infinite', () => {
    expect(is.infinite(1)).toBe(false);
    expect(is.infinite(NaN)).toBe(false);
  });

  test('is.not.infinite(42) => true', () => {
    expect(is.not.infinite(42)).toBe(true);
  });

  test('is.all.infinite(Infinity, -Infinity, -43 / 0) => true', () => {
    expect(is.all.infinite(Infinity, -Infinity, -43 / 0)).toBe(true);
  });
  
  test('is.any.infinite(-39, Infinity, 44) => true', () => {
    expect(is.any.infinite(-39, Infinity, 44)).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.infinite([Infinity, -Infinity, 42.5]) => false', () => {
    expect(is.all.infinite([Infinity, -Infinity, 42.5])).toBe(false);
  });

});
