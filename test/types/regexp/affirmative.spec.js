const is = require('../../../dist/umd/ispro.js');

describe('regexp/affirmative', () => {

  test('should return true if given value is affirmative', () => {
    expect(is.affirmative('yes')).toBe(true);
  });

  test('should return false if given value is not affirmative', () => {
    expect(is.affirmative('no')).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.affirmative(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.affirmative(undefined)).toBe(false);
  });

  test('is.not.affirmative(\'no\') => true', () => {
    expect(is.not.affirmative('no')).toBe(true);
  });

  test('is.all.affirmative(\'yes\', \'no\') => false', () => {
    expect(is.all.affirmative('yes', 'no')).toBe(false);
  });
  
  test('is.any.affirmative(\'yes\', \'no\') => true', () => {
    expect(is.any.affirmative('yes', 'no')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.affirmative([\'yes\', \'y\', \'true\', \'t\', \'ok\', \'okay\']) => true', () => {
    expect(is.all.affirmative(['yes', 'y', 'true', 't', 'ok', 'okay'])).toBe(true);
  });

});
