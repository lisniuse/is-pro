const is = require('../../../dist/umd/ispro.js');

describe('typeSameType', () => {

  test('should return true if passed parameter types are same', () => {
    expect(is.sameType(1, 2)).toBe(true);
    expect(is.sameType('test', 'test')).toBe(true);
  });

  test('should return false if passed parameter types are not same', () => {
    expect(is.sameType(1, 'test')).toBe(false);
  });

});
