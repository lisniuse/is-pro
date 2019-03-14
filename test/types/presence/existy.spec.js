const is = require('../../../dist/umd/ispro.js');

describe('presence/existy', () => {

  test('should return false if given value is null', () => {
    expect(is.existy(null)).toBe(false);
  });

  test('should return false if given value is undefined', () => {
    expect(is.existy(undefined)).toBe(false);
  });

  test('should return true if given value is not null or undefined', () => {
    expect(is.existy('test')).toBe(true);
  });

  test('is.not.existy(undefined) => true', () => {
    expect(is.not.existy(undefined)).toBe(true);
  });

  test('is.all.existy(null, [\'foo\']) => false', () => {
    expect(is.all.existy(null, ['foo'])).toBe(false);
  });

  test('is.any.existy(undefined, 42) => true', () => {
    expect(is.any.existy(undefined, 42)).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.existy([{}, \'foo\']) => true', () => {
    expect(is.all.existy([{}, 'foo'])).toBe(true);
  });

});
