const is = require('../../../dist/umd/ispro.js');

describe('presence/empty', () => {

  test('should return true if given array is empty', () => {
    expect(is.empty([])).toBe(true);
  });

  test('should return false if given object is not empty', () => {
    expect(is.empty({ test: 'test' })).toBe(false);
  });

});
