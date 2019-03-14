const is = require('../../../dist/umd/ispro.js');

describe('string/capitalized', () => {

  test('should return true if given string is capitalized', () => {
    expect(is.capitalized('Test')).toBe(true);
  });

  test('should return false if given string is not capitalized', () => {
    expect(is.capitalized('test')).toBe(false);
  });

  test('should return true if words are capitalized', () => {
    expect(is.capitalized('Test Is Good')).toBe(true);
    expect(is.capitalized('Test   Is   Good')).toBe(true);
  });

  test('should return false if words are not capitalized', () => {
    expect(is.capitalized('Test is good')).toBe(false);
  });

  test('is.not.capitalized(\'nope not capitalized\') => true', () => {
    expect(is.not.capitalized('nope not capitalized')).toBe(true);
  });

  test('is.all.capitalized(\'Yeap\', \'All\', \'Capitalized\') => true', () => {
    expect(is.all.capitalized('Yeap', 'All', 'Capitalized')).toBe(true);
  });
  
  test('is.any.capitalized(\'Yeap\', \'some\', \'Capitalized\') => true', () => {
    expect(is.any.capitalized('Yeap', 'some', 'Capitalized')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.capitalized([\'Nope\', \'not\']) => false', () => {
    expect(is.all.capitalized(['Nope', 'not'])).toBe(false);
  });
  
});
