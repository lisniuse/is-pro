const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/decimal', () => {

  test('should return true if given number is decimal', () => {
    expect(is.decimal(4.2)).toBe(true);
  });

  test('should return false if given number is not decimal', () => {
    expect(is.decimal(2)).toBe(false);
  });

  test('is.not.decimal(42) => true', () => {
    expect(is.not.decimal(42)).toBe(true);
  });

  test('is.all.decimal(39.5, 41.5, -43.5) => true', () => {
    expect(is.all.decimal(39.5, 41.5, -43.5)).toBe(true);
  });
  
  test('is.any.decimal(-39, 42.5, 44) => true', () => {
    expect(is.any.decimal(-39, 42.5, 44)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.decimal([40, 42.5, -43]) => false', () => {
    expect(is.all.decimal([40, 42.5, -43])).toBe(false);
  });
  
});
