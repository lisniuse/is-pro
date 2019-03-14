const is = require('../../../dist/umd/ispro.js');

describe('presence/empty', () => {

  test('should return true if given array is empty', () => {
    expect(is.empty([])).toBe(true);
  });

  test('should return false if given object is not empty', () => {
    expect(is.empty({ test: 'test' })).toBe(false);
  });

  test('is.not.empty([\'foo\']) => true', () => {
    expect(is.not.empty(['foo'])).toBe(true);
  });

  test('is.all.empty(\'\', {}, [\'foo\']) => false', () => {
    expect(is.all.empty('', {}, ['foo'])).toBe(false);
  });
  
  test('is.any.empty([], 42) => true', () => {
    expect(is.any.empty([], 42)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.empty([{}, \'foo\']) => false', () => {
    expect(is.all.empty([{}, 'foo'])).toBe(false);
  });

});
