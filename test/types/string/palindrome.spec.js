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

  test('is.not.palindrome(\'nope not palindrome\')', () => {
    expect(is.palindrome('test')).toBe(false);
  });

  test('is.not.palindrome(\'nope not palindrome\') => true', () => {
    expect(is.not.palindrome('nope not palindrome')).toBe(true);
  });

  test('is.not.palindrome(\'tt\') => false', () => {
    expect(is.not.palindrome('tt')).toBe(false);
  });
  
  test('is.all.palindrome(\'testset\', \'tt\') => true', () => {
    expect(is.all.palindrome('testset', 'tt')).toBe(true);
  });
  
  test('is.any.palindrome(\'Yeap\', \'some\', \'testset\') => true', () => {
    expect(is.any.palindrome('Yeap', 'some', 'testset')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.palindrome([\'Nope\', \'testset\']) => false', () => {
    expect(is.all.palindrome(['Nope', 'testset'])).toBe(false);
  });

});
