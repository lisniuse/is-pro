const is = require('../../../dist/umd/ispro.js');

describe('array/sorted', () => {

  test('should return true if given array is sorted', () => {
    let array1 = [1, 2, 3, 4, 5];
    expect(is.sorted(array1)).toBe(true);
    expect(is.sorted(array1, '>=')).toBe(true);
    expect(is.sorted(array1, '>')).toBe(true);
    expect(is.sorted(array1, '<=')).toBe(false);
    expect(is.sorted(array1, '<')).toBe(false);

    let array2 = [5, 4, 4, 3, 1];
    expect(is.sorted(array2)).toBe(false);
    expect(is.sorted(array2, '>=')).toBe(false);
    expect(is.sorted(array2, '>')).toBe(false);
    expect(is.sorted(array2, '<=')).toBe(true);
    expect(is.sorted(array2, '<')).toBe(false);

    let array3 = [10];
    expect(is.sorted(array3)).toBe(true);
    expect(is.sorted(array3, '>=')).toBe(true);
    expect(is.sorted(array3, '>')).toBe(true);
    expect(is.sorted(array3, '<=')).toBe(true);
    expect(is.sorted(array3, '<')).toBe(true);
  });

  test('should return false if given array is not sorted', () => {
    let array = [1, 2, 3, 5, 4];
    expect(is.sorted(array)).toBe(false);
    expect(is.sorted(array, '>=')).toBe(false);
    expect(is.sorted(array, '>')).toBe(false);
    expect(is.sorted(array, '<=')).toBe(false);
    expect(is.sorted(array, '<')).toBe(false);
  });

});
