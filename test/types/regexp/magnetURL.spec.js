const is = require('../../../dist/umd/ispro.js');

describe('regexp/magnetURL', () => {

  test('should return true if given value is magnetURL', () => {
    expect(is.magnetURL('magnet:?xt=urn:btih:3E30322D5BFC7444B7B1D8DD42404B75D0531DFB&dn=world&tr=udp://world.com:133')).toBe(true);
  });

  test('should return true if given value is not magnetURL', () => {
    expect(is.magnetURL('123456')).toBe(false);
  });
  
});
