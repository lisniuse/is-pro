const is = require('../../../dist/umd/ispro.js');

describe('regexp/hexadecimal', () => {

  test('should return true if given value is hexadecimal', () => {
    expect(is.hexadecimal('ff')).toBe(true);
    expect(is.hexadecimal('0xff')).toBe(true);
  });

  test('should return false if given value is not hexadecimal', () => {
    expect(is.hexadecimal(0.287)).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.hexadecimal(null)).toBe(false);
  });
  
  test('should return false if the given value is undefined', () => {
    expect(is.hexadecimal(undefined)).toBe(false);
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
