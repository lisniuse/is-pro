const is = require('../../../dist/umd/ispro.js');

describe('type/number', () => {

  test('should return true if passed parameter type is number', () => {
    expect(is.number(0)).toBe(true);
  });

  test('should return true if passed parameter type is number', () => {
    expect(is.number(1)).toBe(true);
  });
  
  test('should return false if passed parameter type is not number', () => {
    expect(is.number('test')).toBe(false);
  });
  
  test('should return false if passed parameter is NaN', () => {
    expect(is.number(NaN)).toBe(false);
  });

  test('is.not.number(\'42\') => true', () => {
    expect(is.not.number('42')).toBe(true);
  });

  test('is.all.number(\'foo\', 1) => true', () => {
    expect(is.not.number('42')).toBe(true);
  });

  test('is.all.number(\'foo\', 1) => false', () => {
    expect(is.all.number('foo', 1)).toBe(false);
  });
  
  test('is.any.number({}, 2) => true', () => {
    expect(is.any.number({}, 2)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.number([42, \'foo\', 1]) => false', () => {
    expect(is.all.number([42, 'foo', 1])).toBe(false);
  });
  
});
