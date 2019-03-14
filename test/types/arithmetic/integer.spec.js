const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/integer', () => {

  test('should return true if given number is integer', () => {
    expect(is.integer(4)).toBe(true);
  });

  test('should return false if given number is not integer', () => {
    expect(is.integer(2.2)).toBe(false);
  });

  test('should return false if given number is not integer', () => {
    expect(is.integer(2.2)).toBe(false);
  });

  test('is.not.integer(42.5) => true', () => {
    expect(is.not.integer(42.5)).toBe(true);
  });

  test('is.all.integer(39, 41, -43) => true', () => {
    expect(is.all.integer(39, 41, -43)).toBe(true);
  });
  
  test('is.any.integer(-39, 42.5, 44) => true', () => {
    expect(is.any.integer(-39, 42.5, 44)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.integer([40, 42.5, -43]) => false', () => {
    expect(is.all.integer([40, 42.5, -43])).toBe(false);
  });
              
});
