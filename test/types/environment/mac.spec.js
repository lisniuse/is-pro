const is = require('../../../dist/umd/ispro.js');
is._navigator = '';
is._navigator = '';
is._platform = '';
is._userAgent = '';
is._vendor= '';

describe('environment/mac', () => {

  test('should return false', () => {
    expect(is.mac()).toBe(false);
  });

});
