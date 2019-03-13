const is = require('../../../dist/umd/ispro.js');

describe('array/inArray', () => {

  test('should return true if the item is in the array', () => {
    let value = 3;
    let array = [1, 4, 6, 7, 3];
    expect(is.inArray(value, array)).toBe(true);
  });

  test('should return false if the item is not in the array', () => {
    let value = 2;
    let array = [1, 4, 6, 7, 3];
    expect(is.inArray(value, array)).toBe(false);
  });

});
