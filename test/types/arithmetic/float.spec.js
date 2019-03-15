const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/float', () => {

  test('should return true if given number is float', () => {
    expect(is.float(4.1)).toBe(true);
  });

  test('should return false if given number is not float', () => {
    expect(is.float(1)).toBe(false);
  });

  test('is.not.float(1) => true', () => {
    expect(is.not.float(1)).toBe(true);
  });

  test('is.all.float(1.1, 2.1, 3.33) => true', () => {
    expect(is.all.float(1.1, 2.1, 3.33)).toBe(true);
  });
  
  test('is.any.float(3.33, Infinity, 44) => true', () => {
    expect(is.any.float(3.33, Infinity, 44)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.float([Infinity, -Infinity, 42.5]) => false', () => {
    expect(is.all.float([2, 2, 42.5])).toBe(false);
  });

});
