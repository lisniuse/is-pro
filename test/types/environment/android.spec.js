const is = require('../../../dist/umd/ispro.js');
is._navigator = '';
is._navigator = '';
is._platform = '';
is._userAgent = '';
is._vendor= '';

describe('environment/android', () => {

  test('should return false', () => {
    expect(is.android()).toBe(false);
  });

  test('is.not.android() => true', () => {
    expect(is.not.android()).toBe(true);
  });

});

