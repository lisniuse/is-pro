const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/finite', () => {

  test('should return true if given number is finite', () => {
    expect(is.finite(4)).toBe(true);
  });

  test('should return false if given number is not finite', () => {
    expect(is.finite(Infinity)).toBe(false);
  });

  test('is.not.finite(42 / 0) => true', () => {
    expect(is.not.finite(42 / 0)).toBe(true);
  });

  test('is.all.finite(39, 41, -43) => true', () => {
    expect(is.all.finite(39, 41, -43)).toBe(true);
  });
  
  test('is.any.finite(-39, Infinity, 44) => true', () => {
    expect(is.any.finite(-39, Infinity, 44)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.finite([Infinity, -Infinity, 42.5]) => false', () => {
    expect(is.all.finite([Infinity, -Infinity, 42.5])).toBe(false);
  });

});
