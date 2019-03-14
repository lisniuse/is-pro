const is = require('../../../dist/umd/ispro.js');

describe('string/include', () => {

  test('should return true if given string contains substring', () => {
    expect(is.include('test.com', 't.com')).toBe(true);
  });

  test('should return false if given string does not contain substring', () => {
    expect(is.include('test.com', 'nope')).toBe(false);
  });

  test('is.not.include(\'test\', \'text\') => true', () => {
    expect(is.not.include('test', 'text')).toBe(true);
  });

});
