const is = require('../../../dist/umd/ispro.js');

describe('presence/falsy', () => {

  test('should return false if given value is truthy', () => {
    expect(is.falsy('test')).toBe(false);
  });

  test('should return true if given value is falsy', () => {
    expect(is.falsy(undefined)).toBe(true);
  });

  test('should return true if given value is false', () => {
    expect(is.falsy(false)).toBe(true);
  });

  test('is.not.falsy(true) => true', () => {
    expect(is.not.falsy(true)).toBe(true);
  });

  test('is.all.falsy(null, false) => true', () => {
    expect(is.all.falsy(null, false)).toBe(true);
  });
  
  test('is.any.falsy(undefined, true) => true', () => {
    expect(is.any.falsy(undefined, true)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.falsy([false, true, undefined]) => false', () => {
    expect(is.all.falsy([false, true, undefined])).toBe(false);
  });

});
