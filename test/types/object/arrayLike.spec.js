const is = require('../../../dist/umd/ispro.js');

describe('object/arrayLike', () => {

  test('should return true if given an array [1, 2, 3]', () => {
    let array = [1, 2, 3];
    expect(is.arrayLike(array)).toBe(true);
  });

  test('is.arrayLike(\'abc\') => true', () => {
    let string = 'abc';
    expect(is.arrayLike(string)).toBe(true);
  });

  test('is.arrayLike(Function) => false', () => {
    expect(is.arrayLike(Function)).toBe(false);
  });

});
