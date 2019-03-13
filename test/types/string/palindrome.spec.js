const is = require('../../../dist/umd/ispro.js');

describe('string/palindrome', () => {

  test('should return true if given string is palindrome', () => {
    expect(is.palindrome('abba')).toBe(true);
    expect(is.palindrome('testset')).toBe(true);
    expect(is.palindrome('A man, a plan, a canal - Panama!')).toBe(true);
  });
  
  test('should return false if given string is not palindrome', () => {
    expect(is.palindrome('test')).toBe(false);
  });

});
