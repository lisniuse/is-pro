const is = require('../../../dist/umd/ispro.js');

describe('type/null', () => {

  test('should return true if passed parameter type is null', () => {
    expect(is.null(null)).toBe(true);
  });

  test('should return false if passed parameter type is not null', () => {
    let notNull = 'test';
    expect(is.null(notNull)).toBe(false);
  });

});
