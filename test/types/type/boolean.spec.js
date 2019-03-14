const is = require('../../../dist/umd/ispro.js');

describe('type/boolean', () => {

  test('should return true if passed parameter type is boolean', () => {
    let bool = true;
    expect(is.boolean(bool)).toBe(true);
  });

  test('should return false if passed parameter type is not boolean', () => {
    let notBool = 'test';
    expect(is.boolean(notBool)).toBe(false);
  });

  test('is.not.boolean({foo: \'bar\'}) => true', () => {
    expect(is.not.boolean({foo: 'bar'})).toBe(true);
  });
  
  test('is.all.boolean(true, \'bar\') => false', () => {
    expect(is.all.boolean(true, 'bar')).toBe(false);
  });

  test('is.any.boolean(true, \'bar\') => true', () => {
    expect(is.any.boolean(true, 'bar')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.boolean([true, \'foo\', \'bar\']) => false', () => {
    expect(is.all.boolean([true, 'foo', 'bar'])).toBe(false);
  });

});
