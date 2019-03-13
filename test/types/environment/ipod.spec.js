const is = require('../../../dist/umd/ispro.js');
is._navigator = '';
is._navigator = '';
is._platform = '';
is._userAgent = '';
is._vendor= '';

describe('environment/ipod', () => {

  test('should return false', () => {
    expect(is.ipod()).toBe(false);
  });

});
