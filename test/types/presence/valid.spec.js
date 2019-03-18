const is = require('../../../dist/umd/ispro.js');

describe('presence/valid', () => {

  test('should return true if given value is valid', () => {
    expect(is.valid('1')).toBe(true);
    expect(is.valid([])).toBe(true);
    expect(is.valid({})).toBe(true);
    expect(is.valid(false)).toBe(true);
    expect(is.valid(0)).toBe(true);
  });

  test('should return true if given value is invalid', () => {
    expect(is.valid(undefined)).toBe(false);
    expect(is.valid('')).toBe(false);
    expect(is.valid(null)).toBe(false);
  });

  test('is.not.valid(undefined) => true', () => {
    expect(is.not.valid(undefined)).toBe(true);
  });

  test('is.all.valid(\'\', {}, [\'foo\']) => false', () => {
    expect(is.all.valid('', {}, ['foo'])).toBe(false);
  });
  
  test('is.any.valid(null, 42) => true', () => {
    expect(is.any.valid(null, 42)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.valid([null, \'foo\']) => false', () => {
    expect(is.all.valid([null, 'foo'])).toBe(false);
  });

});
