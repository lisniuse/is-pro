const is = require('../../../dist/umd/ispro.js');

describe('regexp/hexColor', () => {

  test('should return true if given value is hexColor', () => {
    expect(is.hexColor('#333')).toBe(true);
  });

  test('should return false if given value is not hexColor', () => {
    expect(is.hexColor(0.287)).toBe(false);
  });

  test('should return false if the given value is null', () => {
    expect(is.hexColor(null)).toBe(false);
  });

  test('should return false if the given value is undefined', () => {
    expect(is.hexColor(undefined)).toBe(false);
  });

  test('is.not.hexColor(0.5) => true', () => {
    expect(is.not.hexColor(0.5)).toBe(true);
  });

  test('is.all.hexColor(\'fff\', \'f50\') => true', () => {
    expect(is.all.hexColor('fff', 'f50')).toBe(true);
  });

  test('is.any.hexColor(\'ff5500\', 0.5) => true', () => {
    expect(is.any.hexColor('ff5500', 0.5)).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.hexColor([\'fff\', \'333\', \'f50\']) => true', () => {
    expect(is.all.hexColor(['fff', '333', 'f50'])).toBe(true);
  });

});
