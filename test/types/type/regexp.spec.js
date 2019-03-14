const is = require('../../../dist/umd/ispro.js');

describe('type/regexp', () => {

  test('should return true if passed parameter type is regexp', () => {
    let regexp = new RegExp();
    expect(is.regexp(regexp)).toBe(true);
  });

  test('should return false if passed parameter type is not regexp', () => {
    let notRegexp = 'test';
    expect(is.regexp(notRegexp)).toBe(false);
  });

  test('is.not.regexp([\'foo\']) => true', () => {
    expect(is.not.regexp(['foo'])).toBe(true);
  });

  test('is.all.regexp(/test/, 1) => false', () => {
    expect(is.all.regexp(/test/, 1)).toBe(false);
  });

  test('is.any.regexp(new RegExp(\'ab+c\'), 2) => true', () => {
    expect(is.any.regexp(new RegExp('ab+c'), 2)).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.any.regexp(is.all.regexp([{}, /test/])) => false', () => {
    expect(is.all.regexp([{}, /test/])).toBe(false);
  });

});
