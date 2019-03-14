const is = require('../../../dist/umd/ispro.js');

describe('presence/space', () => {

  test('should return false if given value is not string', () => {
    expect(is.space(1)).toBe(false);
  });

  test('should return true if given value is space', () => {
    expect(is.space(' ')).toBe(true);
  });

  test('is.not.space(true) => true', () => {
    expect(is.not.space(true)).toBe(true);
  });

  test('is.all.space(\' \', \'foo\') => false', () => {
    expect(is.all.space(' ', 'foo')).toBe(false);
  });
  
  test('is.any.space(\' \', true) => false', () => {
    expect(is.all.space(' ', 'foo')).toBe(false);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.space([\' \', \'foo\', undefined]) => false', () => {
    expect(is.all.space([' ', 'foo', undefined])).toBe(false);
  });

});
