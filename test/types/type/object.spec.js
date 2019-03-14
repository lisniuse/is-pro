const is = require('../../../dist/umd/ispro.js');

describe('type/object', () => {

  test('should return true if passed parameter type is object', () => {
    expect(is.object({})).toBe(true);
  });

  test('should return false if passed parameter type is not object', () => {
    let notObject = 'test';
    expect(is.object(notObject)).toBe(false);
  });

  test('is.not.object(\'foo\') => true', () => {
    expect(is.not.object('foo')).toBe(true);
  });

  test('is.all.object({}, 1) => false', () => {
    expect(is.all.object({}, 1)).toBe(false);
  });
  
  test('is.any.object({}, 2) => true', () => {
    expect(is.any.object({}, 2)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.object([{}, new Object()]) => true', () => {
    expect(is.all.object([{}, new Object()])).toBe(true);
  });

});
