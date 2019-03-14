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

  test('is.not.even(41) => true', () => {
    expect(is.not.even(41)).toBe(true);
  });

  test('is.all.even(40, 42, 44) => true', () => {
    expect(is.all.even(40, 42, 44)).toBe(true);
  });
  
  test('is.any.even(39, 42, 43) => true', () => {
    expect(is.any.even(39, 42, 43)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.even([40, 42, 43]) => false', () => {
    expect(is.all.even([40, 42, 43])).toBe(false);
  });

});
