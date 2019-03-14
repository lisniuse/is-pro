const is = require('../../../dist/umd/ispro.js');

describe('object/objectLike', () => {

  test('should return `true` for objects', () => {
    expect(is.objectLike([1, 2, 3])).toBe(true);
    expect(is.objectLike(Object(false))).toBe(true);
    expect(is.objectLike(new Date)).toBe(true);
    expect(is.objectLike(new Error)).toBe(true);
    expect(is.objectLike({ 'a': 1 })).toBe(true);
    expect(is.objectLike(Object(0))).toBe(true);
    expect(is.objectLike(/x/)).toBe(true);
    expect(is.objectLike(Object('a'))).toBe(true);
  });
  
  test('should return `false` for non-objects', () => {
    expect(is.objectLike(1)).toBe(false);
    expect(is.objectLike('1')).toBe(false);
    expect(is.objectLike(false)).toBe(false);
  });
  
});
