const is = require('../../../dist/umd/ispro.js');

describe('string/startWith', () => {

  test('should return true if given string starts with substring', () => {
    expect(is.startWith('test', 'te')).toBe(true);
  });
  
  test('should return false if given string does not start with substring', () => {
    expect(is.startWith('test', 'st')).toBe(false);
  });

});
