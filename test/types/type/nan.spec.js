const is = require('../../../dist/umd/ispro.js');

describe('type/nan', () => {

  test('should return true if passed parameter type is NaN', () => {
    expect(is.nan(NaN)).toBe(true);
  });

  test('should return false if passed parameter type is not NaN', () => {
    let notNaN = 'test';
    expect(is.nan(notNaN)).toBe(false);
  });

  test('is.not.nan(42) => true', () => {
    expect(is.not.nan(42)).toBe(true);
  });

  test('is.all.nan(NaN, 1) => false', () => {
    expect(is.all.nan(NaN, 1)).toBe(false);
  });
  
  test('is.any.nan(NaN, 2) => true', () => {
    expect(is.any.nan(NaN, 2)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.nan([NaN, \'foo\', 1]) => false', () => {
    expect(is.all.nan([NaN, 'foo', 1])).toBe(false);
  });

});
