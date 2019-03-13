const is = require('../../../dist/umd/ispro.js');

describe('type/char', () => {

  test('should return true if passed parameter type is char', () => {
    expect(is.char('t')).toBe(true);
  });

  test('should return false if passed parameter type is not a char', () => {
    expect(is.char('test')).toBe(false);
  });

});
