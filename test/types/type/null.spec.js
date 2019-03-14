const is = require('../../../dist/umd/ispro.js');

describe('type/null', () => {

  test('should return true if passed parameter type is null', () => {
    expect(is.null(null)).toBe(true);
  });

  test('should return false if passed parameter type is not null', () => {
    let notNull = 'test';
    expect(is.null(notNull)).toBe(false);
  });

  test('is.not.null(42) => true', () => {
    expect(is.not.null(42)).toBe(true);
  });

  test('is.all.null(null, 1) => false', () => {
    expect(is.all.null(null, 1)).toBe(false);
  });
  
  test('is.any.null(null, 2) => true', () => {
    expect(is.any.null(null, 2)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.null([null, \'foo\', 1]) => false', () => {
    expect(is.all.null([null, 'foo', 1])).toBe(false);
  });

});
