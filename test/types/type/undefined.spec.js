const is = require('../../../dist/umd/ispro.js');

describe('type/undefined', () => {

  test('should return true if passed parameter type is undefined', () => {
    expect(is.undefined(undefined)).toBe(true);
  });

  test('should return false if passed parameter type is not undefined', () => {
    expect(is.undefined(null)).toBe(false);
    expect(is.undefined('test')).toBe(false);
  });

  test('is.not.undefined(null) = true;', () => {
    expect(is.not.undefined(null)).toBe(true);
  });

  test('is.all.undefined(undefined, 1) = false;', () => {
    expect(is.all.undefined(undefined, 1)).toBe(false);
  });
  
  test('is.any.undefined(undefined, 2) = true;', () => {
    expect(is.any.undefined(undefined, 2)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.undefined([{}, undefined]) = false;', () => {
    expect(is.all.undefined([{}, undefined])).toBe(false);
  });

});
