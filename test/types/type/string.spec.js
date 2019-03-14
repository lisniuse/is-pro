const is = require('../../../dist/umd/ispro.js');

describe('type/string', () => {

  test('should return true if passed parameter type is string', () => {
    expect(is.string('test')).toBe(true);
  });

  test('should return false if passed parameter type is not string', () => {
    expect(is.string(1)).toBe(false);
  });

  test('is.not.string([\'foo\']) => true', () => {
    expect(is.not.string(['foo'])).toBe(true);
  });
  
  test('is.all.string(\'foo\', 1) => true', () => {
    expect(is.not.string(['foo'])).toBe(true);
  });
  
  test('is.any.string(\'foo\', 2) => true', () => {
    expect(is.any.string('foo', 2)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.string([{}, \'foo\']) => false', () => {
    expect(is.all.string([{}, 'foo'])).toBe(false);
  });

});
