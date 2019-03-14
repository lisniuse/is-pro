const is = require('../../../dist/umd/ispro.js');

describe('presence/truthy', () => {

  test('should return true if given value is truthy', () => {
    expect(is.truthy('test')).toBe(true);
  });

  test('should return false if given value is not truthy', () => {
    expect(is.truthy(undefined)).toBe(false);
  });

  test('should return false if given value is false', () => {
    expect(is.truthy(false)).toBe(false);
  });

  test('is.not.truthy(false) => true', () => {
    expect(is.not.truthy(false)).toBe(true);
  });

  test('is.all.truthy(null, true) => false', () => {
    expect(is.all.truthy(null, true)).toBe(false);
  });

  test('is.any.truthy(undefined, true) => true', () => {
    expect(is.any.truthy(undefined, true)).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.truthy([{}, true]) => true', () => {
    expect(is.all.truthy([{}, true])).toBe(true);
  });

});
