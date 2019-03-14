const is = require('../../../dist/umd/ispro.js');

describe('type/char', () => {

  test('should return true if passed parameter type is char', () => {
    expect(is.char('t')).toBe(true);
  });

  test('should return false if passed parameter type is not a char', () => {
    expect(is.char('test')).toBe(false);
  });

  test('is.not.char([\'foo\']) => true', () => {
    expect(is.not.char(['foo'])).toBe(true);
  });

  test('is.all.char(\'f\', 1) => false', () => {
    expect(is.all.char('f', 1)).toBe(false);
  });

  test('is.any.char(\'f\', 2) => true', () => {
    expect(is.any.char('f', 2)).toBe(true);
  });

  test('is.all.char([\'f\', \'o\', \'o\']) => true', () => {
    expect(is.all.char(['f', 'o', 'o'])).toBe(true);
  });

});
