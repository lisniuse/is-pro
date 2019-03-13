const is = require('../../../dist/umd/ispro.js');

describe('presenceSpace', () => {

  test('should return false if given value is not string', () => {
    expect(is.space(1)).toBe(false);
  });

  test('should return true if given value is space', () => {
    expect(is.space(' ')).toBe(true);
  });

});
