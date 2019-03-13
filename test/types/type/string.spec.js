const is = require('../../../dist/umd/ispro.js');

describe('typeString', () => {

  test('should return true if passed parameter type is string', () => {
    expect(is.string('test')).toBe(true);
  });

  test('should return false if passed parameter type is not string', () => {
    expect(is.string(1)).toBe(false);
  });

});
